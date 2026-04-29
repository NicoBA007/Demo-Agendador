import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

export const Hero = () => {
  const { hero } = useAppData();

  if (!hero) return null;

  return (
    <section id="inicio" className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-background">

      {/* 1. Capa de Imagen con Gradiente (Estructura de Fondo) */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.bg_image}
          alt="Imagen principal del negocio"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradiente: Transparente arriba, oscuro abajo para fusionar con la siguiente sección */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* 2. Capa de Contenido Animado */}
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

        <motion.a
          href="#servicios"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-lg shadow-primary/20"
        >
          {hero.button_text || 'Reserva Ahora'}
        </motion.a>
      </div>

      {/* 3. Indicador visual de Scroll para UX (Mejora clave) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/60">
          Descubre más
        </span>
        <ChevronDown className="h-6 w-6 animate-bounce text-foreground/60" />
      </motion.div>
    </section>
  );
};