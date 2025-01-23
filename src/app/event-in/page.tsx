"use client";

import { useState, useEffect } from "react";

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

  // Carregar eventos do localStorage ao inicializar a página
  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId !== null) {
      // Atualizar evento existente
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingId ? { ...event, ...formData } : event
        )
      );
      setEditingId(null);
    } else {
      // Adicionar novo evento
      const newEvent: Event = { id: Date.now(), ...formData };
      setEvents((prev) => [...prev, newEvent]);
    }

    // Limpar formulário
    setFormData({ date: "", time: "", description: "" });
  };

  // Editar evento
  const handleEdit = (id: number) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (eventToEdit) {
      setFormData({ date: eventToEdit.date, time: eventToEdit.time, description: eventToEdit.description });
      setEditingId(id);
    }
  };

  // Remover evento
  const handleDelete = (id: number) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Eventos</h1>

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

      <h2 className="text-xl font-bold mt-8">Eventos Cadastrados</h2>
      {events.length > 0 ? (
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
