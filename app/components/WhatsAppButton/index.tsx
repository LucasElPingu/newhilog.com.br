'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './WhatsAppButton.module.css';

const WHATSAPP_URL = 'https://wa.me/558191867142' as const;

export default function WhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Enviar mensagem via WhatsApp"
      title="Fale conosco no WhatsApp - Abrir em nova aba"
    >
      <Image
        src="/images/icon.png"
        alt="WhatsApp"
        width={50}
        height={50}
        className={styles.icon}
      />
    </Link>
  );
}
