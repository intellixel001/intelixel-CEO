"use client";
import Link from "next/link";

function Btn1({
  title,
  link = "#",
  color,
  ...rest
}: {
  title: string;
  link?: string;
  color?: string;
}) {
  return (
    <Link
      href={link}
      className={`
        relative group font-medium rounded-lg overflow-hidden 
        transition-all duration-300 
        min-w-[160px] text-center
        inline-flex items-center justify-center
        px-6 py-3 text-sm sm:text-base whitespace-nowrap
        ${
          color
            ? "text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md"
            : "text-white bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
        }
      `}
      {...rest}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-1">
        {title}
        {color && (
          <svg
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        )}
      </span>
      
      {/* Background effects */}
      {color ? (
        <span className="
          absolute inset-0 bg-gradient-to-r 
          from-blue-50 to-purple-50 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
        "></span>
      ) : (
        <span className="
          absolute inset-0 rounded-lg bg-gradient-to-r 
          from-blue-500/20 via-purple-500/20 to-pink-500/20 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
        "></span>
      )}
    </Link>
  );
}

export default Btn1;
