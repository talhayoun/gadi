export default function TechnicalShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-6">
            הטכנולוגיה שלנו בפעולה
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            אנחנו עושים שימוש בציוד המתקדם ביותר בעולם כדי להבטיח איתור מדויק ללא שום נזק מיותר למבנה.
          </p>
        </div>

        <div className="space-y-32">
          {/* Thermal Camera Showcase */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-3/5 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100">
              <div className="relative group cursor-zoom-in">
                <img
                  alt="מצלמה תרמית"
                  className="w-full h-[400px] transition-transform duration-700 group-hover:scale-105"
                  src="https://d3m9l0v76dty0.cloudfront.net/system/photos/5198612/large/f3048505e5aa416540cb7d31c631b911.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    טכנולוגיית אינפרא-אדום
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8">
                <span className="material-symbols-outlined text-4xl">thermostat</span>
              </div>
              <h3 className="text-3xl font-bold text-on-surface mb-6">מצלמה תרמית</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                מצלמה תרמית פועלת לפי הפרשי טמפרטורה ונותנת אינדיקציה על מקומות בהם יש הימצאות של לחות מתחת לפני הקרקע. המצלמה מייעלת את תהליך איתור הנזילה בכך שניתן לזהות היכן יש ריכוז של מים מתחת פני הקרקע ומשם להסיק מסקנות מדויקות.
              </p>
              <button className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
                <span>לתיאום בדיקה תרמית</span>
                <span className="material-symbols-outlined">arrow_left_alt</span>
              </button>
            </div>
          </div>

          {/* Push Camera Showcase */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-3/5 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100">
              <div className="relative group cursor-zoom-in">
                <img
                  alt="מצלמת דחיפה"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://i.vevor.net/wp-content/uploads/2023/12/camera-in-sewer-line-inspection-b-10987_00-1024x624.png?x-oss-process=image/format%2Cwebp/resize%2Cw_900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    צילום פנים צנרת
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-8">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h3 className="text-3xl font-bold text-on-surface mb-6">מצלמת דחיפה - סיב אופטי</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                מצלמות לדחיפת צינורות הן מכשירים מיוחדים המורכבים ממצלמה עמידה למים המחוברת למוט גמיש, המיועדת לנווט בצינורות. הן משמשות לבדיקה ואבחון של בעיות בקווי ביוב, מערכות ניקוז או רשתות צינורות אחרות שאינן נגישות.
              </p>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                <span>קרא עוד על סיב אופטי</span>
                <span className="material-symbols-outlined">arrow_left_alt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
