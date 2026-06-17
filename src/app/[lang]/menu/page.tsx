"use client";

import { useState, use } from "react";
import Link from "next/link";
import { getDict } from "@/lib/translations";

type MenuItem = { name: string; description: string; price: string; note?: string };
type MenuCategory = { id: string; labelKey: string; icon: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    id: "antipasti",
    labelKey: "cat1",
    icon: "🥗",
    items: [
      { name: "Bruschetta al Pomodoro", description: "Toasted artisan bread with fresh vine tomatoes, garlic, extra virgin olive oil, and fresh basil", price: "$12" },
      { name: "Antipasto della Casa", description: "Chef's selection of Italian charcuterie, aged cheeses, marinated vegetables, and house-made pickles", price: "$18" },
      { name: "Calamari Fritti", description: "Crispy fried squid rings with lemon, house-made arrabbiata dipping sauce", price: "$16" },
      { name: "Carpaccio di Manzo", description: "Paper-thin prime beef, rocket, shaved Parmigiano, capers, and truffle oil", price: "$19" },
      { name: "Burrata e Prosciutto", description: "Creamy burrata with 24-month aged Prosciutto di Parma, fig jam, and grilled focaccia", price: "$17" },
      { name: "Zuppa del Giorno", description: "Chef's daily soup — ask your server for today's selection", price: "$10" },
    ],
  },
  {
    id: "pasta",
    labelKey: "cat2",
    icon: "🍝",
    items: [
      { name: "Spaghetti Carbonara", description: "Free-range egg, guanciale, Pecorino Romano, freshly cracked black pepper", price: "$22" },
      { name: "Rigatoni all'Amatriciana", description: "San Marzano tomatoes, guanciale, Pecorino Romano, Calabrian chilli", price: "$21" },
      { name: "Fettuccine al Tartufo", description: "Fresh fettuccine, black truffle, crème fraîche, shaved Parmigiano", price: "$26", note: "chefFav" },
      { name: "Lasagne della Nonna", description: "House-made lasagne sheets, slow-cooked Bolognese, béchamel, Parmigiano", price: "$24" },
      { name: "Penne all'Arrabbiata", description: "Penne with San Marzano tomatoes, garlic, fresh chilli, and extra virgin olive oil", price: "$20" },
      { name: "Gnocchi al Gorgonzola", description: "Pillowy potato gnocchi in a gorgonzola and walnut cream sauce with fresh chives", price: "$23" },
      { name: "Linguine alle Vongole", description: "Fresh Prince Edward Island clams, white wine, garlic, chilli, and Italian parsley", price: "$28", note: "houseSig" },
    ],
  },
  {
    id: "mains",
    labelKey: "cat3",
    icon: "🍽️",
    items: [
      { name: "Osso Buco alla Milanese", description: "Slow-braised veal shank in white wine, served with saffron risotto and classic gremolata", price: "$42", note: "houseSig" },
      { name: "Vitello al Limone", description: "Veal escalope in a delicate lemon butter sauce with capers, sage, and prosciutto", price: "$38" },
      { name: "Pollo alla Parmigiana", description: "Pan-fried chicken breast, San Marzano tomato sauce, buffalo mozzarella, fresh basil", price: "$32" },
      { name: "Salmone al Forno", description: "Oven-baked Atlantic salmon with caper and herb butter, roasted fennel, and lemon", price: "$34" },
      { name: "Tagliata di Manzo", description: "Sliced AAA striploin, aged balsamic reduction, rocket, shaved Parmigiano", price: "$46" },
      { name: "Costolette d'Agnello", description: "Herb-crusted lamb chops, rosemary jus, roasted cherry tomatoes, and polenta", price: "$44" },
      { name: "Branzino in Crosta di Sale", description: "Whole sea bass baked in a salt crust with herbs and citrus, carved tableside", price: "$36", note: "forTwo" },
    ],
  },
  {
    id: "dolci",
    labelKey: "cat4",
    icon: "🍮",
    items: [
      { name: "Tiramisù della Casa", description: "Our iconic original tiramisù — savoiardi, espresso, mascarpone, and dark cocoa. A recipe unchanged since 1976.", price: "$12", note: "houseLegend" },
      { name: "Panna Cotta alla Vaniglia", description: "Silky vanilla bean panna cotta with a warm strawberry and Amaretto compote", price: "$10" },
      { name: "Cannoli Siciliani", description: "Three crispy Sicilian pastry shells filled with sweetened ricotta and candied citrus", price: "$11" },
      { name: "Gelato Artigianale", description: "Three scoops of house-made gelato — ask your server for today's flavours", price: "$10" },
      { name: "Profiteroles al Cioccolato", description: "Choux puffs filled with vanilla gelato, warm Valrhona chocolate sauce", price: "$13" },
      { name: "Torta di Ricotta", description: "Baked Sicilian ricotta cheesecake with lemon zest and seasonal fruit compote", price: "$11" },
    ],
  },
  {
    id: "drinks",
    labelKey: "cat5",
    icon: "🍷",
    items: [
      { name: "House Red Wine (glass)", description: "Ask your server for our current selection — Chianti, Barolo, Amarone and more", price: "$12" },
      { name: "House White Wine (glass)", description: "Pinot Grigio, Soave, or Gavi — ask your server for today's pour", price: "$11" },
      { name: "Prosecco DOC (glass)", description: "Chilled Prosecco from the Veneto region, crisp and lightly floral", price: "$13" },
      { name: "Aperol Spritz", description: "Aperol, Prosecco, splash of soda, orange slice — the Italian classic", price: "$14" },
      { name: "Negroni", description: "Campari, sweet vermouth, London dry gin, orange peel", price: "$15" },
      { name: "Italian Sodas", description: "San Pellegrino sparkling water, or choice of Italian fruit sodas", price: "$5" },
      { name: "Espresso", description: "Single or double shot — rich, aromatic, true Italian style", price: "$4" },
      { name: "Cappuccino", description: "Espresso with steamed milk and velvety foam, dusted with cocoa", price: "$6" },
    ],
  },
];

type NoteKey = 'houseSig' | 'houseLegend' | 'chefFav' | 'forTwo';

export default function MenuPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const d = getDict(lang);
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
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%), linear-gradient(180deg, #F2E8D9 0%, #FAF6EF 100%)",
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
      <section className="sticky top-[60px] z-30 border-b border-[rgba(201,168,76,0.15)] backdrop-blur-sm" style={{ background: "rgba(250,246,239,0.97)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 border-b-2 whitespace-nowrap ${
                  active === cat.id
                    ? "text-[#8B6914] border-[#C9A84C]"
                    : "text-[#9E8068] border-transparent hover:text-[#6B5341] hover:border-[rgba(201,168,76,0.3)]"
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
                        <span className="text-[10px] tracking-wider uppercase text-[#1C1409] bg-[#C9A84C] px-2 py-0.5 font-semibold">
                          {d.menu[item.note as NoteKey]}
                        </span>
                      )}
                    </div>
                    <p className="text-[#6B5341] text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[#C9A84C] font-semibold text-base flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALLERGEN NOTE ───────────────────────────────── */}
      <section className="pb-20 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-4xl mx-auto border border-[rgba(201,168,76,0.2)] p-6" style={{ background: "#F2E8D9" }}>
          <p className="text-[#6B5341] text-sm leading-relaxed">
            <strong className="text-[#1C1409]">{d.menu.allergenTitle}:</strong>{" "}
            {d.menu.allergenText}
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center"
        style={{ background: "linear-gradient(180deg, #F2E8D9, #FAF6EF)", borderTop: "1px solid rgba(201,168,76,0.1)" }}
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
