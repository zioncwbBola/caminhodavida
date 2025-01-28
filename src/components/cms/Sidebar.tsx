'use client';
import { useState } from 'react';
import { FaHome, FaChurch, FaUserFriends, FaCalendarAlt, FaEnvelope } from 'react-icons/fa'; // Para ícones


const SidebarCms = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botão para abrir a sidebar */}
      <button
        className="lg:hidden btn btn-square btn-ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaHome />
      </button>

      {/* Sidebar offcanvas */}
      <div className={`fixed inset-0 z-10 bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
      <div className={`fixed inset-0 z-20 w-64 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-4">
          <button className="btn btn-ghost text-xl" onClick={() => setIsOpen(false)}>X</button>
          <ul className="space-y-4">
            <li><FaChurch className="inline mr-2" /> Administração Igreja</li>
            <li><FaUserFriends className="inline mr-2" /> Departamentos Ministeriais</li>
            <li><FaCalendarAlt className="inline mr-2" /> Agendas e Eventos</li>
            <li><FaEnvelope className="inline mr-2" /> Pedidos e Contato</li>
            <li><FaEnvelope className="inline mr-2" /> Conteúdos</li>
            <li><FaEnvelope className="inline mr-2" /> Gestão de Mídia</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarCms;
