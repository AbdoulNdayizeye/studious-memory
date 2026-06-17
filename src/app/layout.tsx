import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabotto's Restaurant | Authentic Italian Cuisine in Ottawa Since 1976",
  description:
    "Experience Ottawa's finest authentic Italian cuisine at Cabotto's Restaurant. Family-run since 1976, voted Best Italian Restaurant in Ottawa 5 years running. Located on Hazeldean Road.",
  keywords: [
    "Cabotto's Restaurant",
    "Italian restaurant Ottawa",
    "authentic Italian food Ottawa",
    "Hazeldean Road restaurant",
    "best Italian Ottawa",
    "family restaurant Ottawa",
    "fine dining Ottawa west",
    "Italian cuisine Kanata Stittsville",
  ],
  openGraph: {
    title: "Cabotto's Restaurant | Ottawa's Finest Italian Since 1976",
    description:
      "Award-winning authentic Italian cuisine in a stunning Gothic Revival heritage building. Voted Best Italian Restaurant in Ottawa 5 years running.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-dark text-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
