'use client';

import { useRef, useEffect } from 'react';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 1,
    title: 'Rastreamento de Carga',
    description: 'Acompanhe sua mercadoria em tempo real com nossa plataforma avançada de rastreamento. Informações precisas e atualizadas em cada etapa do transporte.',
    icon: '📍',
  },
  {
    id: 2,
    title: 'Logística Nacional',
    description: 'Cobertura em todo o Brasil com múltiplos modais de transporte. Flexibilidade e agilidade para atender qualquer tipo de carga com segurança garantida.',
    icon: '🚚',
  },
  {
    id: 3,
    title: 'Comunicação Perfeita',
    description: 'Mantemos você informado constantemente. Canais diretos de comunicação para garantir total transparência e confiança na sua operação logística.',
    icon: '📞',
  },
  {
    id: 4,
    title: 'Pontualidade Garantida',
    description: 'Cumprimento de prazos é nossa prioridade. Entregas na hora certa e em perfeito estado, com feedback contínuo sobre o status de sua carga.',
    icon: '⏱️',
  },
  {
    id: 5,
    title: 'Segurança Total',
    description: 'Sua mercadoria está segura conosco. Equipamentos modernos, equipe treinada e seguros abrangentes em todas as operações.',
    icon: '🔒',
  },
  {
    id: 6,
    title: 'Soluções Customizadas',
    description: 'Cada negócio é único. Oferecemos soluções personalizadas adaptadas às suas necessidades específicas de transporte e logística.',
    icon: '⚙️',
  },
] as const;

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>(
              `.${styles.serviceCard}`
            );
            cards.forEach((card, index) => {
              card.style.animationDelay = `${index * 100}ms`;
              card.classList.add(styles.cardVisible);
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
    <section ref={sectionRef} className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossos Serviços</h2>
          <p className={styles.subtitle}>
            Soluções completas em logística para sua empresa
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
