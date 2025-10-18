import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import Work1Image1 from "@/public/suvash/Screenshot (2).png";
import Work1Image2 from "@/public/suvash/Screenshot (3).png";
import Work1Image3 from "@/public/suvash/Screenshot (4).png";
import Work1Image4 from "@/public/suvash/Screenshot (5).png";

import Work2Image5 from "@/public/greenvoltage/Screenshot (10).png";
import Work2Image1 from "@/public/greenvoltage/Screenshot (6).png";
import Work2Image2 from "@/public/greenvoltage/Screenshot (7).png";
import Work2Image3 from "@/public/greenvoltage/Screenshot (8).png";
import Work2Image4 from "@/public/greenvoltage/Screenshot (9).png";

import Work4Image1 from "@/public/dunevpn/1.png";
import Work3Image1 from "@/public/ssanimation/Screenshot (11).png";
import Work5Image1 from "@/public/two-brands/3.png";
import Work6Image1 from "@/public/swiplink/1.png";

const projects = [
  {
    id: "suvashedu",
    title: "Suvash Edu",
    category: "EdTech Platform",
    images: [Work1Image1, Work1Image2, Work1Image3, Work1Image4],
    demoUrl: "https://suvashedu.com",
    codeUrl: "https://github.com/user01samiul",
  },
  {
    id: "greenvoltagebd",
    title: "Green Voltage",
    category: "Energy Dashboard",
    images: [Work2Image1, Work2Image2, Work2Image3, Work2Image4, Work2Image5],
    demoUrl: "https://greenvoltagebd.com",
    codeUrl: "https://github.com/user01samiul",
  },
  {
    id: "ssanimationstudio",
    title: "SS Animation",
    category: "Studio Website",
    images: [Work3Image1],
    demoUrl: "https://ssanimationstudio.com",
  },
  {
    id: "dunevpn",
    title: "Express backend for dunevpn",
    category: "Vpn app",
    images: [Work4Image1],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.dunenetworks.dunevpn&hl=en",
    codeUrl: "https://github.com/user01samiul/vpn-backend",
  },
  {
    id: "beautybrand",
    title: "Beauty brand landing page",
    category: "Brand",
    images: [Work5Image1],
    demoUrl:
      "",
    codeUrl: "https://github.com/user01samiul/vpn-backend",
  },
    {
    id: "swiplink",
    title: "SwipLin",
    category: "Product",
    images: [Work6Image1],
    demoUrl: "https://swiplink.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="relative min-w-full py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        {/* Header */}
        <div className="w-full text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our 2025{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Portfolio
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Digital solutions that drive results
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project) => (
            <div
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              key={project.id}
            >
              {/* Project Image */}
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={90}
              />

              {/* Overlay Content - Visible always on mobile, on hover for desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-blue-400">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Link
                    href={project.demoUrl}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 group"
                  >
                    View case study
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={18} />
                      </Link>
                    )}
                    {project.codeUrl && (
                      <Link
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Source Code"
                      >
                        <FiGithub size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-gray-800 mb-20 text-center relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-blue-500/5 rounded-full filter blur-3xl animate-float3"></div>
      </div>
    </section>
  );
}
