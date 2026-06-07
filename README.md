# Portfolio — Luan Felipe

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em dev
npm run dev
# → abre em http://localhost:3000

# 3. Build de produção
npm run build
npm start
```

## 📁 Estrutura

```
portfolio-luan/
├── app/
│   ├── layout.jsx       ← metadados, fontes, SEO
│   ├── page.jsx         ← página principal (monta os componentes)
│   └── globals.css      ← variáveis CSS, estilos globais
│
├── components/
│   ├── Cursor.jsx        ← cursor customizado
│   ├── Nav.jsx           ← navbar + menu mobile
│   ├── Hero.jsx          ← seção inicial com nome, foto e stats
│   ├── Ticker.jsx        ← faixa de skills animada
│   ├── Sobre.jsx         ← sobre mim + skills + stats
│   ├── Projetos.jsx      ← lista de projetos  ← EDITE AQUI
│   ├── Diferenciais.jsx  ← por que eu
│   ├── Processo.jsx      ← meu processo de trabalho
│   ├── Trajetoria.jsx    ← formação e experiência
│   ├── Contato.jsx       ← seção de contato
│   └── Footer.jsx        ← rodapé
│
└── public/
    └── foto.jpg          ← coloque sua foto aqui
```

## ✏️ O que personalizar

### 1. Sua foto
- Coloque o arquivo em `public/foto.jpg`
- Em `components/Hero.jsx`, substitua o bloco `photoPh` por:
```jsx
<img src="/foto.jpg" alt="Luan Felipe" className={styles.photo} />
```

### 2. Seus projetos
- Abra `components/Projetos.jsx`
- Edite o array `projects` no topo do arquivo
- Campos: `title`, `desc`, `tags`, `href`, `status` ('live' | 'wip' | 'done')

### 3. Links e contatos
- `components/Contato.jsx` → array `links`
- `components/Footer.jsx` → links do rodapé

## 🌐 Deploy na Vercel

```bash
# Instalar CLI da Vercel (só na primeira vez)
npm i -g vercel

# Fazer deploy
vercel

# Após conectar ao GitHub, qualquer push na main faz deploy automático
```

Ou acesse vercel.com → "New Project" → importe o repositório do GitHub.
