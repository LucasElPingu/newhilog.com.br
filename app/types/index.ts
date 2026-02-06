/**
 * Service interface - Representa um serviço oferecido pela empresa
 */
export interface Service {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

/**
 * Differential interface - Representa um diferencial da empresa
 */
export interface Differential {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

/**
 * ContactInfo interface - Informações de contato da empresa
 */
export interface ContactInfo {
  readonly phone: string;
  readonly whatsapp: string;
  readonly address: string;
  readonly city: string;
  readonly state: string;
}

/**
 * Company interface - Informações gerais da empresa
 */
export interface Company {
  readonly name: string;
  readonly slogan: string;
  readonly mission: string;
  readonly vision: string;
  readonly phone: string;
  readonly whatsapp: string;
  readonly website: string;
}

/**
 * Value interface - Representação de valores da empresa
 */
export interface Value {
  readonly title: string;
  readonly description: string;
}

/**
 * Generic handler type para callbacks
 */
export type EventHandler = (event: React.MouseEvent<HTMLElement>) => void;

/**
 * Generic async function type
 */
export type AsyncFunction<T = void> = () => Promise<T>;
