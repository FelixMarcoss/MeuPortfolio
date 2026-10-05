# Meu Portfólio

Meu site para apresentar seu foco em desenvolvimento Flutter/mobile, um projeto em destaque e canais de contato.

**Acesse:** [felixmarcoss.github.io/MeuPortfolio](https://felixmarcoss.github.io/MeuPortfolio/)

## O que há no site

- apresentação inicial com links para LinkedIn, GitHub e Instagram;
- seção de projetos com cartão interativo e modal de detalhes;
- área de contato e navegação entre as seções;
- layout responsivo com estilos separados por componente.


## Tecnologias

React 19, Vite 7, JavaScript e CSS. O site é estático e não precisa de um backend para rodar.

## Executar localmente

Requer Node.js e npm:

```bash
npm ci
npm run dev
```

Para conferir a versão de produção e as regras de código:

```bash
npm run build
npm run lint
```

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| [`src/App.jsx`](src/App.jsx) | Composição das seções |
| [`src/components/Hero.jsx`](src/components/Hero.jsx) | Apresentação inicial |
| [`src/components/Projects.jsx`](src/components/Projects.jsx) | Lista e interação dos projetos |
| [`src/components/Contact.jsx`](src/components/Contact.jsx) | Canais de contato |

