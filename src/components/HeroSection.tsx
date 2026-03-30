"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pb-40 flex items-start pt-40 md:pt-60 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(97,71,189,0.08),transparent_70%)]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full -z-20 opacity-20 blur-3xl bg-gradient-to-bl from-secondary to-transparent"></div>
      
      {/* Animated Water Droplets */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Row 1 - Top */}
        <div className="absolute top-[5%] right-[10%] w-4 h-4 bg-primary/30 rounded-full animate-[ping_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-[8%] right-[35%] w-3 h-3 bg-secondary/25 rounded-full animate-[ping_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-[12%] right-[60%] w-5 h-5 bg-tertiary/30 rounded-full animate-[ping_6s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-[10%] right-[85%] w-3.5 h-3.5 bg-primary/25 rounded-full animate-[ping_5.5s_ease-in-out_infinite_1.5s]"></div>
        
        {/* Row 2 - Upper Middle */}
        <div className="absolute top-[22%] right-[15%] w-3 h-3 bg-secondary/30 rounded-full animate-[ping_4.5s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-[25%] right-[45%] w-4 h-4 bg-primary/30 rounded-full animate-[ping_5s_ease-in-out_infinite_1.2s]"></div>
        <div className="absolute top-[28%] right-[70%] w-3.5 h-3.5 bg-tertiary/25 rounded-full animate-[ping_6s_ease-in-out_infinite_2.5s]"></div>
        <div className="absolute top-[20%] right-[90%] w-4.5 h-4.5 bg-secondary/30 rounded-full animate-[ping_4s_ease-in-out_infinite_0.8s]"></div>
        
        {/* Row 3 - Middle */}
        <div className="absolute top-[38%] right-[8%] w-3.5 h-3.5 bg-tertiary/30 rounded-full animate-[ping_5.5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-[42%] right-[28%] w-4 h-4 bg-primary/25 rounded-full animate-[ping_4s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-[45%] right-[55%] w-5 h-5 bg-secondary/30 rounded-full animate-[ping_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-[40%] right-[78%] w-3 h-3 bg-tertiary/25 rounded-full animate-[ping_5s_ease-in-out_infinite_1.8s]"></div>
        
        {/* Row 4 - Lower Middle */}
        <div className="absolute top-[55%] right-[12%] w-4 h-4 bg-primary/30 rounded-full animate-[ping_5s_ease-in-out_infinite_0.3s]"></div>
        <div className="absolute top-[58%] right-[40%] w-3.5 h-3.5 bg-secondary/25 rounded-full animate-[ping_4.5s_ease-in-out_infinite_1.5s]"></div>
        <div className="absolute top-[60%] right-[65%] w-4.5 h-4.5 bg-tertiary/30 rounded-full animate-[ping_6s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-[57%] right-[88%] w-3 h-3 bg-primary/25 rounded-full animate-[ping_5.5s_ease-in-out_infinite_2.2s]"></div>
        
        {/* Row 5 - Bottom */}
        <div className="absolute top-[72%] right-[18%] w-3.5 h-3.5 bg-secondary/30 rounded-full animate-[ping_4s_ease-in-out_infinite_1.8s]"></div>
        <div className="absolute top-[75%] right-[48%] w-4 h-4 bg-primary/30 rounded-full animate-[ping_5.5s_ease-in-out_infinite_0.8s]"></div>
        <div className="absolute top-[78%] right-[72%] w-5 h-5 bg-tertiary/25 rounded-full animate-[ping_6s_ease-in-out_infinite_1.2s]"></div>
        <div className="absolute top-[70%] right-[92%] w-3 h-3 bg-secondary/25 rounded-full animate-[ping_4.5s_ease-in-out_infinite_2.5s]"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-1 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
            העתיד של איתור <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">נזילות מים</span> כבר כאן
          </h1>

          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl mx-auto">
            איתור נזילות וטיפול בנזקי מים בטכנולוגיה מתקדמת ללא הרס
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                payments
              </span>
              <span className="text-xs md:text-sm font-semibold text-on-surface text-center">
                חיסכון של אלפי שקלים
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-secondary/10 hover:border-secondary/30 transition-colors">
              <div className="text-3xl font-black text-secondary">36</div>
              <span className="text-xs md:text-sm font-semibold text-on-surface text-center">
                חודשי אחריות
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-tertiary/10 hover:border-tertiary/30 transition-colors">
              <span className="material-symbols-outlined text-3xl text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>
                gpp_good
              </span>
              <span className="text-xs md:text-sm font-semibold text-on-surface text-center">
                ללא נזק למבנה
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                speed
              </span>
              <span className="text-xs md:text-sm font-semibold text-on-surface text-center">
                תגובה תוך שעות
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(97,71,189,0.3)] hover:scale-105 transition-transform duration-300"
            >
             צרו איתנו קשר
            </button>

            {/* Phone Number with Animation */}
            <a
              href="tel:0505750724"
              className="group flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-full font-bold text-lg hover:border-primary hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom-4 delay-300"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary group-hover:text-primary-container transition-colors">
                050-575-0724
              </span>
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                call
              </span>
            </a>
          </div>
        </div>

        <div className="order-2 relative">
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
