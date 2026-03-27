"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661921394349-9e3f394d80da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        {/* White overlay to reduce image prominence */}
        <div className="absolute inset-0 bg-white/85" />
        
        {/* Gradient blurs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-50/40 blur-[150px] rounded-full" />
        
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00E5FF 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">


        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          איתור נזילות ב<span className="text-cyan-600 text-glow">טכנולוגיה מתקדמת</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium tracking-wide">
          דיוק מקסימלי ללא הרס באמצעות תשתיות ניטור חכמות וחיישנים מהדור הבא.
        </p>

        <div className="flex flex-col md:flex-row-reverse gap-6 justify-center items-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-10 py-4 bg-cyan-600 text-white font-headline font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-cyan-200"
          >
            <span className="relative z-10">הזמן בדיקה עכשיו</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 border-2 border-slate-200 hover:border-cyan-400 text-slate-700 font-headline font-bold rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/50"
          >
            איך זה עובד?
          </button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
