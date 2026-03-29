"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Radical Isolation: The heavier Three.js logic is now completely isolated.
const TorusCanvas = dynamic(() => import("./TorusCanvas"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-clinical-white/50 animate-pulse" /> 
});

export default function TorusBackground() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Only load 3D on large screens AND after a short delay to prioritize initial LCP
    const timer = setTimeout(() => {
      if (window.innerWidth >= 1024) {
        setShouldLoad(true);
      }
    }, 1500); // 1.5s delay to let the page breathe

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-clinical-white pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* Static Grid Layer (Zero TBT Cost) */}
      <div className="absolute inset-0 opacity-[0.2]" 
           style={{ 
             backgroundImage: "radial-gradient(#2DD4BF 0.5px, transparent 0.5px)", 
             backgroundSize: "40px 40px" 
           }} 
      />
      
      {shouldLoad && (
        <Suspense fallback={null}>
          <TorusCanvas />
        </Suspense>
      )}
    </div>
  );
}
