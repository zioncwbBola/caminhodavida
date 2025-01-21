'use client';
import React, { useState } from 'react';

type MembershipIntent = {
  id: number;
  name: string;
  contact: string;
  intention: string;
  isForDiscipleship: boolean;
};

const MembershipIntentForm: React.FC = () => {
  const [membershipIntents, setMembershipIntents] = useState<MembershipIntent[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    intention: '',
    isForDiscipleship: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newIntent: MembershipIntent = {
      id: Date.now(),
      name: formData.name,
      contact: formData.contact,
      intention: formData.intention,
      isForDiscipleship: formData.isForDiscipleship,
    };

    setMembershipIntents([...membershipIntents, newIntent]);
    setFormData({ name: '', contact: '', intention: '', isForDiscipleship: false });
  };

  return (
    <section className="p-6 flex flex-col gap-6">
      {/* Formulário */}
      <form onSubmit={handleSubmit} className="bg-base-100 shadow-md rounded-box p-6">
        <h2 className="text-xl font-bold mb-4">Pedido de Intenção para Ser Membro</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Seu Nome</span>
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="input input-bordered"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Contato</span>
          </label>
          <input
            type="text"
            placeholder="Digite seu telefone ou e-mail"
            className="input input-bordered"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Intenção</span>
          </label>
          <textarea
            placeholder="Descreva sua intenção (ex.: discipulado, integração, etc.)"
            className="textarea textarea-bordered"
            value={formData.intention}
            onChange={(e) => setFormData({ ...formData, intention: e.target.value })}
          ></textarea>
        </div>

        <div className="form-control mb-4">
          <label className="label cursor-pointer">
            <span className="label-text">Deseja participar do discipulado?</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={formData.isForDiscipleship}
              onChange={(e) => setFormData({ ...formData, isForDiscipleship: e.target.checked })}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-full">Enviar Pedido</button>
      </form>

      {/* Mural de Intenções */}
      <div className="bg-base-200 shadow-md rounded-box p-6">
        <h2 className="text-xl font-bold mb-4">Pedidos de Intenção</h2>

        {membershipIntents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {membershipIntents.map((intent) => (
              <div key={intent.id} className="card bg-base-100 shadow-sm p-4">
                <h3 className="font-bold text-lg mb-2">{intent.name}</h3>
                <p><strong>Contato:</strong> {intent.contact}</p>
                <p><strong>Intenção:</strong> {intent.intention}</p>
                {intent.isForDiscipleship && <p className="text-primary font-semibold">Participará do discipulado</p>}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Nenhum pedido de intenção enviado no momento.</p>
        )}
      </div>
    </section>
  );
};

export default MembershipIntentForm;
