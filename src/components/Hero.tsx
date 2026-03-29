"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-44">
      {/* Background with Image and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-room.png" 
          alt="Clínica Moderna" 
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Tecnología Digital de Vanguardia
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit mb-8 text-slate leading-[1.05] tracking-tight">
              ¿Sin orden médica? <br />
              <span className="text-primary italic">Atención hoy</span> desde <span className="text-gradient">$90.000.  </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate/80 mb-12 max-w-2xl font-inter leading-relaxed">
              Nos ubicamos en Teusaquillo, en el <span className="font-bold text-primary">Centro Médico Ecomédica EU</span>. Realizamos tu ecografía particular con tecnología avanzada de diagnóstico por imágenes 2D, 3D, 4D y HD diseñada para alta resolución en ginecología, obstetricia y cardiología. Entrega de resultados en <span className="text-slate font-semibold italic">15 minutos</span> después de tomar el estudio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/573245134768?text=Hola%20Ecomedica,%20quisiera%20agendar%20una%20cita%20prioritaria."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xl hover:shadow-[0_20px_40px_rgba(15,118,110,0.3)] transition-all active:scale-95 group flex items-center justify-center"
              >
                Asegurar mi turno prioritario
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#servicios"
                className="px-10 py-5 bg-white/50 backdrop-blur-md shadow-xl shadow-slate/5 border border-slate/10 text-slate rounded-2xl font-bold text-xl hover:bg-slate hover:text-white transition-all flex items-center justify-center text-center"
              >
                Ver Especialidades
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex items-center gap-8 border-t border-slate/10 pt-8 max-md:flex-col max-md:items-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate/10">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Paciente" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-sm font-bold text-slate/60 font-inter">
                  +15,000 pacientes confían en nuestra precisión anual
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Call-out */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 right-10 hidden lg:block max-w-xs"
      >
        <div className="glass-card p-6 rounded-3xl border border-white/50 shadow-2xl">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-inner">
            <span className="text-2xl">⚡</span>
          </div>
          <h4 className="font-bold text-slate mb-2">Resultados en 15 min</h4>
          <p className="text-sm text-slate/60 leading-relaxed">
            Circuito Express: reciba sus resultados digitales y físicos antes de salir de la clínica en 15 minutos.
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate/30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explorar</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate/20 to-transparent" />
      </motion.div>
    </section>
  );
}
