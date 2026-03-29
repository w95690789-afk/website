"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "573245134768";
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hola Ecomedica, quiero agendar una cita para un examen diagnóstico. ¿Cuál es la disponibilidad más próxima?"
);

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  const quickActions = [
    {
      label: "Agendar Ecografía",
      message: "Hola, quiero agendar una ecografía. ¿Tienen disponibilidad hoy?",
      emoji: "🩺",
    },
    {
      label: "Exámenes de Ingreso",
      message: "Buenos días, necesito información sobre exámenes de ingreso laboral para mi empresa.",
      emoji: "🏢",
    },
    {
      label: "Consultar Precios",
      message: "Hola, me gustaría conocer los precios de sus servicios diagnósticos.",
      emoji: "💰",
    },
  ];

  return (
    <>
      {/* Floating Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-28 right-6 z-[60] w-80 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate/20 border border-slate/10 overflow-hidden">
              {/* Header */}
              <div className="bg-[#25D366] p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Ecomedica"
                      className="w-8 h-8 object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-outfit">Ecomedica</h4>
                    <p className="text-white/80 text-xs font-inter">
                      Respuesta en menos de 2 min • En línea
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-4 space-y-2">
                <p className="text-xs font-bold text-slate/40 uppercase tracking-widest mb-3 font-inter">
                  Seleccione su consulta
                </p>
                {quickActions.map((action, i) => (
                  <a
                    key={i}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(action.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate/5 hover:bg-[#25D366]/10 transition-all group cursor-pointer border border-transparent hover:border-[#25D366]/20"
                  >
                    <span className="text-xl">{action.emoji}</span>
                    <span className="font-semibold text-slate font-inter text-sm group-hover:text-[#25D366] transition-colors">
                      {action.label}
                    </span>
                    <span className="ml-auto text-slate/30 group-hover:text-[#25D366] transition-colors text-sm">
                      →
                    </span>
                  </a>
                ))}
              </div>

              {/* Direct Chat Link */}
              <div className="px-4 pb-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full p-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#20BD5A] transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-outfit">Escribir mensaje libre</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-[60] w-16 h-16 rounded-full shadow-2xl shadow-[#25D366]/30 flex items-center justify-center transition-all active:scale-90 thumb-zone"
        style={{ backgroundColor: isOpen ? "#1E293B" : "#25D366" }}
        aria-label="Abrir WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {showPulse && !isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        )}
      </motion.button>
    </>
  );
}
