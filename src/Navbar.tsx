"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Demo", href: "/demo" },
  { name: "Journey", href: "/journey" },
  { name: "Tech", href: "/tech" },
  { name: "Impact", href: "/impact" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0071ce] text-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <span className="text-2xl font-bold text-[#ffc220]">Walmart</span>
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        <ul className="hidden sm:flex gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors px-2 py-1 ${
                  pathname === link.href
                    ? "text-[#ffc220] border-b-2 border-[#ffc220]"
                    : "hover:text-[#ffc220]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col sm:hidden gap-2 mt-3 bg-[#0071ce] rounded shadow-lg p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-2 py-2 rounded transition-colors w-full text-left ${
                  pathname === link.href
                    ? "text-[#ffc220] underline underline-offset-4"
                    : "hover:text-[#ffc220]"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 