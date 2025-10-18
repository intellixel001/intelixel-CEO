import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";

export const metadata: Metadata = {
  title: "About Intellixel - Innovative Digital Solutions Provider",
  description:
    "Learn about Intellixel, a leading digital solutions provider transforming businesses with innovative technology. Meet our founders and discover our story of creativity and excellence.",
  keywords: [
    "Intelixel",
    "digital solutions",
    "web development",
    "mobile apps",
    "technology innovation",
    "business transformation",
    "creative tech solutions",
  ],
  openGraph: {
    title: "About Intellixel - Transforming Businesses with Technology",
    description:
      "Discover Intellixel's story, our passionate team, and how we empower businesses with cutting-edge digital solutions.",
    url: "https://www.intellixel.com/about",
    siteName: "Intellixel",
    images: [
      {
        url: "https://www.intellixel.com/AboutShot.png",
        width: 1200,
        height: 630,
        alt: "Intellixel Founders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Intellixel - Innovative Digital Solutions",
    description:
      "Explore Intellixel's mission to transform businesses through innovative technology and meet our dedicated team.",
    images: ["https://www.intellixel.com/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.intellixel.com/about",
  },
};

const AboutUs = () => {
  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Story
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Intellixel is a dynamic team driven by a shared vision to deliver
            exceptional digital solutions that empower businesses worldwide.
          </p>
        </div>

        {/* Animated gradient circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-blue-900/30 blur-3xl animate-pulse delay-300"></div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Visionaries Leading Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Our founders sparked Intellixel’s journey, supported by a talented
            team dedicated to creating impactful digital experiences.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"> */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="relative group mb-8">
              <Image
                src="/founders/Shamim Sabuj1.png"
                alt="Shamim Sabuj"
                width={250}
                height={250}
                className="rounded-lg object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg italic">
                  "Every great product begins with understanding the human
                  behind the need."
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold">Shamim Sabuj</h3>
            <p className="text-gray-400 mt-2 max-w-md text-center">
              A creative thinker, Shamim ensures every solution delivers real
              value by bridging business goals with user needs.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.linkedin.com/in/shamim-sabuj-019249225/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-gray-400 hover:text-blue-400 text-xl" />
              </Link>
              <Link
                href="https://www.facebook.com/shamim.sabuj.2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-gray-400 hover:text-blue-400 text-xl" />
              </Link>
              <Link
                href="https://www.instagram.com/shamim_sabuj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-gray-400 hover:text-blue-400 text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Core Beliefs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 bg-gray-800 p-4 rounded-full">
                <FaLightbulb className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Innovation Through Constraints
                </h3>
                <p className="text-gray-400">
                  We believe limitations breed creativity. Rather than seeing
                  constraints as obstacles, we view them as opportunities to
                  innovate and find elegant solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 bg-gray-800 p-4 rounded-full">
                <FaGlobe className="text-purple-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Global Impact, Local Understanding
                </h3>
                <p className="text-gray-400">
                  While we serve clients worldwide, we approach each project
                  with cultural sensitivity and local market understanding to
                  create truly effective solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 bg-gray-800 p-4 rounded-full">
                <MdOutlineDesignServices className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Design with Purpose
                </h3>
                <p className="text-gray-400">
                  Every pixel and line of code serves a purpose. We reject
                  superficial aesthetics in favor of intentional design that
                  enhances functionality and user experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 bg-gray-800 p-4 rounded-full">
                <FaHandshake className="text-purple-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Partnership Over Transaction
                </h3>
                <p className="text-gray-400">
                  We build long-term relationships with our clients, becoming an
                  extension of their team rather than just another vendor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It All Began
        </h2>

        <div className="space-y-12">
          <div className="relative pl-8 border-l-2 border-gray-800">
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <h3 className="text-xl font-semibold mb-3">The Spark</h3>
            <p className="text-gray-400">
              Our team recognized a critical need in the tech
              industry—businesses seeking digital partners who genuinely
              understand their unique challenges. This inspired us to deliver
              solutions that seamlessly combine technical excellence with
              strategic vision.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-800">
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <h3 className="text-xl font-semibold mb-3">The Vision</h3>
            <p className="text-gray-400">
              We envisioned a digital studio where innovation meets
              practicality, delivering tailored solutions that empower
              businesses. Our team works collaboratively to ensure every project
              reflects our commitment to excellence.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-800">
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <h3 className="text-xl font-semibold mb-3">The Journey</h3>
            <p className="text-gray-400">
              From late-night brainstorming to a thriving studio, our team’s
              dedication to quality and client success has shaped Intellixel
              into a trusted partner for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 border border-gray-800 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to turn your ideas into reality with innovative
            digital solutions. Let’s collaborate to create something
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Link href="/book-meeting">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all hover:scale-105 focus:outline-none active:scale-95 flex items-center mx-auto group">
                Book a meeting
                <IoIosArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link
              href="https://wa.me/+8801724304107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg transition-all hover:scale-105 focus:outline-none active:scale-95 flex items-center mx-auto group">
                Contact via WhatsApp
                <FaWhatsapp className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://www.facebook.com/intellixel.bd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-gray-400 hover:text-blue-400 text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/intellixel-12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-gray-400 hover:text-blue-400 text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
