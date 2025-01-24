'use client';

import React, { useState, useEffect } from 'react';

const ConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('user-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('user-consent', 'accepted');
    setShowBanner(false);
  };



  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-between">
      <p>
        Usamos cookies para melhorar sua experiência. Leia nossa{' '}
        <a href="/privacy" className="underline">
          Política de Privacidade
        </a>
        .
      </p>
      <button onClick={handleAccept} className="bg-blue-500 px-4 py-2 rounded">
        Aceitar
      </button>
    </div>
  );
};

export default ConsentBanner;