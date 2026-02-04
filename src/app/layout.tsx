import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Nunito, Montserrat, Zen_Maru_Gothic } from "next/font/google";

const nunito = Nunito({
  weight: ["700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito"
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat"
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-zen-maru-gothic"
});

export const metadata: Metadata = {
  title: "HAND Agency — Creative Marketing",
  description:
    "HAND Agency — креативное агентство полного цикла. Маркетинг, запуски, брендинг, дизайн, SMM и продакшн."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="bg-black dark">
      <body
        className={`${nunito.variable} ${montserrat.variable} ${zenMaruGothic.variable} min-h-screen bg-black text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
