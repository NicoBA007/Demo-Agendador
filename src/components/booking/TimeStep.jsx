// src/components/booking/TimeStep.jsx
import { motion } from 'framer-motion';

const timeSlots = {
  mañana: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
  tarde: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'],
  noche: ['18:00', '18:30', '19:00', '19:30']
};

export const TimeStep = ({ onSelect }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      <h3 className="text-lg font-bold">¿A qué hora te esperamos?</h3>
      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {Object.entries(timeSlots).map(([period, slots]) => (
          <div key={period} className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">{period}</h4>
            <div className="grid grid-cols-3 gap-2">
              {slots.map((time) => (
                <button
                  key={time}
                  onClick={() => onSelect(time)}
                  className="rounded-xl border border-border bg-background py-3 text-sm font-medium transition-all hover:border-primary hover:bg-primary/10 active:scale-95"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};