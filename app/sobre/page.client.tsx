'use client';

import { useCallback } from 'react';
import ContactModal from '../components/ContactModal';
import styles from './page.module.css';

export default function SobrePageClient() {
  const handleContactClick = useCallback(() => {
    const modal = document.getElementById('contactModal');
    if (modal instanceof HTMLElement) {
      modal.classList.add('modalActive');
    }
  }, []);

  return (
    <>
      <div className={styles.sobreSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Sobre NEWHI Logística</h1>
            <p className={styles.intro}>
              Uma empresa dedicada a oferecer soluções logísticas inovadoras e confiáveis
            </p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Nossa História</h2>
                <p className={styles.paragraph}>
                  A NEWHI Logística nasceu da visão de profissionais experientes no mercado
                  de transporte e logística, que identificaram a necessidade de uma empresa
                  que combinasse experiência, tecnologia e compromisso com seus clientes.
                </p>
                <p className={styles.paragraph}>
                  Com anos de atuação no setor, desenvolvemos uma operação robusta e eficiente,
                  capaz de atender desde pequenos até grandes negócios com a mesma qualidade
                  e dedicação.
                </p>
                <p className={styles.paragraph}>
                  Nosso crescimento contínuo é reflexo da confiança que nossos clientes
                  depositam em nossa empresa e da excelência que entregamos em cada operação.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.textBlock}>
                <h2 className={styles.sectionTitle}>Nossos Valores</h2>
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <h3>Confiabilidade</h3>
                    <p>Somos confiáveis em cada compromisso que assumimos</p>
                  </div>
                  <div className={styles.valueItem}>
                    <h3>Segurança</h3>
                    <p>A proteção de sua carga é nossa prioridade máxima</p>
                  </div>
                  <div className={styles.valueItem}>
                    <h3>Transparência</h3>
                    <p>Comunicação clara e honesta em todas as operações</p>
                  </div>
                  <div className={styles.valueItem}>
                    <h3>Inovação</h3>
                    <p>Sempre buscando novas tecnologias para melhorar</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.fullWidthSection}>
              <h2 className={styles.sectionTitle}>Por Que Escolher NEWHI?</h2>
              <div className={styles.reasonsGrid}>
                <div className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>🚚</div>
                  <h3>Frota Moderna</h3>
                  <p>Equipamentos atualizados e bem mantidos para sua segurança</p>
                </div>
                <div className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>🎯</div>
                  <h3>Equipe Profissional</h3>
                  <p>Motoristas experientes e treinados continuamente</p>
                </div>
                <div className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>📍</div>
                  <h3>Rastreamento 24/7</h3>
                  <p>Acompanhamento em tempo real de sua mercadoria</p>
                </div>
                <div className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>💬</div>
                  <h3>Suporte Ativo</h3>
                  <p>Atendimento rápido e resolução eficiente de questões</p>
                </div>
              </div>
            </section>

            <section className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Pronto para Trabalhar Conosco?</h2>
              <p className={styles.ctaParagraph}>
                Entre em contato e descubra como podemos otimizar sua cadeia logística
              </p>
              <button
                type="button"
                onClick={handleContactClick}
                className={styles.ctaButton}
              >
                Solicitar Orçamento
              </button>
            </section>
          </div>
        </div>
      </div>

      <ContactModal />
    </>
  );
}
