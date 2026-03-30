"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background refinement: Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/2 opacity-20 -skew-x-12 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Container: Digital Mastery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-6 bg-primary/5 rounded-[4rem] blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(15,23,42,0.15)] border border-slate/5 ring-1 ring-slate/5 bg-slate/5">
              <Image 
                src="/precision-diagnostica.png" 
                alt="Diagnóstico de Precisión - Ecomedica IPS" 
                width={800}
                height={800}
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[4000ms]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate/30 via-transparent to-transparent opacity-40" />
              
              {/* Data Overlay Accent */}
              <div className="absolute top-6 right-6 px-4 py-2 glass-card rounded-full border border-white/40 flex items-center gap-2 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-[10px] font-bold text-slate uppercase tracking-tighter">HD Diagnostic Mode</span>
              </div>
            </div>
            
            {/* Context Label - Refined & Brought to Front */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 lg:-right-12 glass-card p-6 md:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 z-30 max-w-[280px] backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <p className="text-slate/60 text-[10px] font-black uppercase tracking-[0.2em] font-inter">Certeza Total</p>
              </div>
              <p className="text-slate font-bold font-outfit text-base md:text-lg italic leading-tight">
                "Imágenes nítidas, decisiones médicas seguras."
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content: Urgency & Precision */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-slate/5 rounded-full border border-slate/10">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black tracking-[0.25em] text-slate/40 uppercase font-inter">Propuesta de Valor Dominante</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-outfit text-slate mb-8 leading-[0.95] tracking-tight">
              Su salud no puede <br />
              <span className="text-primary italic">esperar al sistema.</span>
            </h2>

            <p className="text-xl text-slate/70 font-inter leading-relaxed mb-12">
              No somos solo un centro de imágenes; somos la respuesta rápida que necesita. En Ecomedica, eliminamos la incertidumbre con tecnología de <span className="text-slate font-bold">última generación</span> y un equipo experto que prioriza su caso desde el minuto uno.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-10">
              {[
                { title: "Precisión Superior", desc: "Resultados validados por radiólogos y equipos 4K.", icon: "🎯" },
                { title: "Seguridad Digital", desc: "Infraestructura protegida y acceso desde su celular.", icon: "🔐" },
                { title: "Circuito Express", desc: "Ciencia de vanguardia con entrega en 15 minutos.", icon: "⚡" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-6 bg-slate/2 rounded-[2rem] border border-slate/5 hover:bg-slate/5 hover:border-primary/10 transition-all cursor-default"
                >
                  <div className="text-2xl mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate text-xs uppercase tracking-widest mb-1 opacity-40">{item.title}</h4>
                    <p className="text-lg font-outfit font-bold text-slate/90 leading-tight">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="px-10 py-5 bg-slate text-white rounded-2xl font-bold text-lg hover:bg-primary transition-all shadow-xl shadow-slate/10 active:scale-95">
              Solicitar Atención Hoy →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
