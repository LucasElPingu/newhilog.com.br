'use client';

import Hero from './components/Hero';
import HealthLogistics from './components/HealthLogistics';
import Services from './components/Services';
import Process from './components/Process';
import Differentials from './components/Differentials';
import AboutUs from './components/AboutUs';
import ContactModal from './components/ContactModal';

export default function Home() {
  return (
    <>
      <Hero />
      <HealthLogistics />
      <Services />
      <Process />
      <Differentials />
      <AboutUs />
      <ContactModal />
    </>
  );
}
