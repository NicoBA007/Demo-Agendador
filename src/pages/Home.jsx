import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { Staff } from '@/components/sections/Staff';
import { Pricing } from '@/components/sections/Pricing';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { Testimonials } from '@/components/sections/Testimonials';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Un pequeño delay para asegurar que el DOM esté listo
        setTimeout(() => {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Benefits />
      <Staff />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};