import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NewsLetter from "./NewsLetter";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] !important py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/intelixel.png"
              alt="intelixel logo"
              width={150}
              height={90}
            />
            <p className="text-gray-400 leading-relaxed">
              Empowering innovation through cutting-edge technology and creative
              solutions.
            </p>
            <div className="flex space-x-5">
              <Link
                href="https://www.facebook.com/Intelixel.bd"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                aria-label="Facebook"
                title="Facebook page"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              {/* <Link
                href="https://www.instagram.com/sami_intx/"
                className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </Link> */}
              {/* <Link
                href="https://x.com/xyz_sami"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="X"
                title="X"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/company/intellixel-12/"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/our-work", label: "Our Work" },
                { href: "/products", label: "Our Products" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/faqs", label: "FAQs" },
                // { href: "/affiliate-program", label: "Affiliate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-white transition-colors duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  House :93-94, Road 6 Block E, Section 11, Mirpur 11, Dhaka,
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <a href="tel:+8801522117125" className="flex items-center">
                  <FaPhone className="text-gray-400 mr-3" />
                  <span className="text-gray-400">+8801724-304107</span>
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-3" />
                <a
                  href="mailto:info@adletica.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  info@adletica.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <NewsLetter />
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Intelixel. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
