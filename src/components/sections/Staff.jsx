import { motion } from 'framer-motion';
import { useAppData } from '@/hooks/useAppData';

export const Staff = () => {
  const { staff } = useAppData();

  // Si no hay datos de equipo en el JSON, no rompemos la página, simplemente no renderizamos
  if (!staff || staff.length === 0) return null;

  return (
    <section id="equipo" className="relative w-full bg-background/50 py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Cabecera de la sección */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Nuestro Equipo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-foreground/70"
          >
            Profesionales apasionados por su arte, listos para atenderte.
          </motion.p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              {/* Contenedor de la Imagen con Aspect Ratio vertical (3:4) para retratos */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Información del Profesional */}
              <div className="p-6 text-center relative bg-card z-10">
                <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                <p className="mt-1 font-semibold text-primary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};