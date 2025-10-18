import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";


export function ServiceBox({ 
  title, 
  desc, 
  options, 
  btnText, 
  className = "",
  icon 
}: any) {
  return (
    <div className={`relative h-full p-6 rounded-lg border border-gray-800 bg-gray-900/50 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6">{desc}</p>
        
        <ul className="space-y-3 mb-8">
          {options.map((option, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheck className="text-blue-400 mt-0.5 flex-shrink-0 text-sm" />
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                {option}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <Link href="/book-meeting" className="inline-block">
            <button className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-sm font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow hover:shadow-blue-500/20">
              {btnText}
              <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-xs" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}