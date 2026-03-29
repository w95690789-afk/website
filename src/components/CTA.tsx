"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[4rem] bg-primary p-12 md:p-24 flex flex-col items-center text-center">
          {/* Static Background Blobs (Lower CPU/GPU overhead) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[100px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[120px]" aria-hidden="true" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-black font-outfit text-white mb-10 leading-tight">
              Su salud no puede <br />
              <span className="italic">seguir pidiendo cita.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-14 max-w-2xl mx-auto font-inter">
              Atención inmediata en el eje médico de Teusaquillo. Sin filas, sin complicaciones y con resultados definitivos el mismo día.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/573245134768?text=Hola%20Ecomedica,%20quisiera%20agendar%20una%20cita%20de%20inmediato."
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-white text-primary rounded-[2rem] font-bold text-2xl hover:scale-105 hover:shadow-2xl transition-all shadow-xl flex items-center justify-center"
              >
                Agendar por WhatsApp
              </a>
              <a 
                href="tel:+573245134768"
                className="px-12 py-6 bg-primary-dark/20 backdrop-blur-md border border-white/20 text-white rounded-[2rem] font-bold text-2xl hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Llamar Directo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
