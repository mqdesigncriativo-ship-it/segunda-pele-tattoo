
export const metadata = {
  title: 'Segunda Pele Tattoo',
  description: 'Arte que vira pele. Estúdio no Ribeirão da Ilha, Floripa.',
}

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
