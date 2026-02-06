import { Metadata } from 'next';
import SobrePageClient from './page.client';

export const metadata: Metadata = {
  title: 'Sobre NEWHI Logística | Nossa História e Valores',
  description: 'Conheça a NEWHI Logística, nossa missão, visão e os valores que nos guiam no mercado de transporte e logística.',
  keywords: 'sobre NEWHI, história logística, missão, valores, equipe',
  openGraph: {
    title: 'Sobre NEWHI Logística',
    description: 'Conheça a NEWHI Logística, nossa missão, visão e os valores que nos guiam no mercado de transporte e logística.',
    url: 'https://newhilog.com.br/sobre',
    type: 'website',
  },
};

export default function SobrePage() {
  return <SobrePageClient />;
}
