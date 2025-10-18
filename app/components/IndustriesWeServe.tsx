import { FiTrendingUp, FiHeart, FiWifi, FiShoppingCart, FiHome, FiTruck, FiCode, FiZap, FiBook, FiShoppingBag, FiGlobe } from "react-icons/fi";

const IndustriesSection = () => {
  const industries = [
    {
      name: "Financial Technology",
      icon: <FiTrendingUp className="text-teal-400" size={20} />,
      description: "Secure payment systems and financial analytics",
      color: "from-teal-500/10 to-teal-700/5",
    },
    {
      name: "Medical & Healthcare",
      icon: <FiHeart className="text-rose-400" size={20} />,
      description: "Telehealth and patient data solutions",
      color: "from-rose-500/10 to-rose-700/5",
    },
    {
      name: "Telecommunications",
      icon: <FiWifi className="text-indigo-400" size={20} />,
      description: "IoT and network optimization platforms",
      color: "from-indigo-500/10 to-indigo-700/5",
    },
    {
      name: "E-Commerce",
      icon: <FiShoppingCart className="text-amber-400" size={20} />,
      description: "Scalable stores and checkout systems",
      color: "from-amber-500/10 to-amber-700/5",
    },
    {
      name: "Property & Real Estate",
      icon: <FiHome className="text-emerald-400" size={20} />,
      description: "CRM and property management tools",
      color: "from-emerald-500/10 to-emerald-700/5",
    },
    {
      name: "Automotive Solutions",
      icon: <FiTruck className="text-orange-400" size={20} />,
      description: "Fleet tracking and dealer platforms",
      color: "from-orange-500/10 to-orange-700/5",
    },
    {
      name: "Software Development",
      icon: <FiCode className="text-blue-400" size={20} />,
      description: "SaaS and enterprise software",
      color: "from-blue-500/10 to-blue-700/5",
    },
    {
      name: "Startup Ecosystems",
      icon: <FiZap className="text-yellow-400" size={20} />,
      description: "MVPs and scalable growth tools",
      color: "from-yellow-500/10 to-yellow-700/5",
    },
    {
      name: "Educational Technology",
      icon: <FiBook className="text-cyan-400" size={20} />,
      description: "E-learning and educational apps",
      color: "from-cyan-500/10 to-cyan-700/5",
    },
    {
      name: "Retail Innovation",
      icon: <FiShoppingBag className="text-pink-400" size={20} />,
      description: "Omnichannel and POS solutions",
      color: "from-pink-500/10 to-pink-700/5",
    },
    {
      name: "Non-Profit Solutions",
      icon: <FiGlobe className="text-green-400" size={20} />,
      description: "Fundraising and impact tracking",
      color: "from-green-500/10 to-green-700/5",
    },
    {
      name: "Custom Solutions",
      icon: <FiGlobe className="text-gray-400" size={20} />,
      description: "Tailored tech for unique needs",
      color: "from-gray-500/10 to-gray-700/5",
    },
  ];

  return (
    <section className="relative py-8 px-4 sm:px-6">
      {/* Subtle background accents */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-5 left-5 w-32 h-32 rounded-full bg-teal-400/5 blur-xl animate-pulse md:w-48 md:h-48"></div>
        <div className="absolute bottom-5 right-5 w-32 h-32 rounded-full bg-indigo-400/5 blur-xl animate-pulse delay-700 md:w-48 md:h-48"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
              Sectors We Transform
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto mt-2">
            Cutting-edge solutions for diverse industries, built for impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`relative bg-gray-900/50 rounded-lg border border-gray-800 p-3 sm:p-4 transition-shadow duration-300 bg-gradient-to-br ${industry.color} hover:shadow-lg`}
            >
              <div className="flex items-center mb-2">
                <div className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 mr-2 sm:mr-3">
                  {industry.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-100">
                  {industry.name}
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-xs sm:text-sm text-gray-400 mb-4 max-w-md mx-auto">
            Don't see your sector? We craft solutions for your unique needs.
          </p>
          <a
            href="#"
            className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;