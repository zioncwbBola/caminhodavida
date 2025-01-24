// src/app/privacy/page.tsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Política de Privacidade</h1>
      <p>
        Esta política explica como lidamos com seus dados pessoais em conformidade com a LGPD. 
        Você pode exercer seus direitos de acesso, retificação e exclusão a qualquer momento.
      </p>

      <h2 className="text-xl font-semibold mt-4">Coleta de Dados</h2>
      <p>Coletamos informações pessoais como nome, e-mail e consentimento para melhorar nossos serviços.</p>

      <h2 className="text-xl font-semibold mt-4">Seus Direitos</h2>
      <p>
        Você tem o direito de solicitar acesso aos seus dados, corrigir informações e excluir registros.
        Para fazer isso, entre em contato conosco.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
