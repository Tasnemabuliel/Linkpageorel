import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OREL KORIAT — דף קישורים',
  description: 'Link-in-bio פרימיום למאמן כושר',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

