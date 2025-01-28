'use client';
import React from "react";
import { useState } from "react";
import { Offcanvas, Button } from "@/components/ui/PlayList";

const MidiaPage: React.FC = () => {
  const [isLive, setIsLive] = useState(true); // Simula se está ao vivo
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [playlist, setPlaylist] = useState([
    { id: 1, title: "Video 1", isPlaying: false },
    { id: 2, title: "Video 2", isPlaying: false },
    { id: 3, title: "Video 3", isPlaying: false },
  ]);

  const handlePlay = (id: number) => {
    setPlaylist((prev) =>
      prev.map((video) => ({ ...video, isPlaying: video.id === id }))
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-base-100">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-primary">Cultos AO Vivo</h1>

      {/* Live Stream or Offline Message */}
      <div className="w-full max-w-5xl aspect-video bg-base-200 rounded-xl shadow-md mt-6 flex items-center justify-center">
        {isLive ? (
          <video
            src="/path-to-live-stream"
            className="w-full h-full rounded-xl"
            controls
            autoPlay
          />
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold text-error">Estamos Offline no momento.</p>
            <p className="text-sm text-neutral">Acompanhe os vídeos na playlist ao lado.</p>
          </div>
        )}
      </div>

      {/* Playlist and Offcanvas */}
      <div className="w-full max-w-5xl mt-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
            className="btn btn-primary"
          >
            {isOffcanvasOpen ? "Fechar Playlist" : "Abrir Playlist"}
          </Button>
          <p className="text-neutral">
            {playlist.filter((video) => video.isPlaying).length > 0
              ? "Um vídeo está sendo reproduzido."
              : `${playlist.length} vídeos na playlist.`}
          </p>
        </div>

        <Offcanvas
          isOpen={isOffcanvasOpen}
          onClose={() => setIsOffcanvasOpen(false)}
          className="bg-base-200"
        >
          <h2 className="text-2xl font-bold text-center">Playlist</h2>
          <ul className="mt-4 space-y-2">
            {playlist.map((video) => (
              <li
                key={video.id}
                className={`p-4 border rounded-lg cursor-pointer flex items-center justify-between shadow-sm ${
                  video.isPlaying ? "bg-primary text-primary-content" : "bg-base-100"
                }`}
                onClick={() => handlePlay(video.id)}
              >
                <span>{video.isPlaying ? <span>▶️</span> : video.id}</span>
                <span className="ml-2">{video.title}</span>
              </li>
            ))}
          </ul>
        </Offcanvas>
      </div>
    </main>
  );
};

export default MidiaPage;
