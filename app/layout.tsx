import type { Metadata } from 'next';
import './globals.css';
import RootLayoutClient from './layout.client';

export const metadata: Metadata = {
  title: 'NEWHI Logística | Soluções em Transporte e Rastreamento',
  description: 'NEWHI Logística oferece serviços de transporte, rastreamento de carga e logística nacional com confiabilidade, pontualidade e segurança. Atendemos em todo o Brasil.',
  keywords: 'logística, transporte, rastreamento de carga, logística nacional, transporte de mercadorias',
  authors: [{ name: 'NEWHI Logística' }],
  creator: 'NEWHI Logística',
  publisher: 'NEWHI Logística',
  metadataBase: new URL('https://newhilog.com.br'),
  alternates: {
    canonical: 'https://newhilog.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://newhilog.com.br',
    title: 'NEWHI Logística | Soluções em Transporte e Rastreamento',
    description: 'NEWHI Logística oferece serviços de transporte, rastreamento de carga e logística nacional com confiabilidade, pontualidade e segurança.',
    siteName: 'NEWHI Logística',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo NEWHI Logística',
        type: 'image/png',
      },
      {
        url: '/images/icon-no-bg.png',
        width: 192,
        height: 192,
        alt: 'Ícone NEWHI Logística',
        type: 'image/png',
      },
    ],
  },
  icons: {
    icon: '/images/icon-no-bg.png',
    apple: '/images/icon-no-bg.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/images/icon-no-bg.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/images/icon-no-bg.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/images/icon-no-bg.png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f2947" />
        <meta name="description" content="NEWHI Logística oferece serviços de transporte, rastreamento de carga e logística nacional com confiabilidade, pontualidade e segurança. Atendemos em todo o Brasil." />
        <meta name="keywords" content="logística, transporte, rastreamento de carga, logística nacional, transporte de mercadorias, Maceió" />
        <meta name="og:image" content="/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta name="twitter:title" content="NEWHI Logística | Soluções em Transporte e Rastreamento" />
        <meta name="twitter:description" content="Transporte de carga, rastreamento e logística nacional com segurança e confiabilidade." />
        <link rel="icon" href="/images/icon-no-bg.png" />
        <link rel="apple-touch-icon" href="/images/icon-no-bg.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'NEWHI Logística',
              description: 'Empresa de transporte e logística nacional com rastreamento de carga',
              url: 'https://newhilog.com.br',
              telephone: '+558191867142',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Comendador Gustavo Paiva, 2270',
                addressLocality: 'Maceió',
                addressRegion: 'AL',
                postalCode: '57038-000',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '-9.5764',
                longitude: '-35.7751',
              },
              sameAs: ['https://wa.me/558191867142'],
            }),
          }}
        />
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
