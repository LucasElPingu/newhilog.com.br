'use client';

import { useCallback, useEffect } from 'react';
import styles from './ContactModal.module.css';

export default function ContactModal() {
  const closeModal = useCallback(() => {
    const modal = document.getElementById('contactModal');
    if (modal instanceof HTMLElement) {
      modal.classList.remove('modalActive');
    }
  }, []);

  useEffect(() => {
    const modal = document.getElementById('contactModal') as HTMLElement | null;
    const closeButton = document.getElementById('closeModal') as HTMLElement | null;

    if (!modal || !closeButton) return;

    const handleCloseClick = () => closeModal();
    const handleModalClick = (e: MouseEvent) => {
      if (e.target === modal) closeModal();
    };

    closeButton.addEventListener('click', handleCloseClick);
    modal.addEventListener('click', handleModalClick);

    return () => {
      closeButton.removeEventListener('click', handleCloseClick);
      modal.removeEventListener('click', handleModalClick);
    };
  }, [closeModal]);

  return (
    <div id="contactModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <button id="closeModal" className={styles.closeButton} aria-label="Fechar">
          ×
        </button>

        <h2 className={styles.title}>Contato</h2>

        <div className={styles.modalGrid}>
          <div className={styles.contactOptions}>
            <a
              href="tel:+558191867142"
              className={styles.contactItem}
            >
              <div className={styles.iconContainer}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3>Telefone</h3>
                <p>(81) 9 9186-7142</p>
              </div>
            </a>

            <a
              href="https://wa.me/558191867142"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={styles.iconContainer}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  <path d="M12 21a9 9 0 1 0-9-9c0 1.48.36 2.87 1 4.1L3 21l4.9-.9c1.23.64 2.62 1 4.1 1z" />
                </svg>
              </div>
              <div>
                <h3>WhatsApp</h3>
                <p>(81) 9 9186-7142</p>
              </div>
            </a>

            <div className={styles.contactItem}>
              <div className={styles.iconContainer}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3>Endereço</h3>
                <p>
                  Av. Comendador Gustavo Paiva, 2270<br />
                  Mangabeiras, Maceió - AL
                </p>
              </div>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.4357025816!2d-35.7061763!3d-9.643306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014603681432f7%3A0x633454321312345!2sAv.%20Comendador%20Gustavo%20Paiva%2C%202270%20-%20Mangabeiras%2C%20Macei%C3%B3%20-%20AL%2C%2057031-530!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px', minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização NEWHI Logística"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
