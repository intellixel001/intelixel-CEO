"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface LinksProps {
  scrolled: boolean;
}

export default function Links({ scrolled }: LinksProps) {
  const pathname = usePathname();
  
  return (
    <ul className="flex space-x-6 z-400">
      {[
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/our-products", label: "Products" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ].map((link) => (
        <li key={link.href} className="group relative">
          <Link
            prefetch={true}
            className={`text-sm font-medium transition-colors duration-300 ${
              pathname === link.href
                ? "text-primary"
                : scrolled
                  ? "text-white hover:text-primary" // Adjust colors when scrolled
                  : "text-muted-foreground hover:text-secondary-foreground"
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
          {pathname === link.href && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
          )}
        </li>
      ))}
    </ul>
  );
}