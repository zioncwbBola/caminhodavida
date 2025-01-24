import Script from 'next/script';

const GoogleAds = () => {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','AW-XXXXXXXXX'); // Substitua pelo seu ID do Google Ads
        `}
      </Script>
    </>
  );
};

export default GoogleAds;
