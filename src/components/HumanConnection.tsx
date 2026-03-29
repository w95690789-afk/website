"use client";

import { motion } from "framer-motion";

export default function HumanConnection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate/2 opacity-30 skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate/5 bg-slate/5">
              <img 
                src="/manos-ecomedica.jpeg" 
                alt="Conexión humana y ternura en Ecomedica IPS" 
                className="w-full h-auto object-cover transform scale-110 md:scale-120 group-hover:scale-125 transition-transform duration-[5000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate/40 to-transparent opacity-60" />
            </div>
            
            {/* Floating Emotional Label - Refined to cover less image */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-4 left-6 right-6 md:left-10 md:right-10 glass-card py-6 px-8 rounded-[2rem] border border-white/40 shadow-xl z-20 flex flex-col items-center text-center backdrop-blur-md"
            >
              <p className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2 font-inter">Nuestro Compromiso</p>
              <p className="text-slate text-base md:text-xl font-bold font-outfit italic leading-tight">
                "Cuidamos su futuro como si fuera el nuestro"
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-slate/5 rounded-full border border-slate/10">
                <span className="text-[10px] font-black tracking-[0.2em] text-slate/40 uppercase font-inter">Trato Humano Innegociable</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-slate leading-tight mb-8">
                El final de la <span className="text-primary italic">incertidumbre</span> <br />
                comienza con un <span className="text-gradient">trato digno, humano y respetuoso.</span>
              </h2>
              
              <p className="text-xl text-slate/70 font-inter leading-relaxed mb-10">
                Sabemos que detrás de cada solicitud de ecografía hay una madre preocupada, un deportista lesionado o una familia esperando noticias. Por eso, en Ecomedica eliminamos las barreras del sistema tradicional.
                <br /><br />
                Combinamos <span className="text-slate font-bold">resultados inmediatos</span> con el respeto que su salud merece. Durante la ecografía, puedes estar acompañada por tus familiares o seres queridos, para que compartan contigo este momento especial. Aquí no es un número más; es una persona que busca respuestas, y nosotros se las entregamos en minutos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Atención Familiar", desc: "Acompañamiento integral para compartir momentos especiales." },
                  { title: "Respeto por su Tiempo", desc: "Resultados en 15 minutos sin esperas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate font-outfit">{item.title}</h4>
                      <p className="text-sm text-slate/50 font-inter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all">
                Conozca nuestra ética de servicio 
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
