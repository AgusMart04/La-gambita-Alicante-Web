import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroDish from "@/assets/hero-dish.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroDish} alt="Arroz meloso con marisco de La Gambita Alicantina" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/70 via-deep-brown/50 to-deep-brown/80" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-sand uppercase tracking-[0.3em] text-sm mb-4"
      >
        Restaurante en Alicante
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-sand leading-tight mb-6"
      >
        Marisco fresco y arroces melosos
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-body text-sand/80 text-lg md:text-xl mb-10 max-w-xl mx-auto"
      >
        Cocina mediterránea con alma alicantina. Producto del mar a tu mesa desde siempre.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="tel:966231086"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-bold hover:opacity-90 transition-opacity"
        >
          <Phone size={20} />
          Reservar por teléfono
        </a>
        <a
          href="#menu"
          className="border-2 border-sand text-sand px-8 py-4 rounded-md text-lg font-bold hover:bg-sand/10 transition-colors"
        >
          Ver menú
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
