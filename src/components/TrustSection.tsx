import FeatureItem from "./FeatureItem";
import Icon from "./Icon";

const features = [
  {
    icon: "verified",
    title: "ניטור שיהוי בזמן אמת",
    description: "תגובה תוך פחות ממילי-שנייה בכל חיישן וצומת ברשת.",
  },
  {
    icon: "architecture",
    title: "תכנון מודולרי מתקדם",
    description: "שילוב חלק עם מערכות קיימות ותשתיות אינסטלציה מכל סוג.",
  },
  {
    icon: "security",
    title: "הצפנה מקצה לקצה",
    description: "הגנה ברמה צבאית על כל הנתונים המועברים מהחיישנים לענן.",
  },
];

export default function TrustSection() {
  return (
    <section id="tech" className="py-24 bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center" style={{ direction: 'ltr' }}>


        <div className="text-right order-1 md:order-2">
          <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary font-bold mb-6">
            התחייבות לאיכות
          </h2>
          <h3 className="font-headline text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            100% דיוק בהנדסה
          </h3>
          <span className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">Matrix-טכנלוגיות</span>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
            , אנחנו לא רק מוצאים נזילות; אנחנו בונים את עתיד ניהול המים. הפרוטוקולים שלנו נבחנים תחת תנאי שטח קיצוניים כדי להבטיח אמינות מוחלטת בבתים פרטיים ובתשתיות לאומיות.
          </p>
          <ul className="space-y-6">
            {features.map((feature) => (
              <FeatureItem key={feature.icon} {...feature} />
            ))}
          </ul>
        </div>

        {/* Image with Decorative Borders */}
        <div className="relative">
          <div className="absolute -top-10 -start-10 w-40 h-40 border-t-2 border-s-2 border-primary/30" />
          <div className="absolute -bottom-10 -end-10 w-40 h-40 border-b-2 border-e-2 border-primary/30" />
          <div className="rounded-lg overflow-hidden shadow-2xl shadow-primary/10 aspect-square">
            <img

              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1685504603060-d6515b49d3d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          {/* Technical Overlay Card */}
          <div className="absolute bottom-12 -start-8 glass-panel p-6 rounded-lg border border-primary/30 max-w-[240px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="monitoring" className="text-primary" />
              </div>
              <span className="font-headline font-bold text-white text-sm">
                ניטור פעיל
              </span>
            </div>
            <div className="space-y-2">
              <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-4/5" />
              </div>
              <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                <span>עומס מערכת</span>
                <span>82%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
