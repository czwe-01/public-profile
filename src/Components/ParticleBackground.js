import React, { useEffect, useState } from "react";

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  const generateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const generateRandomDuration = () => {
    return `${generateRandomNumber(1, 3)}s`;
  };

  const createParticle = () => {
    return {
      id: Date.now(),
      left: `${generateRandomNumber(0, 100)}vw`,
      animationDuration: generateRandomDuration(),
    };
  };

  const updateParticles = () => {
    setParticles((prevParticles) => {
      const newParticle = createParticle();
      return [...prevParticles, newParticle];
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateParticles();
    }, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            transform: "translateY(0)",
            opacity: 1,
            left: particle.left,
            animation: `floatAnimation ${particle.animationDuration} linear infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ParticleBackground;
