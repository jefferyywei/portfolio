import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#0d0d0d" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 120,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: { value: "#aaaaaa" },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#888",
            opacity: 0.1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
