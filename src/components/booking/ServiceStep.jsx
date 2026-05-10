import { motion } from 'framer-motion';

export const ServiceStep = ({ categories, onSelect }) => {
  if (!categories || !Array.isArray(categories)) return null;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <h3 className="mb-6 text-lg font-bold">¿Qué servicio necesitas?</h3>
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {categories.map((cat) => (
          <div key={cat.category} className="space-y-2">
            <h4 className="text-sm font-bold text-primary uppercase tracking-tighter opacity-70 mt-4">
              {cat.category}
            </h4>
            {cat.items?.map((item) => (
              <button
                key={item.name}
                onClick={() => onSelect(item)}
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-background/50 p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-foreground/50">{item.duration}</p>
                </div>
                <span className="font-bold text-primary">{item.price}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};