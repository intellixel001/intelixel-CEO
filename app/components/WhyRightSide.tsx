"use client";

// app/components/RightSide.tsx
import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import seedrandom from "seedrandom";

// Function to generate lightning paths with a seed
const generateLightning = (seed) => {
  const rng = seedrandom(seed);
  const paths = [];
  for (let i = 0; i < 8; i++) {
    const startX = rng() * 100;
    const startY = rng() * 30;
    let path = `M ${startX} ${startY}`;
    const segments = 5 + Math.floor(rng() * 6);
    let lastX = startX;
    let lastY = startY;

    for (let j = 0; j < segments; j++) {
      const branchChance = j > 2 && rng() > 0.7;
      if (branchChance) {
        const branchSegments = 2 + Math.floor(rng() * 3);
        let branchPath = `M ${lastX} ${lastY}`;
        let branchLastX = lastX;
        let branchLastY = lastY;

        for (let k = 0; k < branchSegments; k++) {
          const x = branchLastX + (rng() - 0.5) * 20;
          const y = branchLastY + rng() * 15;
          branchPath += ` L ${x} ${y}`;
          branchLastX = x;
          branchLastY = y;
        }

        paths.push({ d: branchPath, strokeWidth: 0.5 + rng() * 1.5 });
      }

      const x = lastX + (rng() - 0.5) * 25;
      const y = lastY + rng() * 18 + j * 12;
      path += ` L ${x} ${y}`;
      lastX = x;
      lastY = y;
    }

    paths.push({ d: path, strokeWidth: 0.5 + rng() * 1.5 });
  }
  return paths;
};

export default function WhyRightSide() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const lightningPaths = useMemo(() => generateLightning("fixed-seed"), []);

  const techElementStyles = useMemo(() => {
    const rng = seedrandom("tech-elements-seed");
    const styles = [];
    for (let i = 0; i < 8; i++) {
      const width = 3 + rng() * 5;
      const height = 3 + rng() * 5;
      const r = Math.floor(rng() * 100 + 155);
      const g = Math.floor(rng() * 100 + 155);
      const left = rng() * 100;
      const top = rng() * 100;
      styles.push({
        width: `${width}px`,
        height: `${height}px`,
        background: `rgba(${r}, ${g}, 255, 0.8)`,
        left: `${left}%`,
        top: `${top}%`,
      });
    }
    return styles;
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);
    const center = { x: width / 2, y: height / 2 };
    const particles = [];
    const particleCount = 300;

    const colors = [
      "#6366f1",
      "#8b5cf6",
      "#a855f7",
      "#d946ef",
      "#ec4899",
      "#3b82f6",
      "#0ea5e9",
      "#06b6d4",
    ];

    const rng = seedrandom("particle-seed");
    for (let i = 0; i < particleCount; i++) {
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);
      const radius = 100 + rng() * 150;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        originX: x,
        originY: y,
        originZ: z,
        color: colors[Math.floor(rng() * colors.length)],
        size: 1 + rng() * 3,
        speed: 0.001 + rng() * 0.005,
        angle: rng() * Math.PI * 2,
        orbitRadius: 50 + rng() * 100,
        orbitSpeed: 0.002 + rng() * 0.003,
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.sort((a, b) => b.z - a.z);

      particles.forEach((particle) => {
        const mouseFactorX = mousePosition.x * 50;
        const mouseFactorY = mousePosition.y * 50;

        particle.angle += particle.orbitSpeed;
        particle.x =
          particle.originX + Math.cos(particle.angle) * particle.orbitRadius;
        particle.y =
          particle.originY + Math.sin(particle.angle) * particle.orbitRadius;

        particle.x += mouseFactorX;
        particle.y += mouseFactorY;

        const scale = 1000 / (1000 + particle.z);
        const xProjected = center.x + particle.x * scale;
        const yProjected = center.y + particle.y * scale;
        const sizeProjected = particle.size * scale;

        if (
          xProjected > 0 &&
          xProjected < width &&
          yProjected > 0 &&
          yProjected < height
        ) {
          const gradient = ctx.createRadialGradient(
            xProjected,
            yProjected,
            0,
            xProjected,
            yProjected,
            sizeProjected * 2
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(xProjected, yProjected, sizeProjected, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          particles.forEach((otherParticle) => {
            if (otherParticle === particle) return;

            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const dz = particle.z - otherParticle.z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance < 100) {
              const otherScale = 1000 / (1000 + otherParticle.z);
              const otherXProjected = center.x + otherParticle.x * otherScale;
              const otherYProjected = center.y + otherParticle.y * otherScale;

              ctx.beginPath();
              ctx.moveTo(xProjected, yProjected);
              ctx.lineTo(otherXProjected, otherYProjected);
              ctx.strokeStyle = `${particle.color}${Math.floor(
                (1 - distance / 100) * 0.3 * 255
              )
                .toString(16)
                .padStart(2, "0")}`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        }

        particle.x += (particle.originX - particle.x) * 0.01;
        particle.y += (particle.originY - particle.y) * 0.01;
        particle.z += (particle.originZ - particle.z) * 0.01;
      });

      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const ringSize = 200 + Math.sin(time * 0.5 + i) * 50;
        const alpha = 0.2 + Math.sin(time * 0.3 + i) * 0.1;

        ctx.beginPath();
        ctx.arc(center.x, center.y, ringSize, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <div
      className="lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="absolute w-full h-full pointer-events-none"
      />

      <motion.div
        className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
          filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 60%)",
          borderRadius: "50%",
        }}
      >
        <Image
          src="/intellixel.png"
          alt="Intelixel Logo"
          width={320}
          height={320}
          className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]"
        />

        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
            boxShadow: "0 0 60px 20px rgba(99, 102, 241, 0.2)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        {lightningPaths.map((path, i) => (
          <motion.path
            key={`lightning-${i}`}
            d={path.d}
            stroke="url(#lightningGradient)"
            strokeWidth={path.strokeWidth}
            fill="none"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 0.3 + Math.random() * 0.7,
              repeat: Infinity,
              repeatDelay: 2 + Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
        <defs>
          <linearGradient
            id="lightningGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0.8)" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {techElementStyles.map((style, i) => (
        <motion.div
          key={`tech-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: style.width,
            height: style.height,
            background: style.background,
            boxShadow: "0 0 10px 2px rgba(99, 102, 241, 0.5)",
            left: style.left,
            top: style.top,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 40],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(99, 102, 241, 0.5)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
