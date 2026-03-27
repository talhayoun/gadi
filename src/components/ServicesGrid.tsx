import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "water_drop",
    iconColor: "text-cyan-600",
    title: "איתור נזילות ובעיות רטיבות",
    description:
      "איתור מדויק של נזילות במים וביוב ללא הרס, באמצעות ציוד מתקדם וטכנולוגיות חדישות.",
    variant: "large" as const,
    image:
      "https://plus.unsplash.com/premium_photo-1661921394349-9e3f394d80da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "איתור נזילות מקצועי",
  },
  {
    icon: "videocam",
    iconColor: "text-blue-500",
    title: "צילום וחידוש צנרת",
    description:
      "מצלמה אופטית לבדיקת מצב הצנרת ושיקום בשיטת הפאץ' המהפכנית ללא הרס.",
    variant: "medium" as const,
    sideIcon: "plumbing",
  },
  {
    icon: "explore",
    iconColor: "text-amber-600",
    title: "איתור נזילות תת קרקעיות",
    description:
      "זיהוי נזילות מתחת לקרקע באמצעות טכנולוגיות מתקדמות כולל מצלמה תרמית.",
    variant: "small" as const,
  },
  {
    icon: "home_repair_service",
    iconColor: "text-green-600",
    title: "ייבוש ושיקום נזקי מים",
    description:
      "ייבוש תת רצפתי מקצועי ושיקום מלא של נזקי מים בבית או במבנה מסחרי.",
    variant: "small" as const,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-right">
        <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-cyan-600 font-bold mb-4">
          המערכת שלנו
        </h2>
        <h3 className="font-headline text-4xl font-extrabold text-slate-900 leading-tight">
          פתרונות טכנולוגיים משולבים
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
