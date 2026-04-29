import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

export const Pricing = () => {
  // Ahora también traemos 'business' para armar el link de WhatsApp
  const { services, business } = useAppData();
  const [openCategory, setOpenCategory] = useState(0);

  if (!services || services.length === 0 || !business) return null;

  // Generamos el link directo al chat
  const whatsappLink = `https://wa.me/${business.whatsapp_number}?text=${encodeURIComponent(business.whatsapp_message)}`;

  return (
    <section id="servicios" className="relative w-full bg-background py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">

        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Nuestros Servicios
          </motion.h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-foreground/70"
          >
            Calidad premium y atención al detalle en cada servicio.
          </motion.p>
        </div>

        <div className="space-y-4">
          {services.map((category, index) => {
            const isOpen = openCategory === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <button
                  onClick={() => setOpenCategory(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl font-bold text-card-foreground">{category.category}</h3>
                  <ChevronDown
                    className={`h-6 w-6 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ul className="px-6 pb-6">
                        {category.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-between border-b border-border/50 py-4 last:border-0 last:pb-0"
                          >
                            <div className="pr-4 max-w-[75%]">
                              <h4 className="font-semibold text-foreground">{item.name}</h4>
                              {item.description && (
                                <p className="mt-1 text-sm text-foreground/70 leading-snug">
                                  {item.description}
                                </p>
                              )}
                              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-primary/80">
                                ⏱ {item.duration}
                              </p>
                            </div>
                            <span className="whitespace-nowrap text-lg font-bold text-primary">
                              {item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- NUEVO BOTÓN DE CALL TO ACTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-transparent border-2 border-primary px-8 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground shadow-sm"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Consultar Disponibilidad
          </a>
        </motion.div>

      </div>
    </section>
  );
};