"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl rounded-full mt-3 mx-auto w-[92%] max-w-6xl shadow-[0_20px_50px_rgba(97,71,189,0.15)]">
        <div className="flex flex-row-reverse justify-between items-center px-6 md:px-8 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Matrix-טכנלוגיות
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={
                  link.active
                    ? "text-secondary font-bold font-body text-base transition-all duration-300"
                    : "text-slate-600 font-body text-base font-medium hover:text-primary transition-all duration-300"
                }
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-primary to-primary-container text-white px-5 md:px-6 py-2.5 rounded-full font-bold scale-95 active:scale-90 transition-transform shadow-lg shadow-primary/20"
          >
            הזמן בדיקה
          </button>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
