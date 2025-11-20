import React from 'react';
import { Youtube, Briefcase, Heart, ShoppingBag } from 'lucide-react';
import { ServiceDetails, ServiceId } from './types';

// --- IMAGES ---
// ⚠️ IMPORTANTE: Reemplaza esta URL con el link directo de la imagen que acabas de subir.
// Como soy una IA de texto, no puedo alojar el archivo, pero he preparado todo para que funcione
// en cuanto pegues el link aquí abajo.
export const BRAND_IMAGE_URL = "https://i.postimg.cc/nhzGXWzT/Whisk-b7198ad58bcd4589f634e539038d25e3dr.png"; 

export const BACKGROUND_IMAGE_URL = BRAND_IMAGE_URL; 
export const PROFILE_IMAGE_URL = "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg";

// 3. MUSICA DE FONDO (Loop)
// REEMPLAZA EL LINK DE ABAJO POR EL DE TU CANCION MP3
export const BACKGROUND_MUSIC_URL = "https://soundcloud.com/bandita-del-cerro/la-bandita-del-cerro"; 

// --- TEXTS ---
export const BRAND_NAME = "La Bandita";
export const SLOGAN_TEXT = "Todos Somos La bandita! 🦧🦫🦊🦊🐇";
export const WELCOME_TEXT = ""; // Content removed
export const FOOTER_TEXT = "© 2024 La Bandita. Todos los derechos reservados.";

// --- SERVICES DATA ---
export const SERVICES_DATA: Record<ServiceId, ServiceDetails> = {
  saludos: {
    title: "SALUDOS PERSONALIZADOS",
    subtitle: "VIDEO DEDICADO",
    description: `¡Saluditos! 👋✨

Los saludos que subimos al feed son generales: los creamos pensando en que puedan enviarse a la mayor cantidad de personas posible, y así los seguiremos publicando siempre.

Esta opción es ideal si quieres algo rápido y para todos. Si prefieres algo diferente o totalmente personalizado, también lo hacemos —siempre con el toque único de La Bandita. 💌🎉

¿Te gustaría uno personalizado para alguien en especial? 🎁😊`,
    buttons: [
      { text: "Saludo: 8s - $2.290", url: "https://mpago.la/1q16svx" },
      { text: "Saludo: 16segundos - $3.290", url: "https://mpago.la/2g2F9AV" }
    ],
    bottomText: "ENVIAME EL MENSAJE Y COMPROBANTE AL DM :)"
  },
  colabs: {
    title: "COLABS / NEGOCIOS",
    subtitle: "TRABAJEMOS JUNTOS",
    description: `¿Tienes un negocio, empresa o emprendimiento y te gustaría crear algo diferente, dinámico y entretenido? 🚀
Ofrezco servicios de:
• Creación de contenido 
• Embajadora de marca a largo plazo 
• Promoción de productos y marcas en historias y posts 
Cuéntame tu idea y creemos algo increíble juntos. ¡Hagamos que tu marca destaque! 🌟
Contáctanos por DM o E-Mail.`,
    buttons: [
      { text: "Conversemos aquí", url: "https://mail.google.com/" }
    ]
  },
  productos: {
    title: "MIS PRODUCTOS",
    subtitle: "TIENDA OFICIAL",
    description: `🧦🔥 ¡Llegaron los calcetines oficiales de La Bandita!
Diseño exclusivo + SALUDO ESPECIAL personalizado 👀
No son solo calcetines… son tu entrada a la bandita.
🚚 Envíos a todo Chile
📦 Edición limitada. ¿Te unes con estilo? 😎`,
    // Aquí están los 3 cuadros para imagenes.
    gallery: [
      "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg", // La imagen que enviaste
      "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg",
      "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg"
    ],
    priceTag: "Valor: $10.990 + Envío",
    buttons: [
      { text: "Enviame un Mensaje Directo", url: "https://www.instagram.com/direct" }
    ]
  }
};

// --- ICONS MAPPING ---
export const ICONS = {
  Youtube: <Youtube className="h-6 w-6" />,
  Colabs: <Briefcase className="h-6 w-6" />,
  Saludos: <Heart className="h-6 w-6" />,
  Productos: <ShoppingBag className="h-6 w-6" />,
};
