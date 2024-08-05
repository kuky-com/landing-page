import "./globals.css";
import { Providers } from './providers';
import { Metadata } from 'next'
import { Roboto, Inter } from "next/font/google";
import Script from 'next/script'
import GoogleAnalytics from '../components/GoogleAnalytics'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kuky - Coming Soon',
  description: 'Get ready for Kuky!',
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

      </head>
      <body className={roboto.className}>
        <Providers>
          {children}
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
