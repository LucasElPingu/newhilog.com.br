export const generateMetadata = (
  title: string,
  description: string,
  url: string,
  image?: string
) => {
  return {
    title,
    description,
    keywords: 'logística, transporte, rastreamento, logística nacional',
    authors: [{ name: 'NEWHI Logística' }],
    creator: 'NEWHI Logística',
    publisher: 'NEWHI Logística',
    metadataBase: new URL('https://newhilog.com.br'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url,
      title,
      description,
      siteName: 'NEWHI Logística',
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
};

export const generateJsonLd = (
  type: string,
  data: Record<string, any>
) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  return {
    __html: JSON.stringify({ ...baseSchema, ...data }),
  };
};

export const generateLocalBusinessSchema = () => {
  return {
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
  };
};
