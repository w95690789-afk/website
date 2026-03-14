"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-white/80 backdrop-blur-lg border-b border-slate/10" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Ecomédica Logo" 
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-10 font-inter font-semibold text-slate/80 text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#" className="hover:text-primary transition-colors">Especialistas</a>
          <button className="px-8 py-3 bg-slate text-white rounded-xl font-bold hover:bg-primary transition-all active:scale-95 shadow-xl shadow-slate/5">
            Agendar Ahora
          </button>
        </div>

        <button className="md:hidden text-slate" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6 font-inter font-medium text-slate">
              <a href="#" onClick={() => setIsOpen(false)}>Inicio</a>
              <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
              <a href="#" onClick={() => setIsOpen(false)}>Especialistas</a>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold">
                Agendar por WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
