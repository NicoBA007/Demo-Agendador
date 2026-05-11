import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppData } from '@/hooks/useAppData';

export const Navbar = () => {
  const { business } = useAppData();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const [searchParams] = useSearchParams();

  // Mantenemos el nicho dinámico (multi-tenant)
  const currentDemo = searchParams.get('demo') || 'barberia';
  const bookingPath = `/agendar?demo=${currentDemo}`;

  const navLinks = [
    { name: 'Inicio', path: '#inicio' },
    { name: 'Equipo', path: '#equipo' },
    { name: 'Galería', path: '#galeria' },
    { name: 'Reseñas', path: '#resenas' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Ubicación', path: '#ubicacion' },
  ];

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      setTimeout(() => document.addEventListener('click', handleClickOutside), 0);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const handleScroll = (e, path) => {
    e.preventDefault();
    setIsOpen(false);

    const id = path.replace('#', '');

    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/?demo=${currentDemo}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-xl ${isOpen ? 'bg-background/95 shadow-2xl' : 'bg-background/80 border-b border-border/30'
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 relative z-10">

        {/* Logo con retorno a Home preservando el demo */}
        <Link
          to={`/?demo=${currentDemo}`}
          className="text-base font-black uppercase tracking-tighter text-primary shrink-0"
          onClick={() => window.scrollTo(0, 0)}
        >
          {business?.name || 'Agendador'}
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-12 ml-auto">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="group relative py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/40 transition-colors hover:text-foreground"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <Link
            to={bookingPath}
            className="flex h-9 items-center gap-2 rounded-full bg-primary px-5 text-[9px] font-black uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            <Calendar size={12} strokeWidth={3} />
            Reservar Ahora
          </Link>
        </div>

        {/* Botón Móvil */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background"
          >
            <div className="flex flex-col px-8 py-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="group flex items-center justify-between py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 border-b border-border/20 transition-colors hover:text-primary"
                >
                  {link.name}
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}

              <div className="pt-6">
                <Link
                  to={bookingPath}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full h-12 items-center justify-center gap-3 rounded-xl bg-primary text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground shadow-xl shadow-primary/10"
                >
                  <Calendar size={16} strokeWidth={3} />
                  Agendar Turno
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};