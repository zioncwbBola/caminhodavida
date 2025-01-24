import Script from 'next/script';

const AdSense = () => {
  return (
    <>
      {/* Google AdSense */}
      <Script
        id="google-adsense"
        strategy="afterInteractive"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}
        onError={(e) => {
          console.error('AdSense script failed to load:', e);
        }}
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXX" // Substitua pelo seu AdSense Publisher ID
        data-ad-slot="XXXXXXXXXX" // Substitua pelo ID do bloco de anúncios
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script id="adsbygoogle-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </>
  );
};

export default AdSense;
