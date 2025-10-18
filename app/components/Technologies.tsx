"use client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Technologies = () => {
  const techStacks = [
    {
      category: "Frontend",
      techs: [
        { name: "React.js", icon: "/technologies/reactjs.svg" },
        { name: "Next.js", icon: "/technologies/nextjs.svg" },
        { name: "TypeScript", icon: "/technologies/ts.svg" },
        { name: "JavaScript", icon: "/technologies/js.svg" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: "/technologies/nodejs.svg" },
        { name: "Express.js", icon: "/technologies/expressjs.svg" },
        { name: "Python", icon: "/technologies/python.png" },
        { name: "Django", icon: "/technologies/django.png" },
        { name: "MongoDB", icon: "/technologies/mongodb.svg" },
         { name: "Firebase", icon: "/technologies/firebase.svg" },
        { name: "Appwrite", icon: "/technologies/appwrite.svg" },
      ],
    },
    {
      category: "Tools & APIs",
      techs: [
        { name: "REST API", icon: "/technologies/restapi.png" },
        { name: "Figma", icon: "/technologies/figma.svg" },
        { name: "Tailwind CSS", icon: "/technologies/tailwind.svg" },
        { name: "Firebase", icon: "/technologies/firebase.svg" },
        { name: "Appwrite", icon: "/technologies/appwrite.svg" },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Predefined particle properties to avoid hydration mismatch
  const particles = Array.from({ length: 15 }, (_, i) => ({
    width: 2 + (i % 8) + 2, // Deterministic width between 2 and 10
    height: 2 + ((i + 3) % 7) + 2, // Deterministic height between 2 and 9
    x: (i * 7) % 100, // Deterministic x position
    y: (i * 11) % 100, // Deterministic y position
    xOffset: ((i * 13) % 50) - 25, // Deterministic x offset for animation
  }));

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // 3D tilt effect for non-touch devices
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = (x - centerX) / 20;
      const rotateX = (centerY - y) / 20;

      containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };
  }, [isTouchDevice]);

  // Glow effect for hovered tech
  useEffect(() => {
    if (hoveredTech !== null) {
      controls.start({
        x: hoveredTech.x,
        y: hoveredTech.y,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
      });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [hoveredTech, controls]);

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[700px]">
      {/* Floating grid background */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:50px_50px] sm:bg-[length:100px_100px] animate-scroll-slow" />
      </div>

      {/* Pulsing gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(100, 108, 255, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 50%, rgba(100, 108, 255, 0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(100, 108, 255, 0.1) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4 uppercase border border-primary/30">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Our Technical Arsenal
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Carefully selected technologies powering our digital solutions
          </p>
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {techStacks.map((stack, index) => (
            <button
              key={stack.category}
              onClick={() => setSelectedCategory(index)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-primary text-black"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {stack.category}
            </button>
          ))}
        </div>

        {/* Tech stack display */}
        <div className="relative">
          {/* Hover glow effect */}
          <motion.div
            className="absolute w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none"
            animate={controls}
            initial={{ opacity: 0 }}
          />

          <div
            ref={containerRef}
            className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-800 p-4 sm:p-8 transition-transform duration-300 ease-out"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
              {techStacks[selectedCategory].techs.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={(e) => {
                    if (isTouchDevice) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredTech({
                      x: rect.left + rect.width / 2 - (isTouchDevice ? 64 : 128),
                      y: rect.top + rect.height / 2 - (isTouchDevice ? 64 : 128),
                      tech,
                    });
                  }}
                  onTouchStart={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredTech({
                      x: rect.left + rect.width / 2 - 64,
                      y: rect.top + rect.height / 2 - 64,
                      tech,
                    });
                  }}
                  onMouseLeave={() => setHoveredTech(null)}
                  onTouchEnd={() => setHoveredTech(null)}
                  className="relative group"
                >
                  <div className="aspect-square bg-gray-900/50 rounded-xl border border-gray-800 group-hover:border-primary/50 p-4 sm:p-6 transition-all duration-300 flex flex-col items-center justify-center">
                    <div className="relative h-10 w-10 sm:h-16 sm:w-16 mb-2 sm:mb-4">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        sizes="(max-width: 640px) 40px, 64px"
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm sm:text-lg font-medium text-white group-hover:text-primary transition-colors duration-300 text-center">
                      {tech.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional technologies note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                And many more technologies in our toolkit...
              </p>
              <p className="text-xs text-gray-500 mt-1">
                We continuously explore and adopt new technologies to deliver the best solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Tech description panel with reserved space */}
        <div className="min-h-[120px] sm:min-h-[150px] mt-6 sm:mt-8">
          <AnimatePresence>
            {hoveredTech && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 p-4 sm:p-6"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image
                      src={hoveredTech.tech.icon}
                      alt={hoveredTech.tech.name}
                      fill
                      sizes="(max-width: 640px) 40px, 48px"
                      className="object-contain brightness-125"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">{hoveredTech.tech.name}</h4>
                    <p className="text-sm sm:text-base text-gray-400">
                      {techStacks[selectedCategory].category} technology for building{" "}
                      {techStacks[selectedCategory].category === "Frontend"
                        ? "beautiful interfaces"
                        : techStacks[selectedCategory].category === "Backend"
                        ? "scalable services"
                        : "efficient workflows and integrations"}
                      .
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating particles with deterministic values */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20 pointer-events-none"
          initial={{
            x: particle.x,
            y: particle.y,
            width: particle.width,
            height: particle.height,
          }}
          animate={{
            y: [particle.y, particle.y - 100],
            x: [particle.x, particle.x + particle.xOffset],
            opacity: [0.5, 1, 0],
          }}
          transition={{
            duration: 10 + (i % 5), // Vary duration deterministically
            repeat: Infinity,
            delay: i * 0.5, // Staggered start
            ease: "linear",
          }}
        />
      ))}
    </section>
  );
};

export default Technologies;