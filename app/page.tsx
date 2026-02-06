'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import AboutUs from './components/AboutUs';
import ContactModal from './components/ContactModal';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Differentials />
      <AboutUs />
      <ContactModal />
    </>
  );
}
