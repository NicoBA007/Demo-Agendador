import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

// Mapeo dinámico de iconos para que el JSON pueda decidir qué icono mostrar
const iconMap = {
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
};

export const Benefits = () => {
  const { benefits } = useAppData();

  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="relative w-full bg-background py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit, index) => {
            // Buscamos el icono en el mapa, si el cliente pone un nombre raro en el JSON, usamos Sparkles por defecto
            const IconComponent = iconMap[benefit.icon] || Sparkles;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }} hace que la animación ocurra solo la primera vez que se ve
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md hover:border-primary/50"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconComponent className="h-8 w-8" strokeWidth={1.5} />
                </div>

                <h3 className="mb-3 text-xl font-bold tracking-tight text-card-foreground">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-relaxed text-foreground/70">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};