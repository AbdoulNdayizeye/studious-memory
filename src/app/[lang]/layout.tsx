import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/translations";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const d = getDict(lang);
  return (
    <>
      <Navigation lang={lang === "fr" ? "fr" : "en"} d={d} />
      <main>{children}</main>
      <Footer lang={lang === "fr" ? "fr" : "en"} d={d} />
    </>
  );
}
