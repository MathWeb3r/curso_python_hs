# 🐍 Mini Aulas em Python - React + Vite

Um mini curso completo de Introdução à Programação em Python, desenvolvido com React e Vite.

## 📋 Estrutura do Projeto

```
miniaulas_em_python/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CourseCard.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── courses.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index-react.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Como Usar

### 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/miniaulas_em_python.git
cd miniaulas_em_python

# Instale as dependências
npm install
```

### 2. Desenvolvimento Local

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

### 3. Build para Produção

```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados para produção.

### 4. Deploy no GitHub Pages

```bash
npm run deploy
```

Isso fará o build e enviará automaticamente os arquivos para o GitHub Pages.

> **Nota:** Certifique-se de que `homepage` no `package.json` está correto com sua URL do GitHub Pages.

## 📝 Como Adicionar/Editar Aulas

Edite o arquivo `src/data/courses.js`:

```javascript
{
  id: 1,
  title: 'Aula 1',
  subtitle: 'Introdução a Python',
  status: 'ongoing', // 'ongoing', 'completed', 'planned'
  videos: [
    { title: 'O que é Python?', url: 'https://youtube.com/...' },
    // ... mais vídeos
  ],
  exercises: [
    { title: 'Exercism', url: 'https://exercism.org/...' },
    // ... mais exercícios
  ],
  texts: [
    { title: 'Guia', url: 'https://drive.google.com/...' },
    // ... mais textos
  ],
  notebookUrl: 'https://drive.google.com/...'
}
```

## 🎨 Customização

- **Cores**: Edite `src/index.css` para mudar as cores do tema
- **Conteúdo**: Edite `src/data/courses.js` para adicionar/remover aulas
- **Componentes**: Edite os arquivos em `src/components/`

## 📦 Dependências

- **React 18.2.0** - Biblioteca UI
- **Vite 4.3.9** - Build tool
- **gh-pages 5.0.0** - Deploy no GitHub Pages

## 🔗 Links Úteis

- [Documentação React](https://react.dev/)
- [Documentação Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

Criado para fins educacionais.

---

**Última atualização:** Maio de 2026
