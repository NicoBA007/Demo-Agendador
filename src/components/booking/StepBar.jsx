export const StepBar = ({ current = 1, total = 5 }) => {
  const progress = total > 0 ? (current / total) * 100 : 0;
  const percentage = Math.round(progress) || 0;

  return (
    <div className="w-full mb-12">
      <div className="flex items-end justify-between mb-5">
        <div className="space-y-1">
          <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-primary/70">Progreso de reserva</span>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-black text-foreground tracking-tighter">0{current}</h2>
            <span className="text-lg font-bold text-foreground/20">/ 0{total}</span>
          </div>
        </div>
        <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-lg">
          <span className="text-sm font-black text-primary tabular-nums">{percentage}%</span>
        </div>
      </div>
      <div className="relative h-1.5 w-full bg-border/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};