import AnimatedSection from "./AnimatedSection";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";

const schedule = [
  { day: "Lunes", hours: "Cerrado" },
  { day: "Martes – Jueves", hours: "12:00 – 17:30" },
  { day: "Viernes – Sábado", hours: "12:00 – 17:30 · 20:00 – 23:30" },
  { day: "Domingo", hours: "12:00 – 17:30" },
];

const ContactSection = () => (
  <section id="contacto" className="py-20 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body uppercase tracking-[0.2em] text-sm font-bold mb-3 text-sand">Contacto</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Horarios y ubicación</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Clock size={22} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold mb-3">Horario</h3>
                <div className="space-y-2">
                  {schedule.map((s) => (
                    <div key={s.day} className="flex justify-between font-body text-sm gap-4">
                      <span className="font-medium">{s.day}</span>
                      <span className={s.hours === "Cerrado" ? "text-accent font-bold" : "text-secondary-foreground/80"}>
                        {s.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-secondary-foreground/60 mt-3 italic">
                  Horarios sujetos a cambios, recomendamos reservar por teléfono.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold mb-1">Dirección</h3>
                <p className="font-body text-sm text-secondary-foreground/80">
                  C. Felipe Herrero Arias, 30<br />03013 Alicante, España
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={22} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold mb-1">Teléfono</h3>
                <a href="tel:966231086" className="font-body text-sm hover:text-accent transition-colors">
                  966 23 10 86
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="tel:966231086"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity text-sm"
              >
                <Phone size={16} />
                Llamar ahora
              </a>
              <a
                href="https://www.facebook.com/LaGambitaAlicantina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-secondary-foreground/30 px-6 py-3 rounded-md font-bold hover:bg-secondary-foreground/10 transition-colors text-sm"
              >
                <Facebook size={16} />
                Facebook
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-lg overflow-hidden shadow-xl h-full min-h-[350px]">
            <iframe
              title="Ubicación de La Gambita Alicantina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.482274455363!2d-0.47826842521376683!3d38.36096337817947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62370904daf2af%3A0x59664af25bbff2d2!2sLa%20Gambita%20Alicantina!5e0!3m2!1ses-419!2ses!4v1774547943888!5m2!1ses-419!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactSection;
