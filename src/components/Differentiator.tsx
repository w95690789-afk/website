"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
  {
    feature: "Tecnología de Imagen",
    ecomedica: "GE HealthCare 2025",
    others: "Equipos genéricos o refurbished",
  },
  {
    feature: "Tiempo de Entrega",
    ecomedica: "30 minutos — mismo día",
    others: "48h a 5 días hábiles",
  },
  {
    feature: "Certificación de Resultados",
    ecomedica: "Firmados por especialistas registrados",
    others: "Sin firma o sin registro verificable",
  },
  {
    feature: "Atención al Paciente",
    ecomedica: "Trato personalizado,<br/>cita sin espera",
    others: "Filas, turnos y esperas prolongadas",
  },
  {
    feature: "Seguridad de Datos",
    ecomedica: "Cifrado hospitalario, HSTS",
    others: "Sin política de datos clara",
  },
  {
    feature: "Canal de Agendamiento",
    ecomedica: "WhatsApp con respuesta < 2 min",
    others: "Llamadas sin contestar o correo lento",
  },
];

export default function Differentiator() {
  return (
    <section className="py-32 bg-slate text-white relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/10">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-5xl md:text-7xl font-black font-outfit leading-tight mb-6">
            Ecomédica vs. <br />
            <span className="text-secondary italic">el sistema tradicional.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-inter">
            No es solo tecnología; es un modelo de atención diseñado para
            eliminar la fricción entre usted y su diagnóstico.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-6">
            <div className="text-sm font-bold text-white/30 uppercase tracking-widest font-inter">
              Criterio
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-primary rounded-full text-sm font-bold font-outfit">
                Ecomédica
              </span>
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-bold text-white/50 font-outfit">
                Centros Genéricos
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {comparison.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 items-center p-6 rounded-2xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
            >
              <div className="font-bold text-white/80 font-outfit">
                {row.feature}
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                <span
                  className="text-sm text-white/90 font-inter"
                  dangerouslySetInnerHTML={{ __html: row.ecomedica }}
                />
              </div>
              <div className="flex items-center justify-center gap-2 text-center">
                <X className="w-5 h-5 text-red-400/60 flex-shrink-0" />
                <span className="text-sm text-white/40 font-inter">
                  {row.others}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/40 font-inter text-sm mb-6">
            La diferencia no se explica — se experimenta.
          </p>
          <button className="px-10 py-5 bg-white text-slate rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-white/10 transition-all active:scale-95 font-outfit">
            Experimentar la diferencia →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
