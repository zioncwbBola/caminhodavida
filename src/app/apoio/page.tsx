'use client';
import React, { useState } from 'react';

type PrayerRequest = {
  id: number;
  name: string;
  prayer: string;
  isPublic: boolean;
};

const PrayerRequestForm: React.FC = () => {
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    prayer: '',
    isPublic: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRequest: PrayerRequest = {
      id: Date.now(),
      name: formData.name,
      prayer: formData.prayer,
      isPublic: formData.isPublic
    };

    setPrayerRequests([...prayerRequests, newRequest]);
    setFormData({ name: '', prayer: '', isPublic: false });
  };

  return (
    <section className="p-6 flex flex-col gap-6">
      {/* Formulário */}
      <form onSubmit={handleSubmit} className="bg-base-100 shadow-md rounded-box p-6">
        <h2 className="text-xl font-bold mb-4">Pedido de Oração</h2>

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
            <span className="label-text">Seu Pedido</span>
          </label>
          <textarea
            placeholder="Digite seu pedido de oração"
            className="textarea textarea-bordered"
            value={formData.prayer}
            onChange={(e) => setFormData({ ...formData, prayer: e.target.value })}
          ></textarea>
        </div>

        <div className="form-control mb-4">
          <label className="label cursor-pointer">
            <span className="label-text">Tornar este pedido público?</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={formData.isPublic}
              onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-full">Enviar Pedido</button>
      </form>

      {/* Mural de Pedidos Públicos */}
      <div className="bg-base-200 shadow-md rounded-box p-6">
        <h2 className="text-xl font-bold mb-4">Mural de Oração</h2>

        {prayerRequests.filter(request => request.isPublic).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prayerRequests.filter(request => request.isPublic).map((request) => (
              <div key={request.id} className="card bg-base-100 shadow-sm p-4">
                <h3 className="font-bold text-lg mb-2">{request.name}</h3>
                <p>{request.prayer}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Nenhum pedido público disponível no momento.</p>
        )}
      </div>
    </section>
  );
};

export default PrayerRequestForm;
