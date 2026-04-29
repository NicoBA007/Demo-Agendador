import { motion } from 'framer-motion';
import { useAppData } from '@/hooks/useAppData';

export const Staff = () => {
  const { staff } = useAppData();

  if (!staff || staff.length === 0) return null;

  return (
    <section id="equipo" className="relative w-full bg-background/50 py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Nuestro Equipo
          </motion.h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full" />
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
              <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                <p className="mt-1 font-semibold text-primary uppercase text-xs tracking-wider">
                  {member.role}
                </p>
                {/* Nueva descripción inyectada desde el JSON */}
                <p className="mt-4 text-sm leading-relaxed text-foreground/70 italic">
                  "{member.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};