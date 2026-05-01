import { useEffect, useState } from 'react';
// IMPORTAMOS TUS 3 ARCHIVOS CON SUS NOMBRES EXACTOS
import barberConfig from '@/data/barber-config.json';
import spaConfig from '@/data/spa-config.json';
import dentalConfig from '@/data/dental-config.json';
import salonConfig from '@/data/salon-config.json';

export const useAppData = () => {
  const [data, setData] = useState(() => {
    // Leemos la URL
    const params = new URLSearchParams(window.location.search);
    const demoType = params.get('demo');

    // Devolvemos el JSON correspondiente
    if (demoType === 'spa') return spaConfig;
    if (demoType === 'dentista') return dentalConfig;
    if (demoType === 'barberia') return barberConfig;
    if (demoType === 'salon') return salonConfig;

    // Si no hay parámetro, o si escriben mal, por defecto mostramos la barbería
    return barberConfig;
  });

  useEffect(() => {
    const root = document.documentElement;
    const { variables, mode } = data.theme;
    const { seo } = data;

    // Aplicar variables CSS
    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Manejar modo oscuro/claro
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Inyección Dinámica de SEO
    if (seo) {
      document.title = seo.title;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', seo.description);

      const linkIcon = document.querySelector('link[rel="icon"]');
      if (linkIcon && seo.favicon_emoji) {
        linkIcon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${seo.favicon_emoji}</text></svg>`);
      }
    }
  }, [data]);

  return data;
};