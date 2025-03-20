import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    {/* Google Analytics (GA4) */}
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-SZ7WJEFEFN"
    />
    <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SZ7WJEFEFN');
            `,
          }}
        />
  </>
);

export default GoogleAnalytics;
        