import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "HAND Agency — Creative Marketing",
  description:
    "HAND Agency — креативное агентство полного цикла. Маркетинг, запуски, брендинг, дизайн, SMM и продакшн."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="bg-black dark">
      <body className="min-h-screen bg-black text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

