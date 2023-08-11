import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Cardo, Tenor_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  fallback: ["sans-serif"],
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cardo",
  fallback: ["sans-serif"],
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor",
});

export const metadata: Metadata = {
  title: {
    template: "Fatur Shau - %s",
    default: "Fatur Shau",
  },
  description: "Faturshau Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${poppins.variable} ${cardo.variable} ${tenor.variable}`}
      lang="en"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="text-dark bg-light flex min-h-screen flex-col font-poppins">
        <Navbar />
        <main className="mb-3 mt-[60px] md:mt-[63px] lg:mt-[64px] xl:mt-[70px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
