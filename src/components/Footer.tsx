"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trackEvent } from "@/lib/gtag";

export default function Footer() {
  const WHATSAPP_NUMBER = "573115212600";
  
  return (
    <footer className="py-20 border-t border-slate/5 bg-white/80 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <Image 
              src="/logo.png" 
              alt="Ecomedica" 
              width={160} 
              height={48} 
              className="h-12 w-auto" 
            />
            <p className="text-slate/60 font-inter leading-relaxed max-w-xs">
              Sede certificada por la Secretaría de Salud de Bogotá. Expertos en diagnóstico por imagen y salud ocupacional con tecnología de última generación.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate/5 flex items-center justify-center text-slate/40 hover:text-primary hover:bg-primary/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate/5 flex items-center justify-center text-slate/40 hover:text-primary hover:bg-primary/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-outfit font-bold text-slate mb-6 uppercase tracking-wider text-sm">Horarios</h4>
            <ul className="text-slate/60 font-inter space-y-3">
              <li className="flex justify-between"><span>Lunes - Sábado:</span> <span className="font-bold text-slate">7:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between text-slate/30"><span>Domingos y Festivos:</span> <span>Cerrado</span></li>
            </ul>
            <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1 font-inter">Inversión en Salud</p>
              <p className="text-2xl font-black text-slate font-outfit">Desde $90.000 <span className="text-sm font-normal text-slate/40">COP</span></p>
              {/* Force refresh: 1711751850 */}
            </div>
          </div>
          <div>
            <h4 className="font-outfit font-bold text-slate mb-6 uppercase tracking-wider text-sm">Ubicación Estratégica</h4>
            <p className="text-slate/60 font-inter leading-relaxed">
              Calle 34 # 14 - 33<br />
              Teusaquillo, Bogotá D.C.<br />
              <span className="text-xs text-slate/40">Sede Principal — Teusaquillo</span>
            </p>
            <a 
              href="https://www.google.com/maps/place/Ecomedica+Centro+M%C3%A9dico+IPS+-+Ecograf%C3%ADas+y+Rayos+X+Teusaquillo/@4.6228039,-74.0698246,17z"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent({
                  action: "directions_click",
                  category: "maps",
                  label: "footer_google_maps",
                });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline mt-2"
            >
              📍 Ver en Google Maps / Cómo llegar →
            </a>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent({
                      action: "generate_lead",
                      category: "whatsapp",
                      label: "footer_whatsapp_icon",
                      lead_type: "footer",
                    });
                  }}
                  className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5"
                  aria-label="WhatsApp Ecomedica"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.12.554 4.189 1.604 6.04L0 24l6.104-1.601a11.803 11.803 0 005.939 1.604h.005c6.634 0 12.032-5.391 12.035-12.029a11.789 11.789 0 00-3.526-8.508z"/></svg>
                </a>
                <div>
                  <p className="text-xs text-slate/40 font-inter">WhatsApp / Móvil</p>
                  <a 
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    onClick={() => {
                      trackEvent({
                        action: "click_to_call",
                        category: "phone",
                        label: "footer_movil",
                        phone_number: `+${WHATSAPP_NUMBER}`,
                      });
                    }}
                    className="text-slate font-bold font-outfit text-xl hover:text-primary transition-colors"
                  >
                    +57 311 521 2600
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate/5 flex items-center justify-center text-slate/40">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-slate/40 font-inter">Línea Fija</p>
                  <a 
                    href="tel:6013202045"
                    onClick={() => {
                      trackEvent({
                        action: "click_to_call",
                        category: "phone",
                        label: "footer_fijo",
                        phone_number: "6013202045",
                      });
                    }}
                    className="text-slate font-bold font-outfit text-xl hover:text-primary transition-colors"
                  >
                    601 320 2045
                  </a>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-primary font-bold text-sm">
                <span>🅿️</span>
                <span>Parqueadero gratuito para clientes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="w-full h-80 rounded-[2rem] overflow-hidden border border-slate/5 mb-20 shadow-inner bg-slate/5 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            title="Ecomedica Centro Médico IPS en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.757134304603!2d-74.07239952412882!3d4.622803895351608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9986bfb0d741%3A0x5c525c70d881dd71!2sEcomedica%20Centro%20M%C3%A9dico%20IPS%20-%20Ecograf%C3%ADas%20y%20Rayos%20X%20Teusaquillo!5e0!3m2!1ses-419!2sco!4v1707920000000!5m2!1ses-419!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-70 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate/40 font-inter text-xs pt-12 border-t border-slate/5 gap-4">
          <p>© 2026 Ecomedica Centro Medico · NIT 000.000.000-0 · Habilitada por la Secretaría de Salud de Bogotá.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Tratamiento de Datos</a>
            <a href="#" className="hover:text-primary transition-colors">Habeas Data</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
