import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Es necesario reservar?",
    a: "Recomendamos reservar con antelación, especialmente los fines de semana, ya que el restaurante suele estar lleno. Puedes hacerlo llamando al 966 23 10 86.",
  },
  {
    q: "¿Hay menú del día?",
    a: "Sí, ofrecemos menú del día entre semana por 18–20 € (sin bebida). Incluye entrantes compartidos, un principal a elegir entre arroz meloso o gazpacho marinero, y postre casero.",
  },
  {
    q: "¿Se aceptan tarjetas de crédito?",
    a: "Sí, aceptamos todas las tarjetas de crédito y débito principales.",
  },
  {
    q: "¿El restaurante es accesible?",
    a: "Sí, contamos con acceso para personas con movilidad reducida.",
  },
  {
    q: "¿Hay aparcamiento cerca?",
    a: "El restaurante está ubicado en zona urbana con aparcamiento en calles aledañas y parkings públicos cercanos.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-2xl">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">FAQ</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Preguntas frecuentes
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-5">
              <AccordionTrigger className="font-display text-base font-bold text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
