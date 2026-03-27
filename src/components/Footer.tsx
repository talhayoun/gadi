import Icon from "./Icon";

const platformLinks = [
  { label: "לוח בקרה חכם", href: "#" },
  { label: "מאגר נתוני מים v2", href: "#" },
  { label: "מחשוב קצה לעיריות", href: "#" },
  { label: "ממשק API קוונטי", href: "#" },
];

const legalLinks = [
  { label: "מדיניות פרטיות", href: "#" },
  { label: "תנאי שימוש", href: "#" },
  { label: "סטטוס מערכת", href: "#" },
  { label: "שאלות נפוצות", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-screen-2xl mx-auto text-right">
        {/* Logo & Social */}
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline font-black text-cyan-700 text-xl mb-6">
            Matrix-טכנלוגיות
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
            מובילים את הדור הבא של טכנולוגיית איתור הנזילות. בנוי לביצועים, מאובטח לנצח.
          </p>
          <div className="flex flex-row-reverse gap-4">
            <a
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-cyan-600 transition-colors shadow-sm"
              href="#"
            >
              <Icon name="language" size={14} />
            </a>
            <a
              className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
              href="#"
            >
              <Icon name="terminal" size={14} />
            </a>
          </div>
        </div>

        {/* Platforms */}
        <div>
          <h5 className="text-slate-900 font-headline font-bold text-sm mb-6">
            פלטפורמות
          </h5>
          <ul className="space-y-4 text-sm">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-slate-500 hover:text-cyan-600 hover:underline transition-all"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Docs */}
        <div>
          <h5 className="text-slate-900 font-headline font-bold text-sm mb-6">
            משפטי ותמיכה
          </h5>
          <ul className="space-y-4 text-sm">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-slate-500 hover:text-cyan-600 hover:underline transition-all"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Command Center */}
        <div>
          <h5 className="text-slate-900 font-headline font-bold text-sm mb-6">
            מרכז בקרה
          </h5>
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
            <p className="text-slate-600 text-xs mb-4 font-bold">
              הירשמו לעדכוני טכנולוגיה ומבצעים.
            </p>
            <div className="flex flex-row-reverse gap-2">
              <input
                className="bg-slate-50 border border-slate-200 text-xs text-slate-900 rounded-lg p-3 flex-1 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                placeholder="email@leak-tech.io"
                type="email"
              />
              <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all hover:bg-cyan-700 active:scale-95">
                הצטרף
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-slate-200 flex flex-col md:flex-row-reverse justify-between items-center gap-4">
        <p className="text-slate-400 font-medium text-[11px] tracking-wider antialiased">
          © 2024 Matrix-טכנלוגיות - איתור נזילות מתקדם. כל הזכויות שמורות.
        </p>
        <div className="flex flex-row-reverse items-center gap-6">
          <span className="flex flex-row-reverse items-center gap-2 text-[10px] text-cyan-600 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(0,229,255,0.5)]" />
            מערכות תקינות
          </span>
          <span className="text-[10px] text-slate-400 font-bold uppercase">v4.0.2-STABLE</span>
        </div>
      </div>
    </footer>
  );
}
