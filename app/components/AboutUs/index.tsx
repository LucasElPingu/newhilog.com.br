'use client';

import { useCallback, useEffect, useRef } from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleContactClick = useCallback(() => {
    const modal = document.getElementById('contactModal');
    if (modal instanceof HTMLElement) {
      modal.classList.add('modalActive');
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.contentSection}>
          <div className={styles.headerArea}>
            <h2 className={styles.title}>Quem Somos</h2>
            <p className={styles.text} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              Desde nossa fundação, trabalhamos com dedicação para superar as expectativas
              de nossos clientes, oferecendo soluções logísticas personalizadas e inovadoras.
            </p>
          </div>

          <div className={styles.missionVisionSection}>
            <div className={styles.contentBlock}>
              <h3 className={styles.subtitle}>Nossa Missão</h3>
              <p className={styles.text}>
                Ser a empresa logística mais confiável e inovadora, oferecendo soluções 
                em transporte que transformem a cadeia produtiva das empresas brasileiras, 
                garantindo eficiência, segurança e pontualidade em cada operação.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h3 className={styles.subtitle}>Nossa Visão</h3>
              <p className={styles.text}>
                Ser reconhecida como referência nacional em logística e transporte, 
                expandindo nossa atuação e consolidando relações duradouras com clientes 
                através de inovação contínua e excelência operacional.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>🎯 Confiabilidade</h4>
                <p className={styles.valueText}>
                  Você pode contar conosco em cada etapa da sua operação logística.
                </p>
              </div>

              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>⚡ Agilidade</h4>
                <p className={styles.valueText}>
                  Respostas rápidas e soluções eficientes para seus desafios.
                </p>
              </div>

              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>🔒 Segurança</h4>
                <p className={styles.valueText}>
                  Proteção integral da sua carga do início até o destino final.
                </p>
              </div>

              <div className={styles.valueItem}>
                <h4 className={styles.valueTitle}>🌟 Excelência</h4>
                <p className={styles.valueText}>
                  Padrões altos de qualidade em todas as nossas operações.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              Pronto para elevar o nível da sua logística? Entre em contato com nossa equipe
              especializada e descubra como podemos ajudar seu negócio a crescer.
            </p>
            <button
              type="button"
              onClick={handleContactClick}
              className={styles.ctaButton}
            >
              Entre em Contato Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
