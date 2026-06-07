import './globals.css'

export const metadata = {
  title: 'Luan Felipe — Dev Full Stack & Cofundador',
  description:
    'Luan Felipe — Desenvolvedor Full Stack e CSO da Secco. React, Python, PostgreSQL. Recife, PE. Disponível para freelas, estágios e parcerias.',
  authors: [{ name: 'Luan Felipe' }],
  openGraph: {
    title: 'Luan Felipe — Dev Full Stack & Cofundador',
    description: 'Dev que também funda empresas. Código + estratégia + resultado.',
    type: 'website',
    url: 'https://luanfelipe.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luan Felipe — Dev Full Stack & Cofundador',
    description: 'Dev que também funda empresas. Código + estratégia + resultado.',
  },
  metadataBase: new URL('https://luanfelipe.dev'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&family=IBM+Plex+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
