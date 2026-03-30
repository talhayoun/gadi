export default function TechnicalShowcase() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 blur-3xl opacity-30 scale-110"></div>
            
            <h2 className="relative text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="flex items-center justify-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-5xl md:text-6xl animate-pulse">verified</span>
                <span className="bg-gradient-to-l from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                  איתור חכם.
                </span>
              </span>
              <span className="flex items-center justify-center gap-3 mb-2">
                <span className="material-symbols-outlined text-secondary text-5xl md:text-6xl animate-pulse" style={{ animationDelay: '0.2s' }}>target</span>
                <span className="bg-gradient-to-l from-secondary via-tertiary to-primary bg-clip-text text-transparent">
                  מדויק.
                </span>
              </span>
              <span className="flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-5xl md:text-6xl animate-pulse" style={{ animationDelay: '0.4s' }}>shield_with_heart</span>
                <span className="bg-gradient-to-l from-tertiary via-primary to-secondary bg-clip-text text-transparent">
                  ללא הרס.
                </span>
              </span>
            </h2>
          </div>
          
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mt-8">
            במקום לנחש ולשבור קירות, אנחנו "רואים" דרכם. בעזרת טכנולוגיית אל-הרס מתקדמת, אנו מאתרים את מקור הנזילה בדיוק נקודתי, חוסכים לכם זמן יקר ושומרים על שלמות המבנה שלכם.
          </p>
        </div>

        <div className="relative">
          {/* Thermal Camera Showcase */}
          <div className="sticky top-20 mb-20 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100 animate-in fade-in duration-700">
            <div className="relative group h-[600px] lg:h-[500px]">
              <img
                alt="מצלמה תרמית"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://d3m9l0v76dty0.cloudfront.net/system/photos/5198612/large/f3048505e5aa416540cb7d31c631b911.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-right">
                <div className="max-w-2xl mr-auto">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white mb-6 shadow-lg">
                    <span className="material-symbols-outlined text-4xl">thermostat</span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      טכנולוגיית אינפרא-אדום
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">מצלמה תרמית</h3>
                  <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-6">
                    מצלמה תרמית פועלת לפי הפרשי טמפרטורה ונותנת אינדיקציה על מקומות בהם יש הימצאות של לחות מתחת לפני הקרקע. המצלמה מייעלת את תהליך איתור הנזילה בכך שניתן לזהות היכן יש ריכוז של מים מתחת פני הקרקע ומשם להסיק מסקנות מדויקות.
                  </p>
                  <button className="flex items-center gap-2 text-white bg-secondary/90 hover:bg-secondary px-6 py-3 rounded-full font-bold hover:gap-4 transition-all shadow-lg">
                    <span>לתיאום בדיקה תרמית</span>
                    <span className="material-symbols-outlined">arrow_left_alt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Push Camera Showcase */}
          <div className="sticky top-20 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100 animate-in fade-in duration-700 delay-300">
            <div className="relative group h-[600px] lg:h-[500px]">
              <img
                alt="מצלמת דחיפה"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://i.vevor.net/wp-content/uploads/2023/12/camera-in-sewer-line-inspection-b-10987_00-1024x624.png?x-oss-process=image/format%2Cwebp/resize%2Cw_900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-right">
                <div className="max-w-2xl mr-auto">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary text-white mb-6 shadow-lg">
                    <span className="material-symbols-outlined text-4xl">visibility</span>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      צילום פנים צנרת
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">מצלמת דחיפה - סיב אופטי</h3>
                  <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-6">
                    מצלמות לדחיפת צינורות הן מכשירים מיוחדים המורכבים ממצלמה עמידה למים המחוברת למוט גמיש, המיועדת לנווט בצינורות. הן משמשות לבדיקה ואבחון של בעיות בקווי ביוב, מערכות ניקוז או רשתות צינורות אחרות שאינן נגישות.
                  </p>
                  <button className="flex items-center gap-2 text-white bg-primary/90 hover:bg-primary px-6 py-3 rounded-full font-bold hover:gap-4 transition-all shadow-lg">
                    <span>קרא עוד על סיב אופטי</span>
                    <span className="material-symbols-outlined">arrow_left_alt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
