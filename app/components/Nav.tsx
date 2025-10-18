"use client";
import { useNav } from "@/context/NavContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useRef, useState } from "react";
import Links from "./Links";
import classes from "./styles/index1.module.css";

export default function Nav() {
  const { setIsOpen } = useNav();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Mark as client-side to avoid hydration mismatch
    setIsClient(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction and position
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY <= 100 || currentScrollY < lastScrollY) {
        setVisible(true);
      }

      // Update scrolled state for background
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Use static values for SSR, updated on client
  const navBackground =
    isClient && scrolled
      ? "bg-black/100 backdrop-blur-lg border border-white/10 shadow-lg"
      : "bg-black/90 border border-white/10";

  const navStyle: CSSProperties = isClient
    ? {
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out, background 0.3s ease",
        visibility: visible ? "visible" : "hidden",
      }
    : {
        transform: "translateY(0)",
        transition: "transform 0.3s ease-in-out, background 0.3s ease",
        visibility: "visible",
      };

  if (/^\/portfolio\/[^\/]+$/.test(pathname)) {
    return null;
  }

  return (
    <>
      {/* Mobile Nav */}
      <nav
        ref={navRef}
        style={navStyle}
        className={`md:hidden fixed w-[calc(100%-2rem)] mx-4 top-4 left-0 z-50 ${navBackground} h-16 rounded-xl flex items-center justify-between px-6 transition-all duration-300`}
        suppressHydrationWarning
      >
        <div className="w-6" /> {/* Simplified spacer */}
        <Link href="/" className="flex items-center">
          <Image
            src="/intelixel.png"
            alt="Intelixel Logo"
            width={120}
            height={30}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-8 h-8 group focus:outline-none"
          aria-label="Menu"
        >
          <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                isClient && scrolled ? "bg-white" : "bg-white"
              } group-hover:bg-primary -translate-y-2`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                isClient && scrolled ? "bg-white" : "bg-white"
              } group-hover:bg-primary`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 transition-all duration-300 ${
                isClient && scrolled ? "bg-white" : "bg-white"
              } group-hover:bg-primary translate-y-2`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Desktop Nav */}
      <nav
        ref={navRef}
        style={navStyle}
        className={`hidden md:block fixed w-[calc(100%-10rem)] mx-auto top-6 left-0 right-0 z-50 ${navBackground} h-16 rounded-xl transition-all duration-300 max-w-6xl`}
        suppressHydrationWarning
      >
        <div className="container mx-auto px-8 flex items-center justify-between h-full">
          <Link href="/" className={`${classes.logo} group flex items-center`}>
            <Image
              src="/intelixel.png"
              alt="Intelixel Logo"
              width={160}
              height={40}
              className="h-8 w-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <Links scrolled={isClient && scrolled} />
              <div className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/book-meeting"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isClient && scrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Book meeting
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
