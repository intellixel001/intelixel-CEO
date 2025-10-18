"use client";
import { motion, useAnimation, PanInfo } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useNav } from "@/context/NavContext";
import classes from "./styles/index1.module.css";
import { FiX, FiHexagon } from "react-icons/fi";
import { useEffect } from "react";

function SideNav() {
  const { isOpen, setIsOpen } = useNav();
  const pathname = usePathname();
  const controls = useAnimation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/our-products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    controls.start(isOpen ? "open" : "closed");
  }, [isOpen, controls]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -100) {
      setIsOpen(false);
    }
  };

  const variants = {
    open: { x: 0 },
    closed: { x: -500 },
  };

  return (
    <motion.div
      initial="closed"
      animate={controls}
      variants={variants}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className={`${classes.sideNav} fixed top-0 left-0 h-screen w-80 bg-background backdrop-blur-lg border-r border-border z-50 md:hidden touch-pan-y`}
    >
      {/* Header with logo and close button */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/intellixel-white.png"
            alt="Intellixel Logo"
            width={120}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Close menu"
        >
          <FiX
            className="text-muted-foreground hover:text-secondary-foreground"
            size={24}
          />
        </button>
      </div>

      {/* Navigation links - now swipeable area */}
      <motion.div
        className="h-[calc(100%-120px)] overflow-y-auto"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <ul className="p-6 space-y-2">
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                prefetch={true}
                onClick={() => setIsOpen(false)}
                href={item.href}
                className={`flex items-center py-3 px-4 rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-muted text-primary font-medium"
                    : "text-secondary-foreground hover:text-secondary-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Footer area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Intelixel
          </p>
          {/* Theme toggle removed */}
        </div>
      </div>
    </motion.div>
  );
}

export default SideNav;
