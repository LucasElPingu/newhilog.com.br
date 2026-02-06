'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const handleContactClick = useCallback(() => {
    const modal = document.getElementById('contactModal');
    if (modal instanceof HTMLElement) {
      modal.classList.add('modalActive');
    }
  }, []);

  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-truck.jpg"
        alt="Caminhão em rodovia - NEWHI Logística"
        fill
        priority
        quality={90}
        sizes="100vw"
        className={styles.backgroundImage}
      />
      <div className={styles.backgroundOverlay}></div>

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
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>
    </section>
  );
}
