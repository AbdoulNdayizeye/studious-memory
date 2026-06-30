import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sorosha.com"),
  title: {
    default: "SOROSHA — Time. Redefined. | Luxury Skeleton Automatic Watches",
    template: "%s · SOROSHA",
  },
  description:
    "SOROSHA crafts Swiss-inspired skeleton automatic timepieces in Ontario, Canada. 316L steel, sapphire crystal, and mechanical movements built for those who demand excellence.",
  keywords: ["luxury watch", "skeleton watch", "automatic movement", "Swiss-inspired", "SOROSHA", "mechanical watch", "Ontario watchmaker"],
  authors: [{ name: "SOROSHA" }],
  openGraph: {
    title: "SOROSHA — Time. Redefined.",
    description: "Luxury skeleton automatic timepieces, crafted for those who demand excellence.",
    type: "website",
    siteName: "SOROSHA",
  },
  twitter: { card: "summary_large_image", title: "SOROSHA — Time. Redefined." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="bg-ink text-bone antialiased">
        <Loader />
        <Cursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
