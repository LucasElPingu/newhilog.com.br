'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import styles from './Hero.module.css';

const carouselImages = [
  {
    src: '/images/car.jpeg',
    alt: 'Carro de entrega - NEWHI Logística',
  },
  {
    src: '/images/moto.jpeg',
    alt: 'Moto de entrega - NEWHI Logística',
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleContactClick = useCallback(() => {
    const modal = document.getElementById('contactModal');
    if (modal instanceof HTMLElement) {
      modal.classList.add('modalActive');
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleEmphasis}>Sua Carga,</span><br />
            <span className={styles.highlight}>Nossa Responsabilidade</span>
          </h1>

          <p className={styles.subtitle}>
            Soluções completas em logística e transporte com rastreamento em tempo real,
            pontualidade garantida e segurança de ponta a ponta.
          </p>

          <div className={styles.buttons}>
            <button
              type="button"
              onClick={handleContactClick}
              className={styles.primaryButton}
            >
              Fale com a Gente
            </button>
            <a
              href="https://wa.me/558191867142"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.carouselContainer}>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${index === currentImage ? styles.active : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={90}
                className={styles.heroImage}
              />
            </div>
          ))}
          <div className={styles.carouselOverlay}></div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>
    </section>
  );
}
