"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FiFileText, FiCode } from "react-icons/fi"
import { IoMdRocket } from "react-icons/io"

export default function HowWeWork() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      title: "Requirement Analysis",
      description: "We document every detail through stakeholder interviews, user research, and technical assessments.",
      icon: <FiFileText className="text-blue-400" size={24} />,
      bg: "bg-gradient-to-br from-blue-900/20 to-blue-800/10",
      border: "border-blue-400/30"
    },
    {
      title: "Design & Development",
      description: "Our team creates pixel-perfect UI designs and implements robust, scalable architectures.",
      icon: <FiCode className="text-teal-400" size={24} />,
      bg: "bg-gradient-to-br from-teal-900/20 to-teal-800/10",
      border: "border-teal-400/30"
    },
    {
      title: "Testing & Deployment",
      description: "We conduct rigorous QA testing and implement automated CI/CD pipelines for seamless launches.",
      icon: <IoMdRocket className="text-violet-400" size={24} />,
      bg: "bg-gradient-to-br from-violet-900/20 to-violet-800/10",
      border: "border-violet-400/30"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
    }, 4000) // Switch every 4 seconds

    return () => clearInterval(interval)
  }, [cards.length])

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="relative w-full py-16 px-4 sm:py-20 sm:px-6 md:py-24 lg:px-8 overflow-hidden ">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-blue-400/10 blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-violet-400/10 blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            Our Development Process
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Professional workflow with military precision execution
        </p>
      </div>

      {/* Card container */}
      <div className="relative w-full max-w-md mx-auto flex items-center justify-center">
        <motion.div
          key={activeCard}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`w-full ${cards[activeCard].bg} ${cards[activeCard].border} border rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl md:shadow-2xl`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 rounded-lg bg-black/50 mr-3 sm:mr-4 border border-gray-800">
                {cards[activeCard].icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{cards[activeCard].title}</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 flex-grow">{cards[activeCard].description}</p>
            <div className="h-32 sm:h-40 bg-black/40 rounded-lg border border-gray-800 flex items-center justify-center">
              {activeCard === 0 && <DocumentAnimation active={true} />}
              {activeCard === 1 && <CodeAnimation active={true} />}
              {activeCard === 2 && <RocketAnimation active={true} />}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 sm:mt-12 gap-2 sm:gap-3 relative z-10">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveCard(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${activeCard === index ? 'bg-white w-4 sm:w-6' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </section>
  )
}

function DocumentAnimation({ active }) {
  const files = [
    { name: "Project Scope.pdf", size: "2.4 MB" },
    { name: "User Stories.docx", size: "1.8 MB" },
    { name: "Tech Specs.xlsx", size: "3.2 MB" },
    { name: "Timeline.pdf", size: "1.5 MB" }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0.3 }}
      className="w-full px-3 sm:px-4 overflow-hidden"
    >
      <div className="flex flex-col space-y-2 max-h-32 sm:max-h-40 overflow-y-auto">
        {files.map((file, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: active ? 0 : -20,
              opacity: active ? 1 : 0,
              transition: { delay: i * 0.1 + 0.3 }
            }}
            className="flex justify-between items-center p-2 hover:bg-gray-800/50 rounded"
          >
            <div className="flex items-center overflow-hidden">
              <FiFileText className="text-blue-400 mr-2 flex-shrink-0" size={14} />
              <span className="text-gray-300 text-xs sm:text-sm truncate">{file.name}</span>
            </div>
            <span className="text-gray-500 text-xs flex-shrink-0 ml-2">{file.size}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function CodeAnimation({ active }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!active) {
      setProgress(0)
      return
    }

    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10))
    }, 300)

    return () => clearInterval(interval)
  }, [active])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0.3 }}
      className="w-full px-3 sm:px-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 mb-3 sm:mb-4">
          <motion.div 
            className="bg-teal-400 h-1.5 sm:h-2 rounded-full"
            animate={{ width: active ? `${progress}%` : '0%' }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-center">
          <p className="text-gray-300 text-xs sm:text-sm mb-1">Building components</p>
          <p className="text-gray-500 text-xs"> {progress}% complete</p>
        </div>
      </div>
    </motion.div>
  )
}

function RocketAnimation({ active }) {
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    if (!active) {
      setCountdown(3)
      return
    }

    const timer = countdown > 0 && setTimeout(() => {
      setCountdown(countdown - 1)
    }, 800)

    return () => clearTimeout(timer)
  }, [countdown, active])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0.3 }}
      className="w-full px-3 sm:px-4"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            y: active && countdown === 0 ? [-10, -100, -200] : 0,
            opacity: active && countdown === 0 ? [1, 1, 0] : 1
          }}
          transition={{ 
            duration: active && countdown === 0 ? 1.5 : 0,
            ease: "easeOut"
          }}
        >
          <IoMdRocket className="text-violet-400 mb-2" size={28} />
        </motion.div>
        <p className="text-gray-300 text-xs sm:text-sm">
          {countdown > 0 ? `Launch in ${countdown}...` : "LIFTOFF!"}
        </p>
      </div>
    </motion.div>
  )
}