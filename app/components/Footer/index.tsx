import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>NEWHI Logística</h3>
            <p className={styles.description}>
              Soluções em transporte e logística com confiabilidade, pontualidade e segurança.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contato</h3>
            <div className={styles.contactInfo}>
              <p>
                <strong>Telefone:</strong>{' '}
                <a href="tel:+558191867142">(81) 9 9186-7142</a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/558191867142" target="_blank" rel="noopener noreferrer">
                  (81) 9 9186-7142
                </a>
              </p>
              <p>
                <strong>Endereço:</strong> Av. Comendador Gustavo Paiva, 2270 - Mangabeiras, Maceió - AL
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Links Rápidos</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <a href="https://wa.me/558191867142" target="_blank" rel="noopener noreferrer">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} NEWHI Logística. Todos os direitos reservados.
          </p>
          <p className={styles.credit}>
            Desenvolvido com dedicação para o seu sucesso
          </p>
        </div>
      </div>
    </footer>
  );
}
