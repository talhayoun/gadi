"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";
import logo from "../logo.png"

const navLinks = [
  { label: "בית", href: "#", active: true },
  { label: "שירותים", href: "#services" },
  { label: "טכנולוגיה", href: "#tech" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-surface/70 backdrop-blur-3xl shadow-sm border-b border-slate-100 transition-colors duration-300">
        <div className="flex flex-row-reverse justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div>
            <Image
              src={logo}
              alt="Matrix-טכנלוגיות"
              width={180}
              height={60}
              className="object-contain mix-blend-multiply"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium tracking-tight text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={
                  link.active
                    ? "text-cyan-700 font-semibold border-b-2 border-cyan-500 pb-1"
                    : "hover:text-cyan-600 transition-colors"
                }
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-cyan-600 text-white font-headline font-bold px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 active:scale-95 uppercase tracking-wider text-sm"
          >
            הזמן בדיקה
          </button>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
