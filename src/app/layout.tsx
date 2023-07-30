import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
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
    <html className={poppins.className} lang="en">
      <body className="text-dark bg-light flex min-h-screen flex-col">
        <Navbar />
        <main className="mb-3 mt-[52px] md:mt-[56px] xl:mt-[58.3px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
