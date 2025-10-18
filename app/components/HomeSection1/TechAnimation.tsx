"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiServer, FiGlobe, FiLayers, FiTerminal, FiGitBranch } from "react-icons/fi";
import { TbBinary, TbCloudComputing, TbRobot, TbApi } from "react-icons/tb";
import { LuCircuitBoard } from "react-icons/lu";
import { SiThealgorithms, SiTensorflow } from "react-icons/si";
import { IoMdCube } from "react-icons/io";

const ParticleNetwork = ({ width = 300, height = 300 }) => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Initialize particles
    const particleCount = 20; // Reduced for performance
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: `rgba(100, 150, 255, ${Math.random() * 0.3 + 0.1})`,
      });
    }

    setParticles(newParticles);

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update particles
      const updatedParticles = newParticles.map((p) => {
        const newX = p.x + p.speedX;
        const newY = p.y + p.speedY;

        // Boundary check
        if (newX < 0 || newX > width) p.speedX *= -1;
        if (newY < 0 || newY > height) p.speedY *= -1;

        return { ...p, x: newX, y: newY };
      });

      // Draw connections
      const newConnections = [];
      for (let i = 0; i < updatedParticles.length; i++) {
        for (let j = i + 1; j < updatedParticles.length; j++) {
          const dx = updatedParticles[i].x - updatedParticles[j].x;
          const dy = updatedParticles[i].y - updatedParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(80, 130, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(updatedParticles[i].x, updatedParticles[i].y);
            ctx.lineTo(updatedParticles[j].x, updatedParticles[j].y);
            ctx.stroke();

            newConnections.push({
              from: i,
              to: j,
              opacity,
            });
          }
        }
      }

      // Draw particles
      updatedParticles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      setParticles(updatedParticles);
      setConnections(newConnections);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
    />
  );
};

const TechIcon = ({ icon: Icon, size = 24, className = "" }) => {
  return (
    <div className={`text-white ${className}`}>
      <Icon size={size} />
    </div>
  );
};

export default function TechAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // Increased amount for better visibility detection
  const controls = useAnimation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const floatingTech = [
    { icon: FiCode, size: 24, initialX: -60, initialY: -30, delay: 0.1, color: "text-blue-400" },
    { icon: TbRobot, size: 24, initialX: 50, initialY: -50, delay: 0.2, color: "text-purple-400" },
    { icon: SiThealgorithms, size: 24, initialX: -50, initialY: 50, delay: 0.3, color: "text-green-500" },
    { icon: LuCircuitBoard, size: 24, initialX: 60, initialY: 30, delay: 0.4, color: "text-yellow-400" },
    { icon: TbBinary, size: 20, initialX: 0, initialY: -60, delay: 0.5, color: "text-pink-400" },
    { icon: TbCloudComputing, size: 20, initialX: 0, initialY: 60, delay: 0.6, color: "text-blue-300" },
    { icon: FiServer, size: 18, initialX: -80, initialY: 0, delay: 0.7, color: "text-gray-300" },
    { icon: FiDatabase, size: 18, initialX: 80, initialY: 0, delay: 0.8, color: "text-orange-400" },
    { icon: FiTerminal, size: 18, initialX: -30, initialY: -80, delay: 0.9, color: "text-green-300" },
    { icon: FiGitBranch, size: 18, initialX: 30, initialY: -80, delay: 1.0, color: "text-red-400" },
    { icon: TbApi, size: 18, initialX: -30, initialY: 80, delay: 1.1, color: "text-indigo-400" },
    { icon: IoMdCube, size: 18, initialX: 30, initialY: 80, delay: 1.2, color: "text-teal-400" },
  ];

  return (
    <div className="lg:w-1/2 w-full relative" ref={ref}>
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Particle Network Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {isClient && <ParticleNetwork width={300} height={300} />}
          </div>

          {/* Central glowing orb */}
          <motion.div
            className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <FiLayers className="text-white text-3xl opacity-80" />
          </motion.div>

          {/* Floating tech icons */}
          {floatingTech.map((tech, i) => (
            <motion.div
              key={i}
              className={`absolute ${tech.color}`}
              initial={{
                x: tech.initialX,
                y: tech.initialY,
                opacity: 0,
              }}
              animate={controls}
              variants={{
                visible: {
                  x: tech.initialX,
                  y: tech.initialY,
                  opacity: 1,
                  transition: {
                    delay: tech.delay,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 50,
                  },
                },
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                <TechIcon icon={tech.icon} size={tech.size} />
              </motion.div>
            </motion.div>
          ))}

          {/* Pulsing rings */}
          {[1, 1.3, 1.6].map((scale, i) => (
            <motion.div
              key={i}
              className="absolute border border-blue-400/30 rounded-full"
              style={{ width: 200, height: 200 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  scale,
                  opacity: [0, 0.3, 0],
                  transition: {
                    delay: 0.5 + i * 0.2,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  },
                },
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}