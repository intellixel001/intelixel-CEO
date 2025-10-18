import {
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function IntellixelAtAGlance() {
  const services = [
    {
      icon: <CodeBracketSquareIcon className="h-8 w-8 text-primary" />,
      title: "Web App Development",
      description:
        "High-performance, scalable web apps built with cutting-edge tech like React.js and Next.js.",
      features: [
        "Custom web apps",
        "AI-integrated SaaS",
        "React/Next.js frontends",
        "Node.js backends",
        "Fullstack solutions",
      ],
      accent: "bg-gradient-to-r from-primary to-indigo-900",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />,
      title: "Mobile App Development",
      description:
        "Innovative Android and iOS apps optimized for performance and scalability.",
      features: [
        "Native Android apps",
        "Cross-platform apps",
        "Enterprise solutions",
        "Performance optimized",
        "User-focused design",
      ],
      accent: "bg-gradient-to-r from-primary to-purple-900",
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description:
        "Intuitive and engaging user interfaces crafted to enhance user experience and satisfaction.",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Interactive UI design",
        "Usability testing",
        "Design systems",
      ],
      accent: "bg-gradient-to-r from-primary to-cyan-900",
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-primary" />,
      title: "Digital Transformation",
      description:
        "Strategic digital modernization with transformative technologies.",
      features: [
        "Process automation",
        "Cloud migration",
        "Legacy system updates",
        "Workflow optimization",
        "Future-proofing",
      ],
      accent: "bg-gradient-to-r from-primary to-orange-900",
    },
  ];

  return (
    <section
      id="ataglance"
      className="relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-48 h-32 md:h-48 rounded-full bg-primary/10 blur-3xl animate-float1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-56 h-40 md:h-56 rounded-full bg-primary/10 blur-3xl animate-float2"></div>
        <div className="absolute top-1/3 right-1/3 w-28 md:w-40 h-28 md:h-40 rounded-full bg-primary/10 blur-3xl animate-float3"></div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Our Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-sidebar-ring mb-4">
            Intelixel at a Glance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for comprehensive digital solutions and
            transformation
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Link href="/services" key={index}>
              <div
                key={index}
                className="relative bg-card/80 backdrop-blur-md rounded-xl border border-border/50 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/70 group"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-xl border-2 border-transparent ${service.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-full bg-primary/10 mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h2
                      className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text ${service.accent}`}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 text-base">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-muted-foreground text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
