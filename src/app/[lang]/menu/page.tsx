"use client";

import { useState, use } from "react";
import Link from "next/link";
import { getDict } from "@/lib/translations";

type MenuItem = { name: string; en: string; fr: string; price: string; note?: string };
type MenuCategory = { id: string; labelKey: string; icon: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    id: "antipasti",
    labelKey: "cat1",
    icon: "🥖",
    items: [
      { name: "Garlic Cheese Bread", en: "Oven-baked garlic bread topped with melted cheese", fr: "Pain à l'ail cuit au four garni de fromage fondu", price: "$14" },
      { name: "Bruschetta", en: "Classic tomato bruschetta · basil · parmigiano", fr: "Bruschetta classique aux tomates · basilic · parmigiano", price: "$15" },
      { name: "Mushroom Bruschetta", en: "Porcini mushroom · garlic · balsamic", fr: "Champignons porcini · ail · balsamique", price: "$16" },
      { name: "Gamberi Portofino", en: "Seared garlic tiger shrimp · whiskey cream sauce", fr: "Crevettes tigrées saisies à l'ail · sauce crémeuse au whisky", price: "$21" },
      { name: "Salsiccia", en: "Roasted calabrese sausage · olives · hot peppers", fr: "Saucisse calabraise rôtie · olives · piments forts", price: "$18" },
      { name: "Polpette", en: "Meatballs and meat sauce", fr: "Boulettes de viande et sauce à la viande", price: "$17" },
      { name: "Roasted Garlic Soup", en: "Creamy roasted garlic soup", fr: "Soupe crémeuse à l'ail rôti", price: "$10" },
      { name: "Roasted Butternut Squash Soup", en: "Spicy pumpkin seeds", fr: "Graines de citrouille épicées", price: "$10" },
    ],
  },
  {
    id: "pasta",
    labelKey: "cat2",
    icon: "🍝",
    items: [
      { name: "Lobster Ravioli", en: "In a brandy & plum tomato cream sauce with piccoli gamberetti & shaved grana padano", fr: "Dans une sauce crémeuse au brandy et tomates prunes avec piccoli gamberetti et grana padano râpé", price: "$28" },
      { name: "Spaghetti con Polpette", en: "Classic Italian meat sauce · braised veal meatballs", fr: "Sauce à la viande à l'italienne · boulettes de veau braisées", price: "$26" },
      { name: "Lasagna", en: "House made", fr: "Faite maison", price: "$26" },
      { name: "Fettuccine Gamberi", en: "Sea scallop · tiger shrimp · sundried tomato pesto", fr: "Pétoncle · crevettes tigrées · pesto de tomates séchées", price: "$28", note: "houseSig" },
      { name: "Cannelloni", en: "House made · veal · mozzarella", fr: "Fait maison · veau · mozzarella", price: "$24" },
      { name: "Vinny's Penne", en: "Prosciutto · porcini mushroom cream sauce", fr: "Prosciutto · sauce crémeuse aux champignons porcini", price: "$27" },
      { name: "Linguine Pescatore", en: "Tiger shrimp · scallops · PEI mussels · clams · marinara", fr: "Crevettes tigrées · pétoncles · moules de l'Î.-P.-É. · palourdes · marinara", price: "$29" },
      { name: "Butternut Squash Ravioli", en: "Creamy gorgonzola sauce · pumpkin seeds", fr: "Sauce crémeuse au gorgonzola · graines de citrouille", price: "$28" },
      { name: "Gnocchi Pomodoro", en: "House made, hand rolled · salsa di pomodoro della nonna", fr: "Faits maison, roulés à la main · salsa di pomodoro della nonna", price: "$26" },
      { name: "Tortellini Sebastiano", en: "Stuffed with braised veal · mushroom · ham · cream sauce", fr: "Farcis de veau braisé · champignons · jambon · sauce crémeuse", price: "$28" },
      { name: "Rigatoni Sofia", en: "Fennel sausage · spinach · smothered in ricotta cheese", fr: "Saucisse au fenouil · épinards · nappés de ricotta", price: "$28" },
      { name: "Fettuccine Contessa", en: "Chicken · bell peppers · caramelized onion · mushroom · cream sauce", fr: "Poulet · poivrons · oignon caramélisé · champignons · sauce crémeuse", price: "$28" },
      { name: "Fettuccine Savuto", en: "Chicken · sundried tomato · mushroom · basil · pesto cream", fr: "Poulet · tomates séchées · champignons · basilic · crème au pesto", price: "$28" },
      { name: "Gnocchi Gorgonzola", en: "Hand rolled · creamy gorgonzola · walnuts", fr: "Roulés à la main · gorgonzola crémeux · noix", price: "$27" },
      { name: "Orecchiette con Salsiccia", en: "Sausage, peas and cream", fr: "Saucisse, petits pois et crème", price: "$28" },
      { name: "Agnolotti Rose", en: "Stuffed with ricotta and spinach · rosé sauce", fr: "Farcis de ricotta et épinards · sauce rosée", price: "$28" },
      { name: "Fettuccine Alfredo", en: "Classic creamy parmesan alfredo", fr: "Alfredo crémeux classique au parmesan", price: "$21" },
      { name: "Agnolotti Quattro Formaggi", en: "Stuffed with ricotta and spinach · smothered in parmigiano, gorgonzola, asiago, pecorino · topped with walnuts", fr: "Farcis de ricotta et épinards · nappés de parmigiano, gorgonzola, asiago, pecorino · garnis de noix", price: "$28" },
    ],
  },
  {
    id: "insalata",
    labelKey: "cat3",
    icon: "🥗",
    items: [
      { name: "Caesar", en: "Garlic anchovy dressing · bacon · croutons", fr: "Vinaigrette à l'ail et anchois · bacon · croûtons", price: "$18" },
      { name: "Caprese", en: "Tomato · bocconcini · basil · extra virgin olive oil", fr: "Tomate · bocconcini · basilic · huile d'olive extra vierge", price: "$18" },
      { name: "Arugula", en: "Dates · almond · bacon · asiago cheese", fr: "Dattes · amandes · bacon · fromage asiago", price: "$18" },
      { name: "Mista", en: "House mixed salad · organic greens · red wine vinaigrette", fr: "Salade mixte maison · verdure biologique · vinaigrette au vin rouge", price: "$18" },
    ],
  },
  {
    id: "secondi",
    labelKey: "cat4",
    icon: "🍽️",
    items: [
      { name: "Veal Marsala", en: "Mushroom · sweet Marsala wine · fettuccine alfredo", fr: "Champignons · vin Marsala doux · fettuccine alfredo", price: "$34" },
      { name: "Pollo Marsala", en: "Mushroom · sweet Marsala wine · fettuccine alfredo", fr: "Champignons · vin Marsala doux · fettuccine alfredo", price: "$34" },
      { name: "Veal Parmigiana", en: "With spaghetti Bolognese", fr: "Avec spaghetti bolognaise", price: "$34" },
      { name: "Pollo Parmigiana", en: "With spaghetti Bolognese", fr: "Avec spaghetti bolognaise", price: "$34" },
      { name: "Veal Saltimbocca", en: "Prosciutto · sage · veal jus · potatoes & vegetables", fr: "Prosciutto · sauge · jus de veau · pommes de terre et légumes", price: "$36" },
      { name: "Pollo Saltimbocca", en: "Prosciutto · sage · veal jus · potatoes & vegetables", fr: "Prosciutto · sauge · jus de veau · pommes de terre et légumes", price: "$36" },
      { name: "Veal Piccata", en: "Capers · lemon white wine sauce · fettuccine alfredo", fr: "Câpres · sauce au vin blanc et citron · fettuccine alfredo", price: "$36" },
      { name: "Pollo Piccata", en: "Capers · lemon white wine sauce · fettuccine alfredo", fr: "Câpres · sauce au vin blanc et citron · fettuccine alfredo", price: "$34" },
      { name: "Pollo Piemonte", en: "Breaded chicken stuffed with broccoli, goat and mozzarella cheese · roasted red pepper cream · potatoes & vegetables", fr: "Poulet pané farci de brocoli, fromage de chèvre et mozzarella · crème de poivron rouge rôti · pommes de terre et légumes", price: "$32" },
      { name: "Veal Mignonette", en: "Veal stuffed with prosciutto cotto and provolone · peppercorn mushroom veal jus · potatoes & vegetables", fr: "Veau farci de prosciutto cotto et provolone · jus de veau aux champignons et grains de poivre · pommes de terre et légumes", price: "$39", note: "houseSig" },
      { name: "Braciole", en: "Certified Angus strip loin steak pounded and stuffed with prosciutto · bocconcini · mushroom · merlot wine reduction · potatoes & vegetables", fr: "Contre-filet Angus certifié attendri et farci de prosciutto · bocconcini · champignons · réduction au merlot · pommes de terre et légumes", price: "$48", note: "houseSig" },
      { name: "Veal Fiorentina", en: "Prosciutto cotto · spinach · tiger shrimp · citrus cream · potatoes & vegetables", fr: "Prosciutto cotto · épinards · crevettes tigrées · crème aux agrumes · pommes de terre et légumes", price: "$36" },
      { name: "Pollo Fiorentina", en: "Prosciutto cotto · spinach · tiger shrimp · citrus cream · potatoes & vegetables", fr: "Prosciutto cotto · épinards · crevettes tigrées · crème aux agrumes · pommes de terre et légumes", price: "$32" },
      { name: "Pollo Amaretto", en: "Chicken breast breaded and coated with almonds · amaretto mushroom sauce · fettuccine alfredo", fr: "Poitrine de poulet panée et enrobée d'amandes · sauce amaretto aux champignons · fettuccine alfredo", price: "$32" },
      { name: "Il Trio", en: "Trio of chicken parmigiana · cannelloni · lasagna", fr: "Trio de poulet parmigiana · cannelloni · lasagne", price: "$36" },
      { name: "Rack of Lamb", en: "Please let your server know how you would like it cooked", fr: "Indiquez à votre serveur la cuisson désirée", price: "Market" },
      { name: "Filet Mignon", en: "Please let your server know how you would like it cooked", fr: "Indiquez à votre serveur la cuisson désirée", price: "Market" },
    ],
  },
  {
    id: "drinks",
    labelKey: "cat5",
    icon: "🍷",
    items: [
      { name: "Pinot Grigio · Fontamara, Italy", en: "Refined wine, dry, well-balanced with a persistent fruity smell", fr: "Vin raffiné, sec, bien équilibré avec un arôme fruité persistant", price: "$35" },
      { name: "Chardonnay · Cypress, USA", en: "Fruit forward with apple tones & soft peach, a taste of butter rum and vanilla toasted", fr: "Fruité avec des notes de pomme et de pêche douce, une touche de rhum au beurre et de vanille grillée", price: "$39" },
      { name: "Sauvignon Blanc · Anakena, Chile", en: "Tropical fruit & fig aromas, brilliant lemon-lime colour. Well-balanced, crisp, long fruity finish", fr: "Arômes de fruits tropicaux et de figue, couleur citron-lime éclatante. Équilibré, vif, longue finale fruitée", price: "$35" },
      { name: "Moretti", en: "Italian lager", fr: "Lager italienne", price: "$6" },
      { name: "Peroni", en: "Italian lager", fr: "Lager italienne", price: "$6" },
      { name: "Coors Light", en: "Light lager", fr: "Lager légère", price: "$6" },
      { name: "Heineken", en: "Premium lager", fr: "Lager premium", price: "$6" },
      { name: "Stella", en: "Belgian lager", fr: "Lager belge", price: "$6" },
      { name: "Strongbow", en: "Apple cider", fr: "Cidre de pomme", price: "$7" },
      { name: "Prosecco", en: "Sparkling Italian wine", fr: "Vin pétillant italien", price: "$35" },
      { name: "Arranciatta", en: "Orange Italian soda", fr: "Soda italien à l'orange", price: "$3.50" },
      { name: "Rosso", en: "Blood orange Italian soda", fr: "Soda italien à l'orange sanguine", price: "$3.50" },
      { name: "Limonata", en: "Lemon Italian soda", fr: "Soda italien au citron", price: "$3.50" },
      { name: "Pompelmo", en: "Grapefruit Italian soda", fr: "Soda italien au pamplemousse", price: "$3.50" },
      { name: "San Pellegrino (250ml)", en: "Sparkling mineral water", fr: "Eau minérale pétillante", price: "$3.50" },
      { name: "San Pellegrino (750ml)", en: "Sparkling mineral water", fr: "Eau minérale pétillante", price: "$6.50" },
      { name: "Coke · Diet Coke · Ginger Ale · Sprite", en: "Assorted soft drinks", fr: "Boissons gazeuses assorties", price: "$2.50" },
    ],
  },
];

type NoteKey = 'houseSig' | 'houseLegend' | 'chefFav' | 'forTwo';

export default function MenuPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const d = getDict(lang);
  const isFr = lang === "fr";
  const [active, setActive] = useState("antipasti");
  const current = menuData.find((c) => c.id === active)!;

  const catLabels: Record<string, string> = {
    cat1: d.menu.cat1, cat2: d.menu.cat2, cat3: d.menu.cat3, cat4: d.menu.cat4, cat5: d.menu.cat5
  };

  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-5 md:px-8 text-center"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(139,26,26,0.07) 0%, transparent 70%), linear-gradient(180deg, #F2E8D9 0%, #FAF6EF 100%)",
        }}
      >
        <p className="section-label mb-3">{d.menu.heroLabel}</p>
        <h1
          className="section-title mb-4"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}
        >
          {d.menu.heroTitle}
        </h1>
        <div className="divider-gold-sm mb-5" />
        <p className="text-[#6B5341] max-w-lg mx-auto text-sm leading-relaxed">
          {d.menu.heroTagline}
        </p>
      </section>

      {/* ── TABS ────────────────────────────────────────── */}
      <section className="sticky top-[60px] z-30 border-b border-[rgba(139,26,26,0.15)] backdrop-blur-sm" style={{ background: "rgba(250,246,239,0.97)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 border-b-2 whitespace-nowrap ${
                  active === cat.id
                    ? "text-[#6B1212] border-[#8B1A1A]"
                    : "text-[#9E8068] border-transparent hover:text-[#6B5341] hover:border-[rgba(139,26,26,0.3)]"
                }`}
              >
                <span>{cat.icon}</span>
                {catLabels[cat.labelKey]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU ITEMS ──────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8 min-h-[60vh]" style={{ background: "#FAF6EF" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-3xl">{current.icon}</span>
            <h2
              className="text-[#1C1409] text-2xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {catLabels[current.labelKey]}
            </h2>
          </div>

          <div>
            {current.items.map((item) => (
              <div key={item.name} className="menu-item px-4 -mx-4 rounded-sm">
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="text-[#1C1409] font-semibold"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.name}
                      </h3>
                      {item.note && (
                        <span className="text-[10px] tracking-wider uppercase text-white bg-[#8B1A1A] px-2 py-0.5 font-semibold">
                          {d.menu[item.note as NoteKey]}
                        </span>
                      )}
                    </div>
                    <p className="text-[#6B5341] text-sm leading-relaxed mt-1">
                      {isFr ? item.fr : item.en}
                    </p>
                  </div>
                  <span className="text-[#8B1A1A] font-semibold text-base flex-shrink-0">
                    {item.price === "Market" ? (isFr ? "Prix du marché" : "Market") : item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALLERGEN NOTE ───────────────────────────────── */}
      <section className="pb-20 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-4xl mx-auto border border-[rgba(139,26,26,0.2)] p-6" style={{ background: "#F2E8D9" }}>
          <p className="text-[#6B5341] text-sm leading-relaxed">
            <strong className="text-[#1C1409]">{d.menu.allergenTitle}:</strong>{" "}
            {d.menu.allergenText}
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center"
        style={{ background: "linear-gradient(180deg, #F2E8D9, #FAF6EF)", borderTop: "1px solid rgba(139,26,26,0.1)" }}
      >
        <h2
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {d.menu.readyTitle}
        </h2>
        <p className="text-[#6B5341] mb-8 max-w-md mx-auto">
          {d.menu.readyText}
        </p>
        <Link href={`/${lang}/reservations`} className="btn-gold">
          {d.menu.reserveBtn}
        </Link>
      </section>
    </>
  );
}
