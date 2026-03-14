"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Casos Resueltos", value: "48k+" },
  { label: "Certeza Clínica", value: "99.8%" },
  { label: "Entrega Express", value: "30m" },
  { label: "Tecnología GE", value: "2025" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-clinical-white border-y border-slate/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl font-black font-outfit text-primary mb-3 transition-transform group-hover:scale-110 duration-500">
                {stat.value}
              </div>
              <div className="text-slate/60 font-bold uppercase tracking-[0.15em] text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
