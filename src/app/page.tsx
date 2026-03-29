import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import HumanConnection from "@/components/HumanConnection";
import Differentiator from "@/components/Differentiator";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import dynamic from "next/dynamic";
const TorusBackground = dynamic(() => import("@/components/TorusBackground"), { ssr: false });

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
      <Footer />
    </main>
  );
}
