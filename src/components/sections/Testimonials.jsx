import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

export const Testimonials = () => {
  const { testimonials } = useAppData();

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="resenas" className="relative w-full bg-background py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <Quote className="absolute top-6 right-8 h-10 w-10 text-primary/10" />

              <div>
                {/* Estrellas dinámicas */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < item.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-foreground/80 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-border/50 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                  {item.name.charAt(0)}
                </div>
                <span className="font-bold text-card-foreground">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};