// src/components/layout/ParticleSystem.jsx
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default function ParticleSystem() {
  const init = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        preset: "stars",
        background: { color: "#0f172a" },
        particles: { 
          size: { value: { min: 1, max: 3 } },
          move: { 
            speed: 0.2,
            outModes: "bounce" 
          },
          twinkle: {
            lines: { enable: true, frequency: 0.05, opacity: 0.5 }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }
          }
        }
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
