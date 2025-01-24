// // pages/events.tsx
// "use client";

// import { useState, useEffect } from "react";

// interface Event {
//   id: number;
//   date: string; // formato: YYYY-MM-DD
//   time: string; // formato: HH:mm
//   description: string;
// }

// export default function EventsPage() {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [formData, setFormData] = useState<Omit<Event, "id">>({
//     date: "",
//     time: "",
//     description: "",
//   });
//   const [editingId, setEditingId] = useState<number | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   // Load events on page load
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch("/api/events");
//         if (res.ok) {
//           const data = await res.json();
//           setEvents(data);
//         } else {
//           setError("Erro ao carregar eventos.");
//         }
//       } catch (err) {
//         setError("Erro ao carregar eventos.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvents();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.date || !formData.time || !formData.description) {
//       setError("Todos os campos são obrigatórios.");
//       return;
//     }

//     const method = editingId ? "PUT" : "POST";
//     const body = JSON.stringify({
//       ...formData,
//       ...(editingId ? { id: editingId } : {}),
//     });

//     try {
//       const res = await fetch("/api/events", {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body,
//       });

//       if (res.ok) {
//         const updatedEvents = await res.json();
//         setEvents(updatedEvents);
//         setFormData({ date: "", time: "", description: "" });
//         setEditingId(null);
//         setSuccess("Evento salvo com sucesso!");
//       } else {
//         const errorText = await res.text();
//         setError(`Erro ao salvar evento: ${errorText}`);
//       }
//     } catch (err) {
//       setError("Erro ao salvar evento.");
//     }
//   };

//   const handleEdit = (id: number) => {
//     const eventToEdit = events.find((event) => event.id === id);
//     if (eventToEdit) {
//       setFormData({
//         date: eventToEdit.date,
//         time: eventToEdit.time,
//         description: eventToEdit.description,
//       });
//       setEditingId(id);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       const res = await fetch("/api/events", {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ deleteId: id }),
//       });

//       if (res.ok) {
//         setEvents((prev) => prev.filter((event) => event.id !== id));
//         setSuccess("Evento excluído com sucesso!");
//       } else {
//         const errorText = await res.text();
//         setError(`Erro ao excluir evento: ${errorText}`);
//       }
//     } catch (err) {
//       setError("Erro ao excluir evento.");
//     }
//   };

//   if (loading) {
//     return <p>Carregando eventos...</p>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Cadastro de Eventos</h1>

//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       {success && <div className="text-green-500 mb-4">{success}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-4 rounded-md">
//         <div>
//           <label className="label">Data</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="label">Hora</label>
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div>
//           <label className="label">Descrição</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="textarea textarea-bordered w-full"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           {editingId !== null ? "Salvar Alterações" : "Cadastrar Evento"}
//         </button>
//       </form>

//       <h2 className="text-xl font-bold mt-8">Eventos Cadastrados</h2>
//       {events.length > 0 ? (
//         <ul className="space-y-2">
//           {events.map((event) => (
//             <li key={event.id} className="border rounded-md p-4 bg-base-100 flex justify-between items-start">
//               <div>
//                 <p><strong>Data:</strong> {event.date}</p>
//                 <p><strong>Hora:</strong> {event.time}</p>
//                 <p><strong>Descrição:</strong> {event.description}</p>
//               </div>
//               <div className="flex gap-2">
//                 <button onClick={() => handleEdit(event.id)} className="btn btn-sm btn-secondary">
//                   Editar
//                 </button>
//                 <button onClick={() => handleDelete(event.id)} className="btn btn-sm btn-error">
//                   Excluir
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">Nenhum evento cadastrado.</p>
//       )}
//     </div>
//   );
// }
// Example of fetching from the API in a React component
// import { useEffect, useState } from "react";

// const EventsPage = () => {
//   const [events, setEvents] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const response = await fetch("/api/events");
//       const data = await response.json();
//       setEvents(data);
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <h1>Events</h1>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             {event.date} - {event.time}: {event.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventsPage;
// Add this at the top of your `page.tsx` file
"use client";  // This makes it a client component

import { useEffect, useState } from "react";

const EventsPage = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.date} - {event.time}: {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
