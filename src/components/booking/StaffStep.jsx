// src/components/booking/StaffStep.jsx
import { motion } from 'framer-motion';

export const StaffStep = ({ staff, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-lg font-bold">¿Con quién quieres tu turno?</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Opción Comodín: Sin Preferencia */}
        <button
          onClick={() => onSelect({ name: "Cualquiera", id: "any" })}
          className="flex items-center gap-4 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 transition-all hover:bg-primary/10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
            ?
          </div>
          <div className="text-left">
            <p className="font-bold">Sin preferencia</p>
            <p className="text-xs text-foreground/50">El primero disponible</p>
          </div>
        </button>

        {/* Mapeo del Staff desde el JSON */}
        {staff.map((member) => (
          <button
            key={member.name}
            onClick={() => onSelect(member)}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-4 transition-all hover:border-primary/50 hover:bg-primary/5"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
            />
            <div className="text-left">
              <p className="font-bold text-foreground">{member.name}</p>
              <p className="text-xs text-primary uppercase font-medium">{member.role}</p>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};