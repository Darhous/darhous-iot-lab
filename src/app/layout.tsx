import type { Metadata } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const hanken = Hanken_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darhous IoT Lab | Arduinoverse",
  description: "Learn Arduino, IoT, Robotics, and Smart Electronics with the Darhous AI Academy interactive platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`dark ${sora.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-on-surface font-body-md min-h-screen relative overflow-x-hidden antialiased">
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
