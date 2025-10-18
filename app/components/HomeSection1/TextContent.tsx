import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiAward, FiCode, FiServer, FiClock } from "react-icons/fi";
import Counter from "./Counter";

export default function TextContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="w-full lg:w-1/2 px-4 py-8 sm:py-10 md:py-0 sm:px-6 lg:px-0 flex flex-col justify-center max-h-screen overflow-y-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: 0.05, delayChildren: 0.2 },
          },
          hidden: {},
        }}
        className="max-w-2xl mx-auto lg:mx-0"
      >
        <motion.div
          className="mb-2 sm:mb-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100 },
            },
          }}
        >
          {/* <span className="hidden lg:inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-800/50">
            Innovation Delivered
          </span> */}
        </motion.div>

        <motion.h1
          className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100 },
            },
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Next-Level
          </span>{" "}
          Digital Solutions
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3 },
            },
          }}
        >
          We craft <span className="text-blue-400 font-medium">high-performance</span> digital experiences that blend cutting-edge technology with <span className="text-purple-400 font-medium">sleek design</span>.
        </motion.p>

        <motion.div
          className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4 },
            },
          }}
        >
          <p className="text-gray-300 text-sm sm:text-base">
            <span className="text-cyan-400 font-medium">Trusted by startups and enterprises</span> worldwide to deliver scalable, secure, and stunning digital products.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4 mb-6 sm:mb-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, staggerChildren: 0.1 },
            },
          }}
        >
          {[
            { value: 40, suffix: "+", label: "Projects", icon: <FiCode className="mb-1" /> },
            { value: 3, suffix: "+", label: "Years", icon: <FiClock className="mb-1" /> },
            { value: "24/7", label: "Support", icon: <FiServer className="mb-1" /> },
            { value: 99.9, suffix: "%", label: "Uptime", icon: <FiAward className="mb-1" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-2 sm:p-3 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800 flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-blue-400 mb-1">{stat.icon}</div>
              <p className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                {typeof stat.value === "number" ? (
                  <Counter target={stat.value} suffix={stat.suffix} duration={2000} />
                ) : (
                  stat.value
                )}
              </p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-2 sm:gap-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.6 },
            },
          }}
        >
          <Link
            href="/portfolio"
            className="
              relative group font-medium rounded-lg overflow-hidden 
              transition-all duration-300 
              w-full sm:w-auto text-center
              inline-flex items-center justify-center
              px-5 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base
              bg-gradient-to-r from-blue-600 to-cyan-600
              hover:from-blue-500 hover:to-cyan-500
              shadow-lg hover:shadow-xl
              hover:scale-[1.02]
            "
          >
            <span className="relative z-10 flex items-center">
              Explore Portfolio
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>

          <Link
            href="/book-meeting"
            className="
              relative group font-medium rounded-lg overflow-hidden 
              transition-all duration-300 
              w-full sm:w-auto text-center
              inline-flex items-center justify-center
              px-5 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base
              bg-gray-800 hover:bg-gray-700
              border border-gray-700 hover:border-gray-600
              shadow-lg hover:shadow-xl
              hover:scale-[1.02]
            "
          >
            <span className="relative z-10 flex items-center">
              Book a meeting
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}