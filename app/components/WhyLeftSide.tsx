"use client";

// app/components/LeftSide.tsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhyLeftSide() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="lg:w-1/2 z-1000">
      <header className="mb-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Intelixel?
          </span>
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          At Intelixel, we go beyond just software development. We innovate,
          strategize, and build solutions that drive business success, ensuring
          cutting-edge technology, exceptional design, and seamless
          functionality.
        </motion.p>
      </header>

      <div className="space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
        <p>
          agência de marketing digital, especializada em SEO, tráfego pago,
          gestão de redes sociais e criação de sites, localizada em
          Florianópolis, Santa Catarina.
        </p>

        <p>
          Beyond development, we excel in{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            branding and product design
          </strong>
          . From creating memorable logos to building full-scale visual
          identities, we help your brand resonate deeply with your audience.
        </p>

        <motion.button
          onClick={() => setShowFullText(true)}
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read full
        </motion.button>
      </div>

      {showFullText && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-1000 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowFullText(false)}
        >
          <motion.div
            className="bg-gray-900/90 border border-gray-800 rounded-xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullText(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Why Intelixel Stands Out
            </h3>

            <div className="space-y-6 text-gray-300">
              <p>
                At Intelixel, we specialize in{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  cutting-edge web and app development
                </strong>
                , crafting modern, high-performance applications that deliver
                seamless user experiences. Our expertise extends to{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  backend solutions
                </strong>
                , where we ensure your applications are secure, scalable, and
                reliable, ready to meet the demands of the future.
              </p>

              <p>
                Beyond development, we excel in{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  branding and product design
                </strong>
                . From creating memorable logos to building full-scale visual
                identities, we help your brand resonate deeply with your
                audience. Our focus on{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  seamless user experience and UI/UX design
                </strong>{" "}
                ensures that every interface we create is intuitive, visually
                appealing, and designed to enhance user engagement.
              </p>

              <p>
                We also provide{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  reliable and scalable infrastructure
                </strong>
                , leveraging cloud and server solutions optimized for speed,
                security, and scalability. This ensures your business can grow
                without limitations. Above all, our{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  client-centric approach
                </strong>{" "}
                sets us apart. We prioritize your goals, working closely with
                you to deliver solutions that align perfectly with your vision
                and business objectives.
              </p>

              <p className="font-medium text-gray-200">
                At Intelixel, we don't just build software—we build
                partnerships. Let us help you turn your ideas into reality with
                innovation, strategy, and excellence.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
