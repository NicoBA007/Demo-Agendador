import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export const SuccessStep = () => {
  const [searchParams] = useSearchParams();
  const currentDemo = searchParams.get('demo') || 'barberia';

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-6">
      <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary">
        <CheckCircle2 size={48} />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">¡Solicitud Enviada!</h3>
        <p className="text-foreground/60 text-sm">El equipo se pondrá en contacto contigo pronto.</p>
      </div>
      <Link
        to={`/?demo=${currentDemo}`}
        className="inline-block text-primary font-bold text-sm underline underline-offset-8 transition-all hover:opacity-70"
      >
        Volver al inicio
      </Link>
    </motion.div>
  );
};