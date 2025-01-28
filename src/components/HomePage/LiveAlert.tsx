import React, { useState } from "react";

type LiveAlertProps = {
  isLive: boolean;
  streamUrl: string | null; // URL do vídeo (link do YouTube, por exemplo)
};

const LiveAlert: React.FC<LiveAlertProps> = ({ isLive, streamUrl }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // Função para exibir o vídeo completo ao clicar na miniatura
  const handleVideoClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-50 w-80 bg-base-200 p-4 rounded-lg shadow-lg"
      style={{
        display: isLive ? "block" : "none", // Exibe apenas quando estiver ao vivo
      }}
    >
      <details tabIndex={0} className="collapse">
        {/* Alerta de transmissão */}
        {isLive && (
          <>
            <summary className="collapse-title text-xl font-medium">
              <span className="text-lg font-bold">🔴 Estamos AO VIVO agora!</span>
            </summary>
            {/* Exibe miniatura do vídeo */}
            {!isVideoVisible && streamUrl && (
              <div className="collapse-content mt-2 text-center">
                {/* Miniatura do vídeo */}
                <iframe
                  width="100%" // Ajuste para a miniatura
                  height="180px" // Tamanho da miniatura
                  src={`${streamUrl}?autoplay=0`} // URL do YouTube
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="cursor-pointer"
                  onClick={handleVideoClick} // Ao clicar, exibe o vídeo completo
                ></iframe>
              </div>
            )}
            {/* Exibe o vídeo completo quando clicado */}
            {isVideoVisible && streamUrl && (
              <div className="collapse-content mt-2">
                {/* Vídeo completo */}
                <iframe
                  width="100%"
                  height="315px" // Tamanho maior para o vídeo completo
                  src={`${streamUrl}?autoplay=1`} // URL do YouTube
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </>
        )}
      </details>
    </div>
  );
};

export default LiveAlert;
