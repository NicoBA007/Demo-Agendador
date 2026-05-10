export const generateBookingLink = (selection, business) => {
  const { service, staff, date, time, client } = selection;
  const day = date?.toLocaleDateString('es-BO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const text =
    `Hola *${business.name}* \n\n` +
    `Quiero agendar una cita con los siguientes datos:\n\n` +
    `*Servicio:* ${service?.name}\n` +
    `*Profesional:* ${staff?.name}\n` +
    `*Fecha:* ${day}\n` +
    `*Hora:* ${time} hs\n` +
    `*Precio:* ${service?.price}\n\n` +
    `*Nombre:* ${client.name}\n` +
    `*WhatsApp:* ${client.phone}\n` +
    (client.note ? `*Nota:* ${client.note}\n` : '');

  const number = '59169636225';
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};