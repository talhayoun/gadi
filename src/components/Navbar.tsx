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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            className="hidden md:block bg-gradient-to-r from-primary to-primary-container text-white px-5 md:px-6 py-2.5 rounded-full font-bold scale-95 active:scale-90 transition-transform shadow-lg shadow-primary/20"
          >
            הזמן בדיקה
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 text-on-surface"
            aria-label="תפריט"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
            
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl md:hidden animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="סגור תפריט"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                <span className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Matrix-טכנלוגיות
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className={
                          link.active
                            ? "block text-secondary font-bold text-lg py-3 px-4 rounded-lg bg-secondary/5"
                            : "block text-slate-600 font-medium text-lg py-3 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                        }
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-slate-200">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                >
                  הזמן בדיקה
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
