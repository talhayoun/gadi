import Icon from "./Icon";

const navigationLinks = [
  { label: "עמוד הבית", href: "#" },
  { label: "אודות", href: "#" },
  { label: "פרויקטים", href: "#" },
  { label: "בלוג", href: "#" },
  { label: "יצירת קשר", href: "#" },
];

const servicesLinks = [
  { label: "יבוש תת רצפתי", href: "#" },
  { label: "תיקון נזילה – תיקוני אל הרס למיניהם", href: "#" },
  { label: "איתור נזילה ללא הרס", href: "#" },
  { label: "איתור נזילות במצלמה תרמית", href: "#" },
];

const articlesLinks = [
  { label: "רטיבות קפילארית בקירות ובמרתפים – איך מזהים, מטפלים ומונעים", href: "#" },
  { label: "איתור נזילה בבריכות ובמזרקות – התחייבות לאיתור מלא", href: "#" },
  { label: "רטיבות לשכן? איתור נזילות בין דירות ובין קומות עם דוח משפטי", href: "#" },
  { label: "איתור נזילות במבנים גדולים – פתרונות לוועדי בתים, חניונים ובבנייני מגורים", href: "#" },
  { label: "ייבוש תת רצפתי", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Contact Section */}
          <div className="flex flex-col items-start md:items-end order-1 md:order-4 text-right">
            <h3 className="text-xl font-bold mb-6">מוקד Matrix לשירותכם</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              א' – ה' 8:00-19:00 | ימי ו' וערבי חג 8:00-15:00
            </p>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-2xl font-bold tracking-wider">050-575-0724</span>
              <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors">
                call
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-primary">
              ניווט
            </h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-slate-400 hover:text-white transition-colors text-sm" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-secondary">
              שירותים
            </h4>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-slate-400 hover:text-white transition-colors text-sm" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles Links */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-primary">
              מאמרים
            </h4>
            <ul className="space-y-4">
              {articlesLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-slate-400 hover:text-white transition-colors text-sm" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span>
              Website by <span className="text-white font-bold">Saglix</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="hover:text-white transition-colors" href="#">
              קידום אתרים ע"י סוכנות דיגיטל SpiderWeb
            </a>
            <a className="hover:text-white transition-colors" href="#">
              הצהרת נגישות
            </a>
            <a className="hover:text-white transition-colors" href="#">
              כל הזכויות שמורות ל-Matrix-טכנלוגיות בע"מ ©
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
