'use client';

import { useEffect, useRef } from 'react';
import styles from './Differentials.module.css';

const DIFFERENTIALS = [
  {
    id: 1,
    title: 'Rastreamento de Carga',
    description: 'Tecnologia avançada para acompanhar sua mercadoria em tempo real, com precisão e transparência total em cada etapa do transporte.',
    icon: '📊',
  },
  {
    id: 2,
    title: 'Comunicação Perfeita',
    description: 'Mantemos você sempre informado através dos melhores canais de comunicação, garantindo uma perfeita ponte entre você e sua carga.',
    icon: '💬',
  },
  {
    id: 3,
    title: 'Confiabilidade e Pontualidade',
    description: 'Entregamos sua mercadoria na hora certa, mantendo os mais altos padrões de segurança e profissionalismo em cada operação.',
    icon: '✅',
  },
];

export default function Differentials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>(
              `.${styles.differentialItem}`
            );
            items.forEach((item, index) => {
              item.style.animationDelay = `${index * 150}ms`;
              item.classList.add(styles.itemVisible);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.differentials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Diferenciais NEWHI</h2>
          <p className={styles.subtitle}>
            O que nos torna a melhor escolha para sua logística
          </p>
        </div>

        <div className={styles.itemsContainer}>
          {DIFFERENTIALS.map((item) => (
            <div key={item.id} className={styles.differentialItem}>
              <div className={styles.number}>{String(item.id).padStart(2, '0')}</div>
              <div className={styles.content}>
                <div className={styles.itemIcon}>{item.icon}</div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
