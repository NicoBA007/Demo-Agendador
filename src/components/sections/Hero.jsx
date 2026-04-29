import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

export const Hero = () => {
  const { hero, business } = useAppData();

  if (!hero || !business) return null;

  // Generamos el link de WhatsApp dinámico
  const whatsappLink = `https://wa.me/${business.whatsapp_number}?text=${encodeURIComponent(business.whatsapp_message)}`;

  return (
    <section id="inicio" className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-background">
      
      {/* Fondo con Gradiente */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.bg_image}
          alt="Principal"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg font-medium text-foreground/80 sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        {/* Bloque de Conversión */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center space-y-4"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 text-lg font-bold text-primary-foreground transition-all hover:scale-105 shadow-xl shadow-primary/30"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {hero.button_text}
          </a>
          <p className="text-sm font-medium text-foreground/60">
            Escríbenos por WhatsApp para agendar tu cita
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/60">Descubre más</span>
        <ChevronDown className="h-6 w-6 animate-bounce text-foreground/60" />
      </motion.div>
    </section>
  );
};