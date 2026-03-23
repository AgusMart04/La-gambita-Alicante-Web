import AnimatedSection from "./AnimatedSection";
import heroImg from "@/assets/hero-dish.jpg";
import tapasImg from "@/assets/tapas.jpg";
import seafoodImg from "@/assets/seafood.jpg";
import arrozImg from "@/assets/arroz-meloso.jpg";
import postresImg from "@/assets/postres.jpg";
import interiorImg from "@/assets/interior.jpg";

const images = [
  { src: heroImg, alt: "Arroz meloso con marisco" },
  { src: interiorImg, alt: "Interior del restaurante" },
  { src: seafoodImg, alt: "Mariscada fresca" },
  { src: tapasImg, alt: "Tapas variadas" },
  { src: arrozImg, alt: "Arroz con pescado y gambas" },
  { src: postresImg, alt: "Postres caseros" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">Galería</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Un vistazo a nuestra mesa
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <AnimatedSection key={i}>
            <div className="overflow-hidden rounded-lg group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
