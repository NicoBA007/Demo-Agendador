import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

const iconMap = { Award, ShieldCheck, Clock, Sparkles };

export const Benefits = () => {
  const { benefits, business } = useAppData();

  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="relative w-full bg-background py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        
        {/* Título de Sección Agregado */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            ¿Por qué elegir {business?.name}?
          </motion.h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || Sparkles;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
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