import AnimatedSection from "./AnimatedSection";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    text: "El mejor marisco de Alicante sin duda. Las gambas rojas estaban espectaculares y el arroz meloso de mero, para repetir. Trato muy familiar.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Fuimos un grupo grande y nos trataron de maravilla. Raciones muy generosas, calidad excelente y precios justos para lo que ofrecen.",
    rating: 5,
  },
  {
    name: "Laura M.",
    text: "Un sitio con mucho ambiente, siempre lleno, y con razón. El gazpacho marinero es increíble. Imprescindible reservar con antelación.",
    rating: 4,
  },
  {
    name: "Antonio P.",
    text: "Cocina tradicional como la de antes. Los postres caseros son una delicia. Volveremos siempre que visitemos Alicante.",
    rating: 5,
  },
];

const ReviewsSection = () => (
  <section id="opiniones" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">Opiniones</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Lo que dicen nuestros clientes
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <AnimatedSection key={r.name}>
            <div className="bg-background rounded-lg p-6 shadow-md h-full flex flex-col">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 italic">
                "{r.text}"
              </p>
              <p className="font-body text-sm font-bold text-foreground mt-4">— {r.name}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="flex justify-center gap-6 mt-10">
        <a
          href="https://www.tripadvisor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-sm font-bold text-secondary hover:underline"
        >
          Tripadvisor <ExternalLink size={14} />
        </a>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-sm font-bold text-secondary hover:underline"
        >
          Google Maps <ExternalLink size={14} />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default ReviewsSection;
