import { motion } from "framer-motion";
import { FiCode, FiServer } from "react-icons/fi";

export default function TechBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px]"></div>
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating circles */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
            opacity: [0.8, 0.5, 0.8]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Floating tech icons */}
        <motion.div 
          className="absolute top-1/3 right-1/3 text-blue-400/30 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FiCode />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/5 left-1/5 text-emerald-400/30 text-5xl"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FiServer />
        </motion.div>
      </div>
    </div>
  );
}