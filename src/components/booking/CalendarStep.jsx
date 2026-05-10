// src/components/booking/CalendarStep.jsx
import { motion } from 'framer-motion';

export const CalendarStep = ({ onSelect }) => {
  // Generar próximos 7 días para el demo
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const formatDate = (d) => d.toLocaleDateString('es-BO', { weekday: 'short', day: 'numeric', month: 'short' });

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <h3 className="mb-6 text-lg font-bold">Selecciona un día</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {days.map((date, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(date)}
            disabled={date.getDay() === 0} // Ejemplo: Domingo cerrado
            className="flex flex-col items-center rounded-2xl border border-border p-4 transition-all hover:border-primary hover:bg-primary/5 disabled:opacity-30 disabled:grayscale"
          >
            <span className="text-xs uppercase text-foreground/50">{formatDate(date).split(' ')[0]}</span>
            <span className="text-xl font-bold">{date.getDate()}</span>
            <span className="text-[10px] uppercase text-primary font-bold">{formatDate(date).split(' ')[2]}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};