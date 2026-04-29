import { useAppData } from '@/hooks/useAppData';

export const Footer = () => {
  const { business } = useAppData();

  if (!business) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-border bg-card py-12 px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        
        {/* Columna 1: Marca y Redes */}
        <div className="flex flex-col space-y-6">
          <div>
            <span className="text-xl font-bold tracking-tight text-primary">
              {business.name}
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/70">
              Transformando tu imagen con los mejores profesionales y atención de primera calidad.
            </p>
          </div>
          
          {/* Fila de Redes Sociales (SVGs Nativos) */}
          <div className="flex gap-4">
            {business.socials?.instagram && (
              <a href={business.socials.instagram} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            )}
            {business.socials?.facebook && (
              <a href={business.socials.facebook} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            )}
            {business.socials?.tiktok && (
              <a href={business.socials.tiktok} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v7a7 7 0 1 1-7-7v3a4 4 0 0 0 4 4z"></path>
                </svg>
              </a>
            )}
          </div>
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

        {/* Columna 3: Legal */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border/50 pt-8 text-center text-sm text-foreground/50">
        &copy; {currentYear} {business.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
};