"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Beaker, Zap, Clock, Smartphone } from "lucide-react";

const services = [
  {
    title: "Ecografías de Alta Claridad",
    desc: "Obstétricas, Doppler y especializadas con transductores de última generación. Visualización profunda para diagnósticos irrebatibles.",
    icon: <Activity />,
    color: "bg-teal-50 text-teal-600",
    size: "col-span-1 lg:col-span-2",
  },
  {
    title: "Laboratorio de Ingreso",
    desc: "Circuitos ágiles para empresas y particulares. Cumpla con sus requisitos legales sin perder el día.",
    icon: <ShieldCheck />,
    color: "bg-blue-50 text-blue-600",
    size: "col-span-1",
  },
  {
    title: "Rayos X Digitales GE",
    desc: "Nitidez absoluta con mínima exposición. Resultados firmados por especialistas en tiempo récord.",
    icon: <Zap />,
    color: "bg-amber-50 text-amber-600",
    size: "col-span-1",
  },
  {
    title: "Resultados en 30 min",
    desc: "Su tiempo vale. Entregamos informes digitales y físicos antes de que termine su café.",
    icon: <Clock />,
    color: "bg-indigo-50 text-indigo-600",
    size: "col-span-1 lg:col-span-2",
  },
];

export default function Services() {
  return (
    <section className="py-32" id="servicios">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black font-outfit text-slate mb-6 leading-tight">
              Especialidades con <br />
              <span className="text-primary italic">precisión GE.</span>
            </h2>
            <p className="text-xl text-slate/60 font-inter max-w-lg">
              Despliegue tecnológico y rigor médico al servicio de su diagnóstico. Sin esperas, sin dudas.
            </p>
          </div>
          <button className="px-8 py-4 bg-slate text-white rounded-xl font-bold font-outfit hover:bg-primary transition-colors shadow-lg shadow-slate/10">
            Consultar Tarifas 2026
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[2.5rem] bg-white border border-slate/5 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all group ${s.size}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-8 transition-transform group-hover:rotate-12`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold font-outfit text-slate mb-4">{s.title}</h3>
              <p className="text-slate/60 font-inter leading-relaxed text-lg">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
