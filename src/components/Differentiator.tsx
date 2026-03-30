"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
  {
    feature: "Trámites y Orden Médica",
    ecomedica: "Atención Particular Sin Orden Médica",
    others: "Autorizaciones lentas y burocracia EPS",
  },
  {
    feature: "Tiempo de Entrega",
    ecomedica: "Ciencia al servicio de su tiempo, entrega de resultados en 15 minutos.",
    others: "Espera de 3 a 8 días hábiles",
  },
  {
    feature: "Precisión en Imagen",
    ecomedica: "Tecnología de Alta Precisión (Nitidez 4K)",
    others: "Equipos obsoletos con imágenes borrosas",
  },
  {
    feature: "Costo beneficio",
    ecomedica: "Tarifa preferencial desde $90.000 para ecografías de alta resolución.",
    others: "Costos ocultos o copagos excesivos",
  },
  {
    feature: "Filas y Espera",
    ecomedica: "Agendamiento hoy mismo (Sin Filas)",
    others: "Salas colapsadas, esperas de 3 horas",
  },
  {
    feature: "Acceso a Resultados",
    ecomedica: "Acceso a resultados digitales al celular o físicos firmados",
    others: "Solo físico o CD difícil de leer",
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
            ¿Por qué <span className="text-secondary italic">elegirnos?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-inter">
            Nos caracterizamos por brindar resultados de laboratorios, ecografías y rayos X de manera ágil, asegurando oportunidad y calidad en la atención.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-4 px-6">
            <div className="text-sm font-bold text-white/30 uppercase tracking-widest font-inter">
              Criterio
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-primary rounded-full text-sm font-bold font-outfit">
                Ecomedica
              </span>
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-bold text-white/50 font-outfit">
                Sistemas Obsoletos
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-4 md:space-y-0">
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center p-8 md:p-6 rounded-3xl md:rounded-2xl bg-white/5 md:bg-transparent md:hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
              >
                {/* Feature Label */}
                <div className="font-bold text-xl md:text-base text-white/90 font-outfit md:text-white/80">
                  {row.feature}
                </div>

                {/* Ecomedica Column */}
                <div className="flex items-center gap-4 md:justify-center md:gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center md:bg-transparent">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  </div>
                  <div className="flex flex-col md:items-center">
                    <span className="text-[10px] uppercase font-bold text-secondary md:hidden mb-1">Ecomedica</span>
                    <span
                      className="text-sm text-white md:text-white/90 font-inter"
                      dangerouslySetInnerHTML={{ __html: row.ecomedica }}
                    />
                  </div>
                </div>

                {/* Competitors Column */}
                <div className="flex items-center gap-4 md:justify-center md:gap-2 opacity-60 md:opacity-100">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center md:bg-transparent">
                    <X className="w-5 h-5 text-red-400/60 flex-shrink-0" />
                  </div>
                  <div className="flex flex-col md:items-center">
                    <span className="text-[10px] uppercase font-bold text-white/30 md:hidden mb-1">Otros Sistemas</span>
                    <span className="text-sm text-white/60 md:text-white/40 font-inter">
                      {row.others}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
