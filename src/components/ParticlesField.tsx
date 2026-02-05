"use client";

import { useEffect, useMemo } from "react";

type ParticlesFieldProps = {
  id?: string;
  className?: string;
  config?: Record<string, unknown>;
};

const DEFAULT_CONFIG = {
  particles: {
    number: { value: 85, density: { enable: true, value_area: 950 } },
    color: { value: ["#F7F2EB", "#82AAFF", "#2350D2"] },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 2.6, random: true },
    line_linked: { enable: true, distance: 150, color: "#82AAFF", opacity: 0.28, width: 1 },
    move: { enable: true, speed: 1.0, direction: "none", out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 0.45 } },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
};

export const ParticlesField = ({ id, className, config }: ParticlesFieldProps) => {
  const containerId = useMemo(() => id ?? `particles-${Math.random().toString(36).slice(2, 9)}`, [id]);

  useEffect(() => {
    let mounted = true;
    const container = document.getElementById(containerId);

    const loadParticles = () => {
      if ((window as any).particlesJS) return Promise.resolve();
      const existing = (window as any).__particlesJsLoadingPromise as Promise<void> | undefined;
      if (existing) return existing;

      const promise = new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "/particles.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load particles.js"));
        document.body.appendChild(script);
      });

      (window as any).__particlesJsLoadingPromise = promise;
      return promise;
    };

    const setup = async () => {
      await loadParticles();
      if (!mounted || !container) return;
      const particlesJS = (window as any).particlesJS as
        | ((tagId: string, params: Record<string, unknown>) => void)
        | undefined;
      particlesJS?.(containerId, (config ?? DEFAULT_CONFIG) as Record<string, unknown>);
    };

    setup();

    return () => {
      mounted = false;
      if (container) container.innerHTML = "";
      const dom = (window as any).pJSDom as Array<{ pJS?: { canvas?: { el?: HTMLCanvasElement } } }>;
      if (Array.isArray(dom)) {
        (window as any).pJSDom = dom.filter(item => item?.pJS?.canvas?.el?.parentElement?.id !== containerId);
      }
    };
  }, [containerId, config]);

  return <div id={containerId} className={className} />;
};
