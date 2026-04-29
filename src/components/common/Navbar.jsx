import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppData } from '@/hooks/useAppData';

export const Navbar = () => {
  const { business } = useAppData();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '#inicio' },
    { name: 'Equipo', path: '#equipo' },
    { name: 'Galería', path: '#galeria' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Ubicación', path: '#ubicacion' },
  ];

  // 🧠 Solución Nativa de Sincronización
  const handleScroll = (e, path) => {
    e.preventDefault();

    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // 1. Calculamos la posición exacta antes de que React cierre el menú
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;

      // 2. Cerramos el menú
      setIsOpen(false);

      // 3. requestAnimationFrame alinea la orden de scroll con el ciclo de pintado del celular.
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetTop
          // OMITIMOS behavior: 'smooth' a propósito.
          // Tu index.css ya se encarga de la suavidad. Mezclar ambos causa el bloqueo en móviles.
        });
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-lg supports-backdrop-filter:bg-background/60 ${
        isOpen ? 'bg-background/95 border-transparent shadow-2xl' : 'bg-background/95 border-b border-border'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 relative z-10">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-primary" onClick={() => window.scrollTo(0, 0)}>
          {business?.name || 'Demo Logo'}
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleScroll(e, link.path)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden text-foreground transition-transform active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Menú Desplegable Móvil Animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="group flex w-full items-center justify-between border-b border-border/50 py-4 text-lg font-medium tracking-wide text-foreground/80 transition-all hover:text-primary last:border-0"
                >
                  {link.name}
                  <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};