import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "photo_camera",
    iconColor: "text-primary",
    title: "איתור נזילות ובעיות רטיבות",
    description:
      "איתור מדויק של נזילות במים וביוב ללא הרס, באמצעות ציוד מתקדם וטכנולוגיות חדישות.",
    variant: "large" as const,
  },
  {
    icon: "hearing",
    iconColor: "text-secondary",
    title: "צילום וחידוש צנרת",
    description:
      "מצלמה אופטית לבדיקת מצב הצנרת ושיקום בשיטת הפאץ' המהפכנית ללא הרס.",
    variant: "medium" as const,
  },
  {
    icon: "air",
    iconColor: "text-tertiary",
    title: "איתור נזילות תת קרקעיות",
    description:
      "זיהוי נזילות מתחת לקרקע באמצעות טכנולוגיות מתקדמות כולל מצלמה תרמית.",
    variant: "medium" as const,
  },
  {
    icon: "analytics",
    iconColor: "text-secondary",
    title: "ייבוש ושיקום נזקי מים",
    description:
      "ייבוש תת רצפתי מקצועי ושיקום מלא של נזקי מים בבית או במבנה מסחרי.",
    variant: "small" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK3V1zq-cdBrwiTzZ53G71qxoa62N1yJNNgJcwf39AjQl0xcEMJUr7vIO5sh4x4ESPTgtxPkpGay9f6FClXki8Sf1BLCu8NvmsxfG-sF6RnFlQKAQEZAiiwNKpBQUvhA8uQJ1SIY4Y6ArqMS1KijPQMOWBhXbWVyX7X7w2Q_GU34n7Ipx1_SabzyPkEj7npubmoCfLUJ6V2S5J6DusiyB51M-Hl550ZxeihEg0igHMGHUnGu_M4NmvgbGRZh6SslL_xe9j4EXeDI0",
    imageAlt: "דוח טכני מקצועי",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-on-surface mb-4">השירותים המקצועיים שלנו</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            מעטפת פתרונות טכנולוגיים לכל סוגי בעיות המים והתשתית
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      </div>
    </section>
  );
}
