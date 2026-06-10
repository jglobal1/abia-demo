"use client";

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particleOptions: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: { value: "#d4e8f5" },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 220,
        links: {
          opacity: 1,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#1e4d7b",
    },
    stroke: {
      width: 1,
      color: "#0f2f4f",
    },
    links: {
      color: "#ffffff",
      distance: 260,
      enable: true,
      opacity: 1,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce",
      },
    },
    number: {
      density: {
        enable: true,
        width: 1200,
        height: 800,
      },
      value: 120,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 4, max: 6 },
    },
  },
  detectRetina: true,
};

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--hero-bg)]">
      <ParticlesProvider init={loadSlim}>
        <Particles
          id="hero-particles"
          className="h-full w-full"
          style={{ height: "100%", width: "100%" }}
          options={particleOptions}
        />
      </ParticlesProvider>
    </div>
  );
}
