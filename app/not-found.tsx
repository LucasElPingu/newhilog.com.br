import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Página Não Encontrada</h2>
        <p className={styles.description}>
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>

        <div className={styles.illustration}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            aria-label="Rosto triste"
          >
            <circle cx="100" cy="100" r="90" fill="#e0f2fe" stroke="#1e5a96" strokeWidth="2" />
            <path
              d="M70 80 L80 90 L90 80"
              stroke="#1e5a96"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M120 80 L130 90 L140 80"
              stroke="#1e5a96"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M75 120 Q100 140 125 120"
              stroke="#1e5a96"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={styles.buttons}>
          <Link href="/" className={styles.primaryButton}>
            Voltar para Home
          </Link>
          <Link href="/sobre" className={styles.secondaryButton}>
            Ir para Sobre
          </Link>
        </div>
      </div>
    </div>
  );
}
