"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Beaker, Zap, Clock, Smartphone } from "lucide-react";

const services = [
  {
    title: "Ecografías de Alta Resolución",
    desc: "Diagnósticos precisos hoy mismo. Desde $90.000, accede a ultrasonidos con tecnología de alta gama (2D, 3D, 4D, HD) que garantizan nitidez total para un reporte confiable.",
    icon: <Activity />,
    color: "bg-teal-50 text-teal-600",
    size: "col-span-1 lg:col-span-1",
  },
  {
    title: "Consulta Médica General",
    desc: "Servicios integrales que incluyen certificados médicos de estudio, laboral y de huellas dactilares para trámites notariales.",
    icon: <ShieldCheck />,
    color: "bg-purple-50 text-purple-600",
    size: "col-span-1",
  },
  {
    title: "Radiología Digital",
    desc: "Imágenes nítidas con mínima radiación. Ideal para ingresos laborales o traumatología, con entrega inmediata física y digital.",
    icon: <Zap />,
    color: "bg-amber-50 text-amber-600",
    size: "col-span-1",
  },
  {
    title: "Laboratorio Clínico",
    desc: "Exámenes de rutina y especializados con rapidez. Entrega de resultados de forma digital y segura para que no pierdas tiempo ni privacidad.",
    icon: <Beaker />,
    color: "bg-blue-50 text-blue-600",
    size: "col-span-1",
  },
  {
    title: "Certeza en 15 Minutos",
    desc: "Circuito Express: No espere días. Reciba su informe firmado por especialistas antes de salir de nuestras instalaciones.",
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
              <span className="text-primary italic">precisión clínica digital.</span>
            </h2>
            <p className="text-xl text-slate/60 font-inter max-w-lg">
              Despliegue tecnológico y rigor médico al servicio de su diagnóstico. Sin esperas, sin dudas.
            </p>
          </div>
          <button className="px-8 py-4 bg-slate text-white rounded-xl font-bold font-outfit hover:bg-primary transition-colors shadow-lg shadow-slate/10">
            Ver Precios Particulares
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
