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

        {/* Dynamic Text Layer - Adjusted for Instagram/TikTok Safe Zones */}
        <div className="absolute inset-x-0 bottom-48 px-8 z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene + "text"}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="text-center"
            >
              <h2 className="text-white text-6xl md:text-7xl font-black font-outfit mb-3 leading-[0.9] tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] uppercase">
                {scenes[currentScene].hook}
              </h2>
              <div className="inline-block px-4 py-1 bg-primary/90 backdrop-blur-md rounded-lg shadow-xl">
                <p className="text-white text-lg font-bold font-inter uppercase tracking-widest">
                  {scenes[currentScene].sub}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar - Thicker for mobile visibility */}
        <div className="absolute top-6 inset-x-6 flex gap-2 z-50">
          {scenes.map((_, i) => (
            <div key={i} className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: i === currentScene ? "100%" : i < currentScene ? "100%" : "0%" }}
                transition={{ 
                  duration: i === currentScene ? scenes[currentScene].duration : 0, 
                  ease: "linear" 
                }}
                className="h-full bg-primary shadow-[0_0_15px_rgba(15,118,110,0.8)]"
              />
            </div>
          ))}
        </div>

        {/* CTA Button Overlay - High Visibility */}
        {currentScene === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 inset-x-8 z-50 text-center"
          >
            <a 
              href="https://wa.me/573245134768"
              target="_blank"
              className="w-full py-6 bg-white text-primary rounded-2xl font-black text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-primary/20 hover:scale-105 transition-transform"
            >
              AGENDAR HOY 📲
            </a>
          </motion.div>
        )}

      </div>
    </main>
  );
}
