// src/app/events/page.tsx
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Para controlar o estado do modal

  // Carregar eventos ao inicializar a página
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/events");
        if (res.ok) {
          const data = await res.json();
          setEvents(data);
        } else {
          setError("Erro ao carregar eventos.");
        }
      } catch (err) {
        setError("Erro ao carregar eventos.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Organizar eventos por mês
  const groupByMonth = (events: Event[]) => {
    return events.reduce((acc: any, event: Event) => {
      const month = new Date(event.date).toLocaleString('default', { month: 'long' });
      if (!acc[month]) acc[month] = [];
      acc[month].push(event);
      return acc;
    }, {});
  };

  // Atualizar formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar formulário para criar ou editar evento
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.time || !formData.description) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const res = await fetch("/api/events", {
        method: editingId !== null ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editingId,
          date: formData.date,
          time: formData.time,
          description: formData.description,
        }),
      });

      if (res.ok) {
        const updatedEvents = await fetch("/api/events").then((res) => res.json());
        setEvents(updatedEvents);
        setEditingId(null);
        setFormData({ date: "", time: "", description: "" });
        setIsModalOpen(false); // Fechar o modal após salvar
      } else {
        setError("Erro ao salvar evento.");
      }
    } catch (err) {
      setError("Erro ao salvar evento.");
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

  // Excluir evento
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/events?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setEvents((prev) => prev.filter((event) => event.id !== id));
      } else {
        setError("Erro ao excluir evento.");
      }
    } catch (err) {
      setError("Erro ao excluir evento.");
    }
  };

  const groupedByMonth = groupByMonth(events);

  // Função para obter o nome do dia da semana
  const getDayName = (date: string) => {
    const day = new Date(date).toLocaleDateString('pt-BR', { weekday: 'long' });
    return day.charAt(0).toUpperCase() + day.slice(1); // Capitaliza o primeiro caractere
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Programação de Eventos</h1>
      <hr className="my-4 border-t-2 border-gray-300" />
      <h2 className="text-xl font-semibold mb-4">Programação da Semana</h2>

      {loading ? (
        <p>Carregando eventos...</p>
      ) : (
        <>
          <div className="flex justify-between mb-6">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="btn btn-primary"
            >
              Inserir Evento
            </button>
          </div>

          {/* Exibição dos eventos organizados por semana */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <div key={event.id} className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h3 className="font-bold text-lg">
                    {getDayName(event.date)} - <strong>{event.description}</strong> - {event.time}
                  </h3>
                  <p>{event.description}</p>
                  <button onClick={() => handleEdit(event.id)} className="btn btn-sm btn-secondary">Editar</button>
                  <button onClick={() => handleDelete(event.id)} className="btn btn-sm btn-error">Excluir</button>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-8 border-t-2 border-gray-300" />
          <h2 className="text-xl font-semibold mb-4">Eventos por Mês</h2>

          {/* Exibição dos eventos organizados por mês */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(groupedByMonth).map((month) => (
              <div key={month} className="container bg-base-100 p-4 shadow-md rounded-lg">
                <h3 className="font-bold text-lg">{month}</h3>
                {groupedByMonth[month].map((event: Event) => (
                  <div key={event.id} className="mb-2">
                    <p>
                      <strong>{new Date(event.date).getDate()}</strong> - <strong>{event.description}</strong> - {event.time}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Inserir Evento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button type="submit" className="btn btn-primary w-full">
                {editingId !== null ? "Salvar Alterações" : "Cadastrar Evento"}
              </button>
            </form>
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="btn btn-secondary mt-4 w-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
