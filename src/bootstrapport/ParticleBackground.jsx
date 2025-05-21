import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // Enables full-screen mode
        background: { color: "#000000" }, // Black background
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;
