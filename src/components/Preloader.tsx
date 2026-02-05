"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ParticlesField } from "@/components/ParticlesField";

export const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => window.setTimeout(() => setVisible(false), 1200);
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      return () => window.removeEventListener("load", hide);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0B1020] text-[#F7F2EB]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ParticlesField className="particles-field absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-white/10 border border-white/25 shadow-2xl flex items-center justify-center backdrop-blur">
              <img src="/logo.svg" alt="HAND Logo" className="h-24 w-24 sm:h-32 sm:w-32 object-contain" />
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-white/70">креативное агентство</p>
              <p className="text-xl sm:text-2xl font-display font-semibold uppercase tracking-[0.28em]">
                HAND AGENCY
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
