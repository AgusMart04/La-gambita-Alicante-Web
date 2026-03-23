import AnimatedSection from "./AnimatedSection";
import interiorImg from "@/assets/interior.jpg";

const AboutSection = () => (
  <section id="nosotros" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <img
            src={interiorImg}
            alt="Interior de La Gambita Alicantina"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
          />
        </AnimatedSection>
        <AnimatedSection>
          <p className="font-body text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">Sobre nosotros</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tradición marinera en cada plato
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            <strong>La Gambita Alicantina</strong> es un restaurante y cervecería de cocina mediterránea y española ubicado en el corazón de Alicante. Nuestra especialidad es el marisco fresco, las tapas de siempre y los arroces melosos que hacen justicia a la gastronomía alicantina.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Desde nuestros inicios, apostamos por el producto fresco del día, un trato familiar y cercano, y un ambiente donde sentirse como en casa. Familias, grupos de amigos, locales y turistas se dan cita en nuestras mesas para disfrutar de la mejor cocina marinera.
          </p>
          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">4.6</p>
              <p className="font-body text-sm text-muted-foreground">Google Maps</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">4.5</p>
              <p className="font-body text-sm text-muted-foreground">Tripadvisor</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">20-30€</p>
              <p className="font-body text-sm text-muted-foreground">Precio medio</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
