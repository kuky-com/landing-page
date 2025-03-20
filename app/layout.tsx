import "./globals.css";
import { Providers } from './providers';
import { Metadata, Viewport } from 'next'
import { Roboto, Inter } from "next/font/google";
import Script from 'next/script'
import GoogleAnalytics from '../components/GoogleAnalytics'
import GoogleTagManager from '../components/GoogleTagManager'
import ToastProvider from "@/components/Common/ToastProvider";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kuky - connection through shared experiences',
  description: 'Get ready for Kuky!',
  icons: {
    icon: [
      { rel: 'icon', url: 'favicon.ico' }
    ],
    apple: [
      { rel: 'apple-touch-icon', sizes: '57x57', url: 'apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', url: 'apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', url: 'apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', url: 'apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', url: 'apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', url: 'apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', url: 'apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', url: 'apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: 'apple-icon-180x180.png' }
    ]
  },
  // icons2: [
  //   { rel: 'icon', url: 'favicon.ico' },
  //   { rel: 'icon', sizes: '192x192', url: 'android-icon-192x192.png"' },
  //   { rel: 'icon', sizes: '32x32', url: 'favicon-32x32.png' },
  //   { rel: 'icon', sizes: '96x96', url: 'favicon-96x96.png' },
  //   { rel: 'icon', sizes: '16x16', url: 'favicon-16x16.png' },
  //   { rel: 'apple-touch-icon', sizes: '57x57', url: 'apple-icon-57x57.png' },
  //   { rel: 'apple-touch-icon', sizes: '60x60', url: 'apple-icon-60x60.png' },
  //   { rel: 'apple-touch-icon', sizes: '72x72', url: 'apple-icon-72x72.png' },
  //   { rel: 'apple-touch-icon', sizes: '76x76', url: 'apple-icon-76x76.png' },
  //   { rel: 'apple-touch-icon', sizes: '114x114', url: 'apple-icon-114x114.png' },
  //   { rel: 'apple-touch-icon', sizes: '120x120', url: 'apple-icon-120x120.png' },
  //   { rel: 'apple-touch-icon', sizes: '144x144', url: 'apple-icon-144x144.png' },
  //   { rel: 'apple-touch-icon', sizes: '152x152', url: 'apple-icon-152x152.png' },
  //   { rel: 'apple-touch-icon', sizes: '180x180', url: 'apple-icon-180x180.png' },
  //   { rel: 'msapplication-TileImage', url: 'ms-icon-144x144.png' }
  // ],
  manifest: 'manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': 'ms-icon-144x144.png',
  }
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <GoogleTagManager  />
      </head>
      <body className={roboto.className}>
      
        <Providers>
          {children}
          <ToastProvider/>
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
            referrerPolicy="origin"
          />
        </Providers>
      </body>
    </html>
  );
}
