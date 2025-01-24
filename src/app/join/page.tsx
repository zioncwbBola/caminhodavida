"use client";

import { useState, useEffect } from "react";

interface MembershipRequest {
  id: number;
  name: string;
  contact: string;
  intention: string;
  isForDiscipleship: boolean;
  created_at: string;
}

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    intention: "Discipulado", // Valor inicial do select
    isForDiscipleship: false,
  });
  const [requests, setRequests] = useState<MembershipRequest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Carregar os pedidos existentes ao carregar a página
  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/membership");
        if (res.ok) {
          const data = await res.json();
          setRequests(data);
        } else {
          setError("Erro ao carregar os pedidos.");
        }
      } catch (err) {
        setError("Erro ao carregar os pedidos.");
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // Atualizar campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Enviar formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.intention) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const newRequest = await res.json();
        setRequests((prev) => [newRequest, ...prev]);
        setFormData({ name: "", contact: "", intention: "Discipulado", isForDiscipleship: false });
        setError(null);
      } else {
        setError("Erro ao enviar o pedido.");
      }
    } catch (err) {
      setError("Erro ao enviar o pedido.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Pedido de Intenção de Membro</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">Contato</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">Intenção</label>
          <select
            name="intention"
            value={formData.intention}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="Discipulado">Discipulado</option>
            <option value="Discipulado Online">Discipulado Online</option>
            <option value="Discipulado Familiar">Discipulado Familiar</option>
            <option value="Integração Online">Integração Online</option>
            <option value="Integração Familiar">Integração Familiar</option>
            <option value="Integração">Integração</option>
            <option value="Acompanhamento Espiritual">Acompanhamento Espiritual</option>
          </select>
        </div>
        <div>
          <label className="label cursor-pointer">
            <span>É para discipulado?</span>
            <input
              type="checkbox"
              name="isForDiscipleship"
              checked={formData.isForDiscipleship}
              onChange={handleChange}
              className="checkbox checkbox-primary ml-2"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-full">Enviar</button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">Pedidos Enviados</h2>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request.id} className="border-b py-2">
              <p><strong>Nome:</strong> {request.name}</p>
              <p><strong>Contato:</strong> {request.contact}</p>
              <p><strong>Intenção:</strong> {request.intention}</p>
              <p><strong>Discipulado:</strong> {request.isForDiscipleship ? "Sim" : "Não"}</p>
              <p><strong>Enviado em:</strong> {new Date(request.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
