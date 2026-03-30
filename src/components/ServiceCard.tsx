import Icon from "./Icon";

interface ServiceCardProps {
  icon: string;
  iconColor?: string;
  title: string;
  description: string;
  variant: "large" | "medium" | "small";
  image?: string;
  imageAlt?: string;
  sideIcon?: string;
}

export default function ServiceCard({
  icon,
  iconColor = "text-primary",
  title,
  description,
  variant,
  image,
  imageAlt = "",
  sideIcon,
}: ServiceCardProps) {
  if (variant === "large") {
    return (
      <div className="md:col-span-2 group bg-surface p-8 rounded-xl flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
        <div className="relative z-10">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon name={icon} className="text-3xl" size={30} />
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-on-surface-variant leading-relaxed max-w-md">{description}</p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-primary font-bold cursor-pointer">
          למידע נוסף
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl transition-all group-hover:bg-primary/10"></div>
      </div>
    );
  }

  if (variant === "medium") {
    return (
      <div className="group bg-surface p-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
        <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
          <Icon name={icon} className="text-3xl" size={30} />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
      </div>
    );
  }

  // small variant (for the second large card with image)
  return (
    <div className="md:col-span-2 group bg-surface p-8 rounded-xl flex flex-col justify-between overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5">
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
            <Icon name={icon} className="text-3xl" size={30} />
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-on-surface-variant leading-relaxed">{description}</p>
        </div>
        {image && (
          <div className="w-full md:w-64 rounded-lg overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
            <img alt={imageAlt} className="w-full h-48 object-cover" src={image} />
          </div>
        )}
      </div>
    </div>
  );
}
