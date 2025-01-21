'use client';
import React, { useState } from 'react';

const TithesAndOfferings: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Solicitação de contato enviada:", contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="p-6 flex flex-col gap-12">
      {/* Container para Dízimos e Ofertas */}
      <div className="bg-base-100 shadow-md rounded-box p-6">
        <h2 className="text-2xl font-bold mb-4">Dízimos e Ofertas</h2>
        <p className="text-lg mb-4">
          "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós bênção sem medida." - Malaquias 3:10
        </p>
        <p className="mb-4">
          Dizimar e ofertar são atos de adoração e gratidão a Deus, reconhecendo que tudo vem Dele. É uma maneira de contribuir para a obra da igreja e para ajudar a expandir o Reino de Deus na Terra.
        </p>
        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Informações para Contribuição:</h3>
          <p><strong>Banco:</strong> Nome do Banco</p>
          <p><strong>Agência:</strong> 0000</p>
          <p><strong>Conta Corrente:</strong> 12345-6</p>
          <p><strong>Chave Pix:</strong> pix@igreja.com</p>
        </div>
      </div>

      {/* Container para Solicitação de Contato */}
      <div className="bg-base-100 shadow-md rounded-box p-6">
        <h2 className="text-2xl font-bold mb-4">Solicitação de Contato</h2>
        <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seu Nome</span>
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="input input-bordered"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seu E-mail</span>
            </label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="input input-bordered"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Mensagem</span>
            </label>
            <textarea
              placeholder="Digite sua mensagem"
              className="textarea textarea-bordered"
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default TithesAndOfferings;
