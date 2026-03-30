"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const scenes = [
  {
    id: 1,
    image: "/reels/laboral1.png",
    hook: "CONSEGUISTE EL TRABAJO",
    sub: "Nosotros lo hacemos oficial hoy misma.",
    duration: 7,
  },
  {
    id: 2,
    image: "/reels/laboral2.png",
    hook: "EXÁMENES DE INGRESO",
    sub: "Sin filas. Sin esperas. Sin estrés.",
    duration: 6,
  },
  {
    id: 3,
    image: "/reels/laboral3.png",
    hook: "LISTO PARA FIRMAR",
    sub: "Resultados oficiales en 15 minutos.",
    duration: 9,
  },
];

export default function LaboralReel() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, scenes[currentScene].duration * 1000);
    return () => clearTimeout(timer);
  }, [currentScene]);

  return (
    <main className="fixed inset-0 bg-black flex items-center justify-center z-[200]">
      {/* 9:16 Aspect Ratio Container */}
      <div className="relative aspect-[9/16] h-screen max-h-[100vh] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,1)]">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, filter: "blur(20px)" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="absolute inset-0"
          >
            <Image
              src={scenes[currentScene].image}
              alt="Ecomedica Laboral Reel"
              fill
              className="object-cover"
              priority
            />
            
            {/* Soft Warm Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Branding Layer - Premium Glass */}
        <div className="absolute top-12 left-8 flex items-center gap-3 z-30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <Image src="/reels/logo.png" alt="Logo" width={30} height={30} className="w-6 h-6 object-contain" />
          <span className="text-white font-black tracking-widest text-[9px] uppercase font-outfit">Ecomedica IPS</span>
        </div>

        {/* Dynamic Text - Authority Style 2024 */}
        <div className="absolute inset-x-0 bottom-48 px-8 z-40 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene + "text"}
              initial={{ opacity: 0, scale: 1.2, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.6, type: "spring", damping: 15 }}
            >
              <h2 className="text-white text-6xl md:text-7xl font-black font-outfit mb-4 leading-[0.85] tracking-tighter drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] uppercase italic">
                {scenes[currentScene].hook}
              </h2>
              <div className="inline-block px-5 py-2 bg-primary/95 shadow-2xl rounded-xl">
                 <p className="text-white text-sm font-bold font-inter tracking-[0.2em] uppercase">
                    {scenes[currentScene].sub}
                 </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar - Minimalist */}
        <div className="absolute top-4 inset-x-6 flex gap-1 z-50">
          {scenes.map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: i === currentScene ? "100%" : i < currentScene ? "100%" : "0%" }}
                transition={{ 
                  duration: i === currentScene ? scenes[currentScene].duration : 0, 
                  ease: "linear" 
                }}
                className="h-full bg-white shadow-[0_0_10px_white]"
              />
            </div>
          ))}
        </div>

        {/* CTA - Victory Button */}
        {currentScene === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 inset-x-8 z-50"
          >
            <a 
              href="https://wa.me/573245134768?text=Hola%20Ecomedica,%20necesito%20mi%20examen%20de%20ingreso%20hoy%20mismo."
              target="_blank"
              className="block w-full py-6 bg-white text-slate rounded-2xl font-black text-2xl shadow-2xl transition-all active:scale-95"
            >
              TU ÉXITO HOY ✨
            </a>
          </motion.div>
        )}

      </div>
    </main>
  );
}
