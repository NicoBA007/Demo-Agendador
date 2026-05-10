import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Clock, Info } from 'lucide-react';

export const SummaryStep = ({ selection, onConfirm }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });

  // Validación: Solo números para el campo de teléfono
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Elimina cualquier caracter que no sea número
    setFormData({ ...formData, phone: value });
  };

  // Verificación básica para habilitar el botón
  const isFormValid = formData.name.trim().length > 2 && formData.phone.length >= 8;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Tarjeta Premium de Detalles */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card/50">
        <div className="border-b border-border/50 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Servicio Seleccionado</h4>
              <h3 className="text-xl font-black tracking-tighter text-foreground uppercase">{selection.service?.name}</h3>
              <p className="text-sm leading-relaxed text-foreground/60">{selection.service?.description}</p>
            </div>
            <span className="text-2xl font-black text-primary tracking-tighter shrink-0">{selection.service?.price}</span>
          </div>

          <div className="mt-4 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">
            <span className="flex items-center gap-1.5"><Clock size={12} className="text-primary" /> {selection.service?.duration}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5"><Info size={12} className="text-primary" /> Confirmación inmediata</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
          <div className="flex items-center gap-4 p-6">
            <img
              src={selection.staff?.image}
              alt={selection.staff?.name}
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-primary/20"
            />
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-foreground/30">Profesional</p>
              <p className="font-bold text-foreground">{selection.staff?.name}</p>
              <p className="text-[10px] font-medium text-primary uppercase">{selection.staff?.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/50 text-primary">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-foreground/30">Cita Programada</p>
              <p className="font-bold text-foreground capitalize">
                {selection.date?.toLocaleDateString('es-BO', { weekday: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm font-black text-primary uppercase tracking-tighter">{selection.time} HS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario Estilizado con Validación */}
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nombre y Apellidos"
            value={formData.name}
            className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm font-medium outline-none transition-all focus:border-primary/50 focus:bg-background"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Número de WhatsApp"
            value={formData.phone}
            className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm font-medium outline-none transition-all focus:border-primary/50 focus:bg-background"
            onChange={handlePhoneChange}
          />
        </div>
        <textarea
          placeholder="Notas o requerimientos adicionales"
          value={formData.note}
          className="h-24 w-full resize-none rounded-2xl border border-border bg-background/50 p-4 text-sm font-medium outline-none transition-all focus:border-primary/50 focus:bg-background"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
      </div>

      {/* Botón de Acción con estado visual de validación */}
      <button
        onClick={() => isFormValid && onConfirm(formData)}
        disabled={!isFormValid}
        className={`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full py-5 text-xs font-black uppercase tracking-[0.2em] transition-all
          ${isFormValid 
            ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 cursor-pointer' 
            : 'bg-neutral-800 text-neutral-500 cursor-not-allowed opacity-50'
          }`}
      >
        <MessageCircle size={18} />
        Finalizar y Reservar
        {isFormValid && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}
      </button>
    </motion.div>
  );
};