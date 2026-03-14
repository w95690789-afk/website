import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import HumanConnection from "@/components/HumanConnection";
import Differentiator from "@/components/Differentiator";
import CTA from "@/components/CTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import TorusBackground from "@/components/TorusBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-clinical-white">
      <SchemaMarkup />
      <TorusBackground />
      <Navbar />
      <Hero />
      <Stats />
      <TrustSection />
      <HumanConnection />
      <Services />
      <Differentiator />
      <CTA />
      <WhatsAppButton />
      
      <footer className="py-20 border-t border-slate/5 bg-white/80 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div className="space-y-6">
              <img src="/logo.png" alt="Ecomédica" className="h-12 w-auto" />
              <p className="text-slate/60 font-inter leading-relaxed max-w-xs">
                Sede certificada por la Secretaría de Salud de Bogotá. Expertos en diagnóstico por imagen y salud ocupacional con tecnología GE HealthCare.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate/5 flex items-center justify-center text-slate/40 hover:text-primary hover:bg-primary/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate/5 flex items-center justify-center text-slate/40 hover:text-primary hover:bg-primary/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-outfit font-bold text-slate mb-6 uppercase tracking-wider text-sm">Horarios</h4>
              <ul className="text-slate/60 font-inter space-y-3">
                <li className="flex justify-between"><span>Lunes - Viernes:</span> <span className="font-bold text-slate">7:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Sábados:</span> <span className="font-bold text-slate">7:00 AM - 1:00 PM</span></li>
                <li className="flex justify-between text-slate/30"><span>Domingos:</span> <span>Cerrado</span></li>
              </ul>
              <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1 font-inter">Tarifa Unificada</p>
                <p className="text-2xl font-black text-slate font-outfit">Desde $50.000 <span className="text-sm font-normal text-slate/40">COP</span></p>
              </div>
            </div>
            <div>
              <h4 className="font-outfit font-bold text-slate mb-6 uppercase tracking-wider text-sm">Ubicación Estratégica</h4>
              <p className="text-slate/60 font-inter leading-relaxed">
                Calle 34 # 14 - 33<br />
                Teusaquillo, Bogotá D.C.<br />
                <span className="text-xs text-slate/40">Eje médico — zona universitaria</span>
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-slate/40 font-inter">Línea directa</p>
                  <span className="text-slate font-bold font-outfit text-xl">+57 324 513 4768</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate/40 font-inter text-xs pt-12 border-t border-slate/5 gap-4">
            <p>© 2026 Ecomédica IPS S.A.S. · NIT 000.000.000-0 · Habilitada por la Secretaría de Salud de Bogotá.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Tratamiento de Datos</a>
              <a href="#" className="hover:text-primary transition-colors">Habeas Data</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
