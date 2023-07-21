import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
  variable: '--font-poppins',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'Faturshau',
  description: 'Faturshau Web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.variable} lang="en">
      <body className="font-poppins min-h-screen flex flex-col">
        <Navbar />
        <main className="mt-16 mb-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
