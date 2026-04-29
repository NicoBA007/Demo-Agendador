import { useEffect, useState } from 'react';
import configData from '@/data/config.json';

export const useAppData = () => {
  const [data, setData] = useState(configData);

  useEffect(() => {
    // Inyectar las variables de color del JSON al :root del documento
    const root = document.documentElement;
    const { variables, mode } = data.theme;

    // Aplicar las variables CSS
    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Manejar el modo oscuro/claro para Tailwind
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Limpieza de estilos al desmontar (opcional, pero buena práctica)
    return () => {
      Object.keys(variables).forEach((key) => {
        root.style.removeProperty(key);
      });
      root.classList.remove('dark');
    };
  }, [data.theme]);

  return data;
};