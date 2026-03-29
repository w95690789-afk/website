"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TorusCanvas = dynamic(() => import("./TorusCanvas"), { 
  ssr: false,
  loading: () => null 
});

export default function TorusBackground() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-clinical-white pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* Dynamic Grid Fallback for Mobile (Zero TBT) */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: "radial-gradient(#2DD4BF 0.5px, transparent 0.5px)", 
             backgroundSize: "30px 30px" 
           }} 
      />
      
      {!isMobile && (
        <TorusCanvas />
      )}
    </div>
  );
}
