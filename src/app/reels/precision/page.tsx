"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const scenes = [
  {
    id: 1,
    image: "/reels/scene1.png",
    hook: "¿CANSADO DE ESPERAR?",
    sub: "Tu salud no puede aguardar 8 días.",
    duration: 6,
  },
  {
    id: 2,
    image: "/reels/scene2.png",
    hook: "PRECISIÓN 4K HOY",
    sub: "Tecnología digital de alta gama.",
    duration: 8,
  },
  {
    id: 3,
    image: "/reels/scene3.png",
    hook: "RESULTADOS EN 15 MIN",
    sub: "Agenda ya en Ecomedica Teusaquillo.",
    duration: 10,
  },
];

export default function ReelPage() {
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
      <div className="relative aspect-[9/16] h-screen max-h-[100vh] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="absolute inset-0"
          >
            <Image
              src={scenes[currentScene].image}
              alt="Ecomedica Reel Scene"
              fill
              className="object-cover"
              priority
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Branding Layer */}
        <div className="absolute top-10 left-8 flex items-center gap-3 z-30">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain drop-shadow-xl" />
          <span className="text-white font-bold tracking-widest text-[10px] uppercase font-outfit">Ecomedica IPS</span>
        </div>

        {/* Dynamic Text Layer */}
        <div className="absolute inset-x-0 bottom-32 px-10 z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene + "text"}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <h2 className="text-white text-5xl font-black font-outfit mb-4 leading-tight tracking-tighter drop-shadow-2xl">
                {scenes[currentScene].hook}
              </h2>
              <p className="text-primary-light text-xl font-medium font-inter drop-shadow-lg">
                {scenes[currentScene].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-4 inset-x-4 flex gap-1 z-50">
          {scenes.map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: i === currentScene ? "100%" : i < currentScene ? "100%" : "0%" }}
                transition={{ 
                  duration: i === currentScene ? scenes[currentScene].duration : 0, 
                  ease: "linear" 
                }}
                className="h-full bg-primary"
              />
            </div>
          ))}
        </div>

        {/* CTA Button Overlay */}
        {currentScene === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-12 inset-x-8 z-50 text-center"
          >
            <a 
              href="https://wa.me/573245134768"
              target="_blank"
              className="inline-block px-10 py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-2xl animate-pulse"
            >
              AGENDAR HOY 📲
            </a>
          </motion.div>
        )}

      </div>
    </main>
  );
}
