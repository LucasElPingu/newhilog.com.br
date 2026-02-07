'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './HealthLogistics.module.css';

export default function HealthLogistics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(`.${styles.card}`);
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Card 1: Background Image style */}
        <div className={styles.card}>
          <div className={styles.bgCard}>
            <Image
              src="/images/car.jpeg"
              alt="Gestão Logística"
              fill
              className={styles.cardImage}
            />
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Gestão Logística Integrada</h3>
              <p className={styles.cardSubtitle}>
                Planejamento, execução e monitoramento de ponta a ponta das operações críticas de saúde.
              </p>
              <p className={styles.cardText}>
                Nossas soluções integram transporte, armazenagem e rastreabilidade em tempo real, 
                garantindo eficiência operacional, previsibilidade e redução de custos em toda a 
                cadeia logística da saúde.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Split style (Text Left, Small Image Right) */}
        <div className={styles.card}>
          <div className={styles.splitCard}>
            <div className={styles.splitContent}>
              <h3 className={styles.cardTitle}>Cobertura Nacional</h3>
              <p className={styles.highlightText}>
                Cobertura nacional no transporte de amostra biológicas através de vias rodoviárias e aéreas.
              </p>
              <p className={styles.cardText}>
                Nossa rede assegura segurança, agilidade e padronização operacional em todo o território nacional com <a className={styles.bold}>monitoramento 24 horas durante todo os 7 dias da semana</a>.
              </p>
            </div>
            <div className={styles.splitImageContainer}>
              <Image
                src="/images/airplane.jpeg"
                alt="Transporte Aéreo"
                width={400}
                height={250}
                className={styles.smallImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
