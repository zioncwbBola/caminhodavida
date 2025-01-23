export default function EventsPage() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="container mx-auto px-4 py-12 bg-base-200 text-center">
        <h2 className="font-bold text-4xl">Programação Ao-Vivo</h2>
        <div className="divider"></div>

        {/* Adicionando o iframe do YouTube */}
        <div className="mt-8 relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/34EUarVZx-U?si=p3DTbxbgUmUEJedM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  )
}