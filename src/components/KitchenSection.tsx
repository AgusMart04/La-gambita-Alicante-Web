import AnimatedSection from "./AnimatedSection";
import arrozImg from "@/assets/arroz-meloso.jpg";
import seafoodImg from "@/assets/seafood.jpg";
import tapasImg from "@/assets/tapas.jpg";
import postresImg from "@/assets/postres.jpg";

const categories = [
  {
    title: "Arroces y platos de cuchara",
    desc: "Arroz meloso de mero y gambas, gazpachos marineros y calderos que son el alma de nuestra cocina.",
    img: arrozImg,
  },
  {
    title: "Marisco y pescado",
    desc: "Del mar a tu mesa: gambas, cigalas, frituras y pescados frescos del día preparados a la plancha o al horno.",
    img: seafoodImg,
  },
  {
    title: "Tapas y raciones",
    desc: "Las tapas de toda la vida: ensaladillas, croquetas, boquerones, patatas bravas y mucho más para compartir.",
    img: tapasImg,
  },
  {
    title: "Postres caseros",
    desc: "Flan casero, tarta de queso, crema catalana y dulces tradicionales elaborados artesanalmente.",
    img: postresImg,
  },
];

const KitchenSection = () => (
  <section id="cocina" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">Nuestra cocina</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Sabor mediterráneo auténtico
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title}>
            <div className="group overflow-hidden rounded-lg bg-background shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden h-52">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default KitchenSection;
