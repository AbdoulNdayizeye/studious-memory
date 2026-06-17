"use client";

import { useState } from "react";

type MenuItem = { name: string; description: string; price: string; note?: string };
type MenuCategory = { id: string; label: string; icon: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    id: "antipasti",
    label: "Antipasti",
    icon: "🥗",
    items: [
      {
        name: "Bruschetta al Pomodoro",
        description: "Toasted artisan bread with fresh vine tomatoes, garlic, extra virgin olive oil, and fresh basil",
        price: "$12",
      },
      {
        name: "Antipasto della Casa",
        description: "Chef's selection of Italian charcuterie, aged cheeses, marinated vegetables, and house-made pickles",
        price: "$18",
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried squid rings with lemon, house-made arrabbiata dipping sauce",
        price: "$16",
      },
      {
        name: "Carpaccio di Manzo",
        description: "Paper-thin prime beef, rocket, shaved Parmigiano, capers, and truffle oil",
        price: "$19",
      },
      {
        name: "Burrata e Prosciutto",
        description: "Creamy burrata with 24-month aged Prosciutto di Parma, fig jam, and grilled focaccia",
        price: "$17",
      },
      {
        name: "Zuppa del Giorno",
        description: "Chef's daily soup — ask your server for today's selection",
        price: "$10",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    icon: "🍝",
    items: [
      {
        name: "Spaghetti Carbonara",
        description: "Free-range egg, guanciale, Pecorino Romano, freshly cracked black pepper",
        price: "$22",
      },
      {
        name: "Rigatoni all'Amatriciana",
        description: "San Marzano tomatoes, guanciale, Pecorino Romano, Calabrian chilli",
        price: "$21",
      },
      {
        name: "Fettuccine al Tartufo",
        description: "Fresh fettuccine, black truffle, crème fraîche, shaved Parmigiano",
        price: "$26",
        note: "Chef's Favourite",
      },
      {
        name: "Lasagne della Nonna",
        description: "House-made lasagne sheets, slow-cooked Bolognese, béchamel, Parmigiano",
        price: "$24",
      },
      {
        name: "Penne all'Arrabbiata",
        description: "Penne with San Marzano tomatoes, garlic, fresh chilli, and extra virgin olive oil",
        price: "$20",
      },
      {
        name: "Gnocchi al Gorgonzola",
        description: "Pillowy potato gnocchi in a gorgonzola and walnut cream sauce with fresh chives",
        price: "$23",
      },
      {
        name: "Linguine alle Vongole",
        description: "Fresh Prince Edward Island clams, white wine, garlic, chilli, and Italian parsley",
        price: "$28",
        note: "House Signature",
      },
    ],
  },
  {
    id: "mains",
    label: "Main Dishes",
    icon: "🍽️",
    items: [
      {
        name: "Osso Buco alla Milanese",
        description: "Slow-braised veal shank in white wine, served with saffron risotto and classic gremolata",
        price: "$42",
        note: "House Signature",
      },
      {
        name: "Vitello al Limone",
        description: "Veal escalope in a delicate lemon butter sauce with capers, sage, and prosciutto",
        price: "$38",
      },
      {
        name: "Pollo alla Parmigiana",
        description: "Pan-fried chicken breast, San Marzano tomato sauce, buffalo mozzarella, fresh basil",
        price: "$32",
      },
      {
        name: "Salmone al Forno",
        description: "Oven-baked Atlantic salmon with caper and herb butter, roasted fennel, and lemon",
        price: "$34",
      },
      {
        name: "Tagliata di Manzo",
        description: "Sliced AAA striploin, aged balsamic reduction, rocket, shaved Parmigiano",
        price: "$46",
      },
      {
        name: "Costolette d'Agnello",
        description: "Herb-crusted lamb chops, rosemary jus, roasted cherry tomatoes, and polenta",
        price: "$44",
      },
      {
        name: "Branzino in Crosta di Sale",
        description: "Whole sea bass baked in a salt crust with herbs and citrus, carved tableside",
        price: "$36",
        note: "For Two",
      },
    ],
  },
  {
    id: "dolci",
    label: "Desserts",
    icon: "🍮",
    items: [
      {
        name: "Tiramisù della Casa",
        description: "Our iconic original tiramisù — savoiardi, espresso, mascarpone, and dark cocoa. A recipe unchanged since 1976.",
        price: "$12",
        note: "House Legend",
      },
      {
        name: "Panna Cotta alla Vaniglia",
        description: "Silky vanilla bean panna cotta with a warm strawberry and Amaretto compote",
        price: "$10",
      },
      {
        name: "Cannoli Siciliani",
        description: "Three crispy Sicilian pastry shells filled with sweetened ricotta and candied citrus",
        price: "$11",
      },
      {
        name: "Gelato Artigianale",
        description: "Three scoops of house-made gelato — ask your server for today's flavours",
        price: "$10",
      },
      {
        name: "Profiteroles al Cioccolato",
        description: "Choux puffs filled with vanilla gelato, warm Valrhona chocolate sauce",
        price: "$13",
      },
      {
        name: "Torta di Ricotta",
        description: "Baked Sicilian ricotta cheesecake with lemon zest and seasonal fruit compote",
        price: "$11",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    icon: "🍷",
    items: [
      {
        name: "House Red Wine (glass)",
        description: "Ask your server for our current selection — Chianti, Barolo, Amarone and more",
        price: "$12",
      },
      {
        name: "House White Wine (glass)",
        description: "Pinot Grigio, Soave, or Gavi — ask your server for today's pour",
        price: "$11",
      },
      {
        name: "Prosecco DOC (glass)",
        description: "Chilled Prosecco from the Veneto region, crisp and lightly floral",
        price: "$13",
      },
      {
        name: "Aperol Spritz",
        description: "Aperol, Prosecco, splash of soda, orange slice — the Italian classic",
        price: "$14",
      },
      {
        name: "Negroni",
        description: "Campari, sweet vermouth, London dry gin, orange peel",
        price: "$15",
      },
      {
        name: "Italian Sodas",
        description: "San Pellegrino sparkling water, or choice of Italian fruit sodas",
        price: "$5",
      },
      {
        name: "Espresso",
        description: "Single or double shot — rich, aromatic, true Italian style",
        price: "$4",
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and velvety foam, dusted with cocoa",
        price: "$6",
      },
    ],
  },
];

export default function MenuPage() {
  const [active, setActive] = useState("antipasti");
  const current = menuData.find((c) => c.id === active)!;

  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-5 md:px-8 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%), linear-gradient(180deg, #1A1309 0%, #0D0A06 100%)",
        }}
      >
        <p className="section-label mb-3">Authentic Italian</p>
        <h1
          className="section-title mb-4"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}
        >
          Our Menu
        </h1>
        <div className="divider-gold-sm mb-5" />
        <p className="text-cream-dark max-w-lg mx-auto text-sm leading-relaxed">
          Every dish is crafted using only the finest ingredients, following
          authentic Italian recipes refined over nearly five decades.
          Prices do not include applicable taxes.
        </p>
      </section>

      {/* ── TABS ────────────────────────────────────────── */}
      <section className="sticky top-[60px] z-30 bg-dark/95 border-b border-gold/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 border-b-2 whitespace-nowrap ${
                  active === cat.id
                    ? "text-gold border-gold"
                    : "text-cream-dark border-transparent hover:text-cream-muted hover:border-gold/30"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU ITEMS ──────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8 min-h-[60vh]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-3xl">{current.icon}</span>
            <h2
              className="text-cream text-2xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {current.label}
            </h2>
          </div>

          <div>
            {current.items.map((item) => (
              <div key={item.name} className="menu-item px-4 -mx-4 rounded-sm">
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="text-cream font-semibold"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.name}
                      </h3>
                      {item.note && (
                        <span className="text-[10px] tracking-wider uppercase text-dark bg-gold px-2 py-0.5 font-semibold">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <p className="text-cream-dark text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-gold font-semibold text-base flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALLERGEN NOTE ───────────────────────────────── */}
      <section className="pb-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto border border-gold/15 p-6 bg-dark-2">
          <p className="text-cream-dark text-sm leading-relaxed">
            <strong className="text-cream-muted">Allergen Information:</strong>{" "}
            Please inform your server of any dietary requirements or allergies.
            Our kitchen handles gluten, nuts, dairy, shellfish, and other common
            allergens. Menu items and prices are subject to seasonal change.
            All prices in CAD, taxes not included.
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center border-t border-gold/10"
        style={{ background: "linear-gradient(180deg, #0D0A06, #1A1309)" }}
      >
        <h2
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Ready to Dine?
        </h2>
        <p className="text-cream-dark mb-8 max-w-md mx-auto">
          Reserve your table and let us create a memorable Italian dining
          experience for you and your guests.
        </p>
        <a href="/reservations" className="btn-gold">
          Reserve a Table
        </a>
      </section>
    </>
  );
}
