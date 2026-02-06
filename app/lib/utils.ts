/**
 * Combina múltiplas classes CSS de forma segura
 * @param classes - Classes CSS para combinar
 * @returns String com classes combinadas
 */
export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter((c) => typeof c === 'string').join(' ');
}

/**
 * Formata um número de telefone brasileiro
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}

/**
 * Formata um endereço para exibição
 */
export function formatAddress(
  street: string,
  neighborhood: string,
  city: string,
  state: string
): string {
  return `${street}, ${neighborhood} - ${city}, ${state}`;
}

/**
 * Gera um array de números para iteração (util em loops)
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Delay para uso com await
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Detecta se está em ambiente mobile pelo window
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Abre um link em nova aba
 */
export function openInNewTab(url: string): void {
  const win = window.open(url, '_blank');
  if (win) win.focus();
}

/**
 * Copia texto para clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
}

/**
 * Valida um email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Trunca um texto com ellipsis
 */
export function truncate(text: string, length: number): string {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}
