"use client";

import { useEffect, useState } from "react";

interface Event {
  id: number;
  date: string; // formato: YYYY-MM-DD
  time: string; // formato: HH:mm
  description: string;
}

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsThisWeek, setEventsThisWeek] = useState<Event[]>([]);
  const [eventsByMonth, setEventsByMonth] = useState<Record<string, Event[]>>({});

  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      const parsedEvents: Event[] = JSON.parse(savedEvents);
      setEvents(parsedEvents);

      // Filtrar eventos da semana
      const now = new Date();
      const weekStart = new Date(now.setDate(now.getDate() - now.getDay() + 1)); // Segunda-feira
      const weekEnd = new Date(now.setDate(weekStart.getDate() + 6)); // Domingo
      const eventsThisWeek = parsedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= weekStart && eventDate <= weekEnd;
      });
      setEventsThisWeek(eventsThisWeek);

      // Agrupar eventos por mês
      const groupedByMonth = parsedEvents.reduce((acc, event) => {
        const month = new Date(event.date).toLocaleString("pt-BR", { month: "long", year: "numeric" });
        if (!acc[month]) acc[month] = [];
        acc[month].push(event);
        return acc;
      }, {} as Record<string, Event[]>);
      setEventsByMonth(groupedByMonth);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Eventos</h1>

      {/* Eventos da Semana */}
      <section>
        <h2 className="text-xl font-bold mb-4">Eventos da Semana</h2>
        {eventsThisWeek.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsThisWeek.map((event) => (
              <div key={event.id} className="card bg-base-100 shadow-md p-4">
                <h3 className="text-lg font-semibold">{event.description}</h3>
                <p className="text-sm text-gray-600">📅 {formatDate(event.date)}</p>
                <p className="text-sm text-gray-600">⏰ {event.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Nenhum evento esta semana.</p>
        )}
      </section>

      {/* Eventos por Mês */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">Eventos por Mês</h2>
        {Object.keys(eventsByMonth).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(eventsByMonth).map(([month, events]) => (
              <div key={month} className="card bg-base-200 shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">{month}</h3>
                <ul className="space-y-2">
                  {events.map((event) => (
                    <li key={event.id} className="border-b pb-2">
                      <p><strong>📅 Data:</strong> {formatDate(event.date)}</p>
                      <p><strong>⏰ Hora:</strong> {event.time}</p>
                      <p><strong>📖 Descrição:</strong> {event.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Nenhum evento registrado.</p>
        )}
      </section>
    </div>
  );
}
