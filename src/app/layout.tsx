import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Cabotto's Restaurant | Authentic Italian Cuisine in Ottawa Since 1976",
  description: "Award-winning authentic Italian cuisine in Ottawa since 1976. Located on Hazeldean Road. Reserve your table today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#FAF6EF] text-[#1C1409]">{children}</body>
    </html>
  );
}
