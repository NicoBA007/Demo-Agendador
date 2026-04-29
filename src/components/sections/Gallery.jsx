import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

export const Gallery = () => {
  const { gallery } = useAppData();
  const [selectedImage, setSelectedImage] = useState(null);

  if (!gallery || gallery.length === 0) return null;

  const isThreeImages = gallery.length === 3;

  // Si son 3 usamos un Grid de 4 columnas. Si son 6 usamos el Dense Grid.
  const containerClass = isThreeImages
    ? "grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
    : "grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense auto-rows-[200px]";

  const getItemClasses = (index) => {
    if (isThreeImages) {
      // Regla para 3 fotos (Tu diseño 75% / 25%):
      // Foto 1: Ocupa 3 de 4 columnas en PC, y 2 filas de alto. (En móvil ocupa 2 columnas).
      if (index === 0) return "col-span-2 md:col-span-3 row-span-2";
      // Fotos 2 y 3: Ocupan 1 columna y 1 fila cada una.
      return "col-span-1 md:col-span-1 row-span-1";
    }

    // Regla para 6 fotos (Tu dibujo inicial)
    const patternIndex = index % 6;
    if (patternIndex === 0 || patternIndex === 3) {
      return "col-span-2 row-span-2"; // Grandes
    }
    return "col-span-1 row-span-1"; // Pequeñas
  };

  return (
    <section id="galeria" className="relative w-full bg-background/50 py-20 px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Nuestro Trabajo
          </motion.h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className={containerClass}>
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(img)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-muted ${getItemClasses(index)}`}
            >
              <img
                src={img}
                alt={`Trabajo ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-300 group-hover:bg-background/40">
                <ZoomIn className="h-10 w-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors">
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Ampliada"
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};