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
      <div className="md:col-span-2 md:row-span-2 glass-panel p-8 rounded-xl border border-outline-variant/20 flex flex-col justify-between group hover:bg-surface-container-high transition-all duration-500 neon-border-hover">
        <div>
          <Icon name={icon} className={`${iconColor} mb-6`} size={36} />
          <h4 className="font-headline text-2xl font-bold text-slate-900 mb-4">
            {title}
          </h4>
          <p className="text-slate-600 leading-relaxed text-lg">
            {description}
          </p>
        </div>
        {image && (
          <div className="mt-8">
            <div className="w-full h-48 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                alt={imageAlt}
                className="w-full h-full object-cover"
                src={image}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === "medium") {
    return (
      <div className="md:col-span-2 glass-panel p-8 rounded-xl border border-outline-variant/20 flex gap-6 items-center group hover:bg-surface-container-high transition-all duration-500 neon-border-hover">
        <div className="flex-1">
          <Icon name={icon} className={`${iconColor} mb-4`} size={30} />
          <h4 className="font-headline text-xl font-bold text-slate-900 mb-2">
            {title}
          </h4>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
        {sideIcon && (
          <div className="w-32 h-32 rounded-lg bg-surface-container-highest/50 flex-shrink-0 flex items-center justify-center">
            <Icon
              name={sideIcon}
              className="text-primary/20 group-hover:text-primary transition-all duration-500"
              size={48}
              fill
            />
          </div>
        )}
      </div>
    );
  }

  // small variant
  return (
    <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 group hover:bg-surface-container-high transition-all duration-500 neon-border-hover">
      <Icon name={icon} className={`${iconColor} mb-4`} size={30} />
      <h4 className="font-headline text-lg font-bold text-slate-900 mb-2">
        {title}
      </h4>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );
}
