import AnimatedSection from "./AnimatedSection";
import { Phone } from "lucide-react";

const menuDia = {
  title: "Menú del día",
  price: "18–20 €",
  note: "Sin bebida. Sujeto a disponibilidad.",
  items: [
    "Entrantes compartidos de temporada",
    "Principal a elegir: Arroz meloso o Gazpacho marinero",
    "Postre casero del día",
  ],
};

const carta = [
  {
    category: "Entrantes fríos",
    items: ["Ensaladilla rusa", "Salpicón de marisco", "Gazpacho andaluz", "Anchoas del Cantábrico"],
  },
  {
    category: "Entrantes calientes",
    items: ["Croquetas caseras de jamón", "Gambas al ajillo", "Pulpo a la gallega", "Chopitos fritos"],
  },
  {
    category: "Arroces (mín. 2 personas)",
    items: ["Arroz meloso de mero y gambas", "Arroz a banda", "Gazpacho marinero", "Arroz negro"],
  },
  {
    category: "Pescados y mariscos",
    items: ["Fritura de pescado variado", "Dorada a la sal", "Gambas rojas de Alicante", "Cigalas a la plancha"],
  },
  {
    category: "Postres",
    items: ["Flan casero", "Tarta de queso", "Crema catalana", "Sorbete de limón"],
  },
];

const MenuSection = () => (
  <section id="menu" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">Nuestra carta</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Menú</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-lg mx-auto">
          Carta orientativa. Precios y disponibilidad pueden variar según temporada y producto fresco del día.
        </p>
      </AnimatedSection>

      {/* Menú del día */}
      <AnimatedSection className="max-w-xl mx-auto mb-14">
        <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-primary mb-2">{menuDia.title}</h3>
          <p className="font-display text-3xl font-bold text-foreground mb-4">{menuDia.price}</p>
          <ul className="space-y-2 mb-4">
            {menuDia.items.map((item) => (
              <li key={item} className="font-body text-foreground">{item}</li>
            ))}
          </ul>
          <p className="font-body text-xs text-muted-foreground">{menuDia.note}</p>
        </div>
      </AnimatedSection>

      {/* Carta */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {carta.map((section) => (
          <AnimatedSection key={section.category}>
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold text-primary mb-4 border-b border-border pb-3">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="font-body text-foreground text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <a
          href="tel:966231086"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
        >
          <Phone size={18} />
          Reservar mesa
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default MenuSection;
