import FeatureItem from "./FeatureItem";
import Icon from "./Icon";

const features = [
  {
    icon: "security",
    title: "דוח מקיף",
    description: "דוח מקיף הקביל לכל חברות הביטוח ובתי המשפט",
  },
  {
    icon: "description",
    title: "הסכם עבודה מפורט בלי התפעות",
    description: "מחירים שקופים וברורים מראש, ללא עלויות נסתרות או הפתעות לא נעימות.",
  },
];

export default function TrustSection() {
  return (
    <section id="tech" className="py-24 bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center" style={{ direction: 'ltr' }}>


        <div className="text-right order-1 md:order-2">
          <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6">
            שקט נפשי מובטח
          </h2>
          <h3 className="font-headline text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            100% איתור מדויק. 0% הרס.
          </h3>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium" style={{ direction: "rtl" }}>
            <strong className="text-slate-800">ב-Matrix-טכנולוגיות</strong> אנחנו מבינים את התסכול שגורמת נזילה. לכן, אנו משתמשים בציוד הנדסי מתקדם כדי לאתר את מקור הבעיה בדיוק מילימטרי. התוצאה? פתרון מהיר, חיסכון בעלויות שיפוץ, ודוח מקיף הקביל לכל חברות הביטוח ובתי משפט.
          </p>
          <ul className="space-y-6">
            {features.map((feature) => (
              <FeatureItem key={feature.icon} {...feature} />
            ))}
          </ul>
        </div>


      </div>
    </section>
  );
}
