"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/patient-care.png" 
                alt="Cuidado al Paciente Ecomedica" 
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate mb-8 leading-[1.1]">
              Tu salud no puede <br />
              <span className="text-primary italic">esperar al sistema</span>.
            </h2>
            <p className="text-xl text-slate/70 font-inter leading-relaxed mb-8">
              No somos solo un centro de imágenes; somos la respuesta rápida que necesitas. En Ecomedica Teusaquillo, eliminamos la incertidumbre con tecnología de <span className="text-primary font-bold">última generación</span> y un equipo de radiólogos expertos que priorizan tu caso.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { title: "Precisión Superior", desc: "Exactitud validada por médicos radiólogos y equipos de alta resolución.", color: "bg-teal-500" },
                { title: "Seguridad Digital", desc: "Infraestructura digital encriptada. Sus resultados están protegidos, no en sistemas obsoletos.", color: "bg-blue-600" },
                { title: "Circuito Express", desc: "Ciencia al servicio de su tiempo, entrega de resultados en 15 minutos.", color: "bg-secondary" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate/5 shadow-sm hover:shadow-md transition-all">
                  <div className={`flex-shrink-0 w-3 h-3 rounded-full ${item.color} animate-pulse`} />
                  <div>
                    <h4 className="font-bold text-slate text-sm uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xl font-outfit font-medium text-slate/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
