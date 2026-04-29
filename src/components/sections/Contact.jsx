import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

export const Contact = () => {
  const { business } = useAppData();

  if (!business) return null;

  return (
    <section id="ubicacion" className="relative w-full bg-background py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Columna Izquierda: Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                ¿Dónde encontrarnos?
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Visítanos en nuestra sucursal central y vive la experiencia {business.name}.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Dirección</h4>
                  <p className="text-foreground/70">{business.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Horario</h4>
                  <p className="text-foreground/70">{business.schedule}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-border shadow-inner bg-muted"
          >
            <iframe
              src={business.map_url}
              className="h-full w-full border-0 grayscale-[0.2] contrast-[1.1] invert-0 dark:invert-[0.9] dark:hue-rotate-180"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del negocio"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};