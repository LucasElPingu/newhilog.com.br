'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/test-tubes.jpg"
        alt="Logística para Saúde - NEWHI Logística"
        fill
        priority
        quality={90}
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>NEWHILOG</span> - Logística inteligente, <br />
            resultados que se movem .
          </h1>

          <h2 className={styles.subtitle}>
            Especialista em logística para saúde e medicina diagnóstica
          </h2>

          <p className={styles.description}>
            Logística especializada no transporte de amostras biológicas, com foco em cuidado, 
            precisão operacional e responsabilidade do início ao destino.
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>
    </section>
  );
}
