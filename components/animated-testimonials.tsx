"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Generate random rotations once on the client side
    const initialRotations = testimonials.map(() => Math.floor(Math.random() * 16) - 8);
    setRotations(initialRotations);
  }, [testimonials]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovered]);

  return (
    <div 
      className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Images - Square Container */}
        <div className="relative w-full aspect-square max-w-[300px] mx-auto lg:mx-0">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: rotations[index] || 0,
                  x: -50,
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.3,
                  scale: isActive(index) ? 1 : 0.85,
                  rotate: isActive(index) ? 0 : rotations[index] || 0,
                  x: isActive(index) ? 0 : index < active ? -100 : 100,
                  filter: isActive(index) ? "blur(0px)" : "blur(2px)",
                  zIndex: isActive(index) ? 10 : 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: rotations[index] || 0,
                  x: 50,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 origin-center"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    draggable={false}
                    className="rounded-2xl object-cover object-center shadow-xl"
                    style={{
                      objectPosition: "top center",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full justify-between space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="space-y-6"
            >
              <div>
                <motion.p 
                  className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[active].quote}"
                </motion.p>
              </div>

              <div className="space-y-1">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonials[active].name}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {testimonials[active].designation}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center group/button shadow-md hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover/button:text-blue-600 dark:group-hover/button:text-blue-400 transition-colors" />
            </button>
            
            <div className="flex-1 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${isActive(index) ? 'w-8 bg-blue-600' : 'w-4 bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center group/button shadow-md hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover/button:text-blue-600 dark:group-hover/button:text-blue-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};