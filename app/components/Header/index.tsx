'use client';

import { useCallback, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 10) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleContactClick = useCallback(() => {
    const modal = document.getElementById('contactModal');
    if (modal instanceof HTMLElement) {
      modal.classList.add('modalActive');
      setIsMenuOpen(false);
    }
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.headerHidden : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="NEWHI Logística"
            width={120}
            height={60}
            priority
          />
        </Link>

        <button
          className={styles.mobileMenuButton}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/sobre" className={styles.navLink} onClick={closeMenu}>
            Sobre
          </Link>
          <button
            type="button"
            className={styles.navLink}
            onClick={handleContactClick}
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
}
