import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScaleOps | Sistemas sob medida',
  description: 'ScaleOps cria sistemas, plataformas e automações para empresas que querem escalar operação, produtividade e controle.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
