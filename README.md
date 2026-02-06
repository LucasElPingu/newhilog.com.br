# NEWHI Logística - Website Institucional

Website moderno e profissional para a empresa NEWHI Logística, desenvolvido com as tecnologias mais atualizadas.

## Tecnologias Utilizadas

- **Next.js 16.1.6** - Framework React moderno
- **React 19.2.3** - Biblioteca UI
- **Tailwind CSS 4+** - Framework CSS moderno
- **TypeScript 5** - Tipagem estática para JavaScript
- **CSS Modules** - Estilos encapsulados por componente
- **ESLint 9** - Análise estática de código

## Estrutura do Projeto

```
app/
├── components/          # Componentes reutilizáveis
│   ├── Header/         # Navegação principal
│   ├── Footer/         # Rodapé
│   ├── Hero/           # Seção herói da home
│   ├── Services/       # Serviços oferecidos
│   ├── Differentials/  # Diferenciais da empresa
│   ├── AboutUs/        # Quem somos
│   ├── ContactModal/   # Modal de contato
│   └── WhatsAppButton/ # Botão WhatsApp flutuante
├── sobre/              # Página Sobre
├── globals.css         # Estilos globais
├── layout.tsx          # Layout root
└── page.tsx            # Página inicial
```

## Instalação

### Pré-requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Passos

1. **Clonar o repositório**
```bash
git clone <seu-repositorio>
cd newhilog.com.br
```

2. **Instalar dependências**
```bash
npm install
```

3. **Configurar variáveis de ambiente** (se necessário)
```bash
cp .env.example .env.local
```

4. **Executar o servidor de desenvolvimento**
```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Compila para produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa verificação de linting
- `npm run type-check` - Verifica tipos TypeScript
- `npm run format` - Formata código com Prettier

## Recursos Implementados

### Home Page (/)
- ✅ Header fixo com logo e navegação
- ✅ Hero section com título impactante
- ✅ Botões de call-to-action
- ✅ Seção de serviços com cards
- ✅ Seção de diferenciais
- ✅ Seção "Quem Somos"
- ✅ Footer completo
- ✅ Botão WhatsApp flutuante

### Página Sobre (/sobre)
- ✅ História da empresa
- ✅ Missão e Visão
- ✅ Valores e princípios
- ✅ Razões para escolher NEWHI
- ✅ Call-to-action para contato

### Modal de Contato
- ✅ Telefone
- ✅ WhatsApp
- ✅ Endereço
- ✅ Animações suaves
- ✅ Responsivo

### Animações e Interações
- ✅ Fade-in ao carregar
- ✅ Animações ao rolar página
- ✅ Efeitos hover em botões e cards
- ✅ Transições suaves
- ✅ Float animation em imagens

### SEO
- ✅ Meta tags otimizadas
- ✅ Open Graph configurado
- ✅ Schema.org para dados estruturados
- ✅ Sitemap e robots.txt (automáticos no Next.js)
- ✅ URLs amigáveis

## Customização

### Logo
1. Coloque sua logo em `/public/images/logo.png`
2. Atualize a referência em `app/components/Header/index.tsx`

### Cores
As cores principais estão definidas em `tailwind.config.ts`:
- `primary-dark`: #0f2947
- `primary-blue`: #1e5a96
- `primary-green`: #16a34a
- `accent-cyan`: #06b6d4

### Conteúdo
Edite diretamente nos componentes React ou nas páginas:
- Home: `app/page.tsx`
- Sobre: `app/sobre/page.tsx`
- Componentes: `app/components/`

### WhatsApp
O número está configurado em múltiplos lugares:
- Header: Busque por `558191867142`
- Layout root: `app/layout.tsx`
- Componentes de contato

## Performance

O site foi otimizado para:
- ✅ Carregamento rápido
- ✅ Core Web Vitals
- ✅ Mobile-first design
- ✅ Compressão de assets
- ✅ Cache estratégico

## Deploy

### Vercel (Recomendado)
1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente se necessário
3. Deploy automático em cada push

### Build Manual
```bash
npm run build
npm start
```

## Responsividade

O site é totalmente responsivo e funciona em:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (até 767px)

## Acessibilidade

- ✅ Semântica HTML correta
- ✅ ARIA labels
- ✅ Navegação por teclado
- ✅ Contraste adequado
- ✅ Imagens com alt text

## Browser Support

- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Licença

MIT

## Contato

**NEWHI Logística**
- Telefone: (81) 9 9186-7142
- WhatsApp: https://wa.me/558191867142
- Endereço: Av. Comendador Gustavo Paiva, 2270 - Maceió, AL

## Suporte

Para dúvidas ou sugestões sobre o site, entre em contato através do WhatsApp ou telefone.

---

**Desenvolvido com ❤️ para NEWHI Logística**
