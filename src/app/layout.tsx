import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  variable: "--font-poppins",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Faturshau",
  description: "Faturshau Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.variable} lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="text-dark bg-light flex min-h-screen flex-col font-poppins">
        <Navbar />
        <main className="mb-3 mt-[52px] md:mt-[56px] xl:mt-[58.3px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
