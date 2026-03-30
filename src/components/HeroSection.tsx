"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pb-40 flex items-start pt-60 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(97,71,189,0.08),transparent_70%)]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full -z-20 opacity-20 blur-3xl bg-gradient-to-bl from-secondary to-transparent"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-right">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary font-bold text-sm mb-6 tracking-wide">
            טכנולוגיית איתור נזילות מתקדמת
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
            העתיד של איתור <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">נזילות מים</span> כבר כאן
          </h1>

          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
            דיוק מקסימלי, מינימום הרס. אנו משלבים טכנולוגיה אקוסטית, תרמית וגז כדי למצוא כל נזילה בדיוק כירורגי.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(97,71,189,0.3)] hover:scale-105 transition-transform duration-300"
            >
              קבל הצעת מחיר
            </button>

          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
            <img

              alt="איתור נזילות מתקדם"
              className="w-full min-h-[250px] lg:min-h-[414px]  h-auto object-cover rounded-xl"
              src="https://d3m9l0v76dty0.cloudfront.net/system/photos/12639273/extra_large/59e69889c8d6451b5840d98da69af447.jpg"
            />
          </div>

          {/* Floating Technical Stats */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 hidden lg:block">
            <div className="flex items-center gap-4">

              <div>
                <div className="text-2xl font-black text-on-surface">99.9%</div>
                <div className="text-xs text-on-surface-variant font-medium">דיוק באיתור מוקדי נזילה</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
