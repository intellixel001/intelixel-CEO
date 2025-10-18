import { motion } from "framer-motion";
import { FiGlobe, FiSmartphone, FiServer, FiCode, FiPenTool, FiDatabase, FiPlus } from "react-icons/fi";

export default function ServicesSection() {
  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <h3 className="text-xl font-medium text-gray-300 mb-8 text-center">
        Our Digital Expertise
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { icon: <FiGlobe className="text-blue-400" size={16} />, text: "Web Platforms" },
          { icon: <FiSmartphone className="text-indigo-400" size={16} />, text: "Mobile Apps" },
          { icon: <FiServer className="text-emerald-400" size={16} />, text: "Cloud Services" },
          { icon: <FiCode className="text-amber-400" size={16} />, text: "Frontend" },
          { icon: <FiServer className="text-purple-400" size={16} />, text: "Backend" },
          { icon: <FiPenTool className="text-rose-400" size={16} />, text: "UX Design" },
          { icon: <FiDatabase className="text-teal-400" size={16} />, text: "Data Engineering" },
          { icon: <FiCode className="text-pink-400" size={16} />, text: "AI" },
          { icon: <FiGlobe className="text-green-400" size={16} />, text: "SaaS" },
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-2 px-5 py-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg"
            whileHover={{ y: -3 }}
          >
            {item.icon}
            <span className="text-sm font-medium text-gray-300">{item.text}</span>
          </motion.div>
        ))}
        
        {/* +More button */}
        <motion.button
          className="flex items-center gap-2 px-5 py-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg"
          whileHover={{ y: -3 }}
        >
          <FiPlus className="text-gray-400" size={16} />
          <span className="text-sm font-medium text-gray-300">More</span>
        </motion.button>
      </div>
    </motion.div>
  );
}