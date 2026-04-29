import { useAppData } from '@/hooks/useAppData';

export const Footer = () => {
  const { business } = useAppData();

  if (!business) return null;

  // Obtenemos el año actual automáticamente para el Copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-border bg-card py-12 px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

        {/* Columna 1: Marca y descripción */}
        <div className="flex flex-col space-y-4">
          <span className="text-xl font-bold tracking-tight text-primary">
            {business.name}
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
            Transformando tu imagen con los mejores profesionales y atención de primera calidad.
          </p>
        </div>

        {/* Columna 2: Contacto Rápido */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-foreground">Contacto</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex flex-col">
              <span className="font-semibold text-foreground/90">Dirección:</span>
              {business.location}
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-foreground/90">Teléfono:</span>
              {business.phone || business.whatsapp_number}
            </li>
          </ul>
        </div>

        {/* Columna 3: Enlaces Legales (Importante para negocios serios) */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <a href="#" className="transition-colors hover:text-primary">Términos y Condiciones</a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">Política de Privacidad</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior de Copyright */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-border/50 pt-8 text-center text-sm text-foreground/50">
        &copy; {currentYear} {business.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
};