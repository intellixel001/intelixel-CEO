import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CodeBlock() {
  const [typedText, setTypedText] = useState("");
  const fullCode = `const build = (idea) => refine(engineer(design(idea)));`;
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let typingInterval;

    const startTyping = () => {
      i = 0;
      setIsTyping(true);
      typingInterval = setInterval(() => {
        if (i < fullCode.length) {
          setTypedText(fullCode.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            startDeleting();
          }, 1500);
        }
      }, 50 + Math.random() * 50);
    };

    const startDeleting = () => {
      i = fullCode.length;
      typingInterval = setInterval(() => {
        if (i > 0) {
          setTypedText(fullCode.substring(0, i - 1));
          i--;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            startTyping();
          }, 500);
        }
      }, 30);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div 
      className="relative w-full max-w-2xl mx-auto mt-16 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 md:border-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="flex px-4 py-2 bg-gray-800/80 border-b border-gray-800 md:border-b-2 rounded-t-xl">
        <div className="flex space-x-2 mr-3">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">app.js</div>
      </div>
      <div className="p-4 font-mono text-gray-300">
        <div className="relative">
          <div className="whitespace-nowrap overflow-hidden">
            <span className="text-xs sm:text-sm md:text-base">
              {typedText}
              <span className={`${isTyping ? 'animate-pulse' : ''} border-r-2 border-blue-500 ml-0.5`}></span>
            </span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <span className="flex items-center mr-3">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
            <span>Running</span>
          </span>
          <span>Ln 1, Col {typedText.length}</span>
        </div>
      </div>
    </motion.div>
  );
}