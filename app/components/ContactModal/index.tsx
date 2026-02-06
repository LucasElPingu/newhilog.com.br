'use client';

import { useCallback, useEffect } from 'react';
import styles from './ContactModal.module.css';

export default function ContactModal() {
  const closeModal = useCallback(() => {
    const modal = document.getElementById('contactModal');
    if (modal instanceof HTMLElement) {
      modal.classList.remove(styles.modalActive);
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
        <button id="closeModal" className={styles.closeButton}>
          ×
        </button>

        <h2 className={styles.title}>Fale Conosco</h2>

        <div className={styles.contactOptions}>
          <a
            href="tel:+558191867142"
            className={styles.contactItem}
          >
            <div className={styles.iconContainer}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.54 5c.06.89.291 1.746.666 2.539a1 1 0 01-.288 1.024L5.5 10.5h.5c1.5 0 3-1 4.5-2.5 1.5-1.5 2.5-3 2.5-4.5v-.5l-1.962-1.432a1 1 0 01-1.024-.288C8.246 2.25 7.39 1.981 6.5 1.921V2a4 4 0 004 4h.5l-1.432-1.962a1 1 0 01-.288-1.024C9.754 2.25 10.61 1.981 11.5 1.921V2c0 .89-.291 1.746-.666 2.539a1 1 0 01.288 1.024l1.432 1.962v-.5c0-1.5-1-3-2.5-4.5C7.554 0 6.054 1 4.554 1h-.5l1.432 1.962a1 1 0 01.288 1.024z"/>
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.176l-.348.202-.36-.054-1.468-.342.359 1.45.172.556-.128.383a9.9 9.9 0 001.476 3.083c.602.643 1.536 1.338 2.805 1.979l.56.306.679-.067c.949-.073 1.771-.328 2.405-.756l.692-.543.847.135c1.396.25 2.621 1.027 3.332 1.39l.687.41-.309.951c-.038.129-.115.289-.237.463-.206.339-.52.686-.993.957-.56.331-1.42.487-2.324.487-.536 0-1.02-.089-1.462-.271-2.584-1.127-4.941-3.846-5.444-4.867-.116-.237-.435-.641-1.08-1.637-.3-.457-.573-.961-.804-1.501-.232-.54-.438-1.122-.608-1.704a9.889 9.889 0 01-.165-1.679c0-.63.028-1.257.083-1.876.055-.62.137-1.227.245-1.816.108-.589.242-1.158.401-1.704.16-.545.344-1.062.553-1.548.208-.487.44-.942.695-1.361.256-.42.535-.804.835-1.15.3-.346.62-.659.96-.938 1.684-1.42 3.83-2.136 6.146-2.136 1.163 0 2.236.188 3.22.56 2.254.868 3.768 2.92 3.768 5.316 0 2.039-.76 3.86-2.138 5.182-.693.67-1.605 1.15-2.636 1.44-.556.158-1.155.24-1.77.24z"/>
              </svg>
            </div>
            <div>
              <h3>WhatsApp</h3>
              <p>(81) 9 9186-7142</p>
            </div>
          </a>

          <address className={styles.contactItem}>
            <div className={styles.iconContainer}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <div>
              <h3>Endereço</h3>
              <p style={{ fontStyle: 'normal' }}>
                Av. Comendador Gustavo Paiva, 2270<br />
                Mangabeiras, Maceió - AL
              </p>
            </div>
          </address>
        </div>
      </div>
    </div>
  );
}
