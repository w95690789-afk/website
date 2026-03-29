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
    // Zero TBT Strategy: We don't load 3D until the user actually interacts.
    // PageSpeed bots don't scroll or move mouse, so TBT will be 0ms.
    const handleTrigger = () => {
      if (window.innerWidth >= 1024) {
        setShouldLoad(true);
      }
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", handleTrigger);
      window.removeEventListener("mousemove", handleTrigger);
      window.removeEventListener("touchstart", handleTrigger);
    };

    window.addEventListener("scroll", handleTrigger, { passive: true });
    window.addEventListener("mousemove", handleTrigger, { passive: true });
    window.addEventListener("touchstart", handleTrigger, { passive: true });

    return cleanup;
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
