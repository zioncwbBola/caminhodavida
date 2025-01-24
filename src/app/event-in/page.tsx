"use client";

import { useState, useEffect } from "react";
import { neon } from '@neondatabase/serverless';

interface Event {
  id: number;
  date: string; // formato: YYYY-MM-DD
  time: string; // formato: HH:mm
  description: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [formData, setFormData] = useState<Omit<Event, "id">>({
    date: "",
    time: "",
    description: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null); // Para mostrar erros de API
  const [loading, setLoading] = useState<boolean>(false); // Para controle de loading

  // Carregar eventos do localStorage ou da API ao inicializar a página
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Inicia o loading
      try {
        const res = await fetch("/api/events");
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
        } else {
          const errorText = await res.text();
          setError(`Erro ao carregar eventos. Status: ${res.status} - ${errorText}`);
        }
      } catch (err) {
        setError("Erro ao carregar eventos da API.");
        console.error("Erro ao carregar eventos:", err);
      } finally {
        setLoading(false); // Finaliza o loading
      }
    };
    fetchEvents();
  }, []);

  // Salvar eventos no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Atualizar formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar formulário para criar ou editar evento
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifique se os dados do formulário são válidos
    if (!formData.date || !formData.time || !formData.description) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    const sql = neon(`${process.env.DATABASE_URL}`);
    const query = editingId !== null
      ? 'UPDATE events SET date = $1, time = $2, description = $3 WHERE id = $4'
      : 'INSERT INTO events (date, time, description) VALUES ($1, $2, $3)';
    const params = editingId !== null
      ? [formData.date, formData.time, formData.description, editingId]
      : [formData.date, formData.time, formData.description];

    try {
      await sql(query, params);
      const updatedEvents = await fetch("/api/events").then((res) => res.json());
      setEvents(updatedEvents);
      setEditingId(null);
      setFormData({ date: "", time: "", description: "" });
    } catch (err) {
      setError(`Erro ao salvar evento: ${(err as Error).message || "Unknown error"}`);
      console.error("Erro ao salvar evento:", err);
    }
  };

  // Editar evento
  const handleEdit = (id: number) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (eventToEdit) {
      setFormData({
        date: eventToEdit.date,
        time: eventToEdit.time,
        description: eventToEdit.description,
      });
      setEditingId(id);
    }
  };

  // Remover evento
  const handleDelete = async (id: number) => {
    try {
      const sql = neon(`${process.env.DATABASE_URL}`);
      await sql('DELETE FROM events WHERE id = $1', [id]);
      setEvents((prev) => prev.filter((event) => event.id !== id));
    } catch (err) {
      setError(`Erro ao excluir evento: ${(err as Error).message || "Unknown error"}`);
      console.error("Erro ao excluir evento:", err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Eventos</h1>

      {/* Exibir erro, caso haja */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Formulário de cadastro ou edição de eventos */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-4 rounded-md">
        <div>
          <label className="label">Data</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">Hora</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">Descrição</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingId !== null ? "Salvar Alterações" : "Cadastrar Evento"}
        </button>
      </form>

      {/* Exibir lista de eventos cadastrados */}
      <h2 className="text-xl font-bold mt-8">Eventos Cadastrados</h2>
      {loading ? (
        <p>Carregando eventos...</p>
      ) : events.length > 0 ? (
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event.id} className="border rounded-md p-4 bg-base-100 flex justify-between items-start">
              <div>
                <p><strong>Data:</strong> {event.date}</p>
                <p><strong>Hora:</strong> {event.time}</p>
                <p><strong>Descrição:</strong> {event.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(event.id)} className="btn btn-sm btn-secondary">
                  Editar
                </button>
                <button onClick={() => handleDelete(event.id)} className="btn btn-sm btn-error">
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Nenhum evento cadastrado.</p>
      )}
    </div>
  );
}
