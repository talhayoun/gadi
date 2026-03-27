import Icon from "./Icon";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <li className="flex flex-row-reverse items-start gap-4">
      <Icon name={icon} className="text-cyan-600 mt-1" />
      <div>
        <span className="block text-slate-900 font-bold font-headline uppercase tracking-wider text-sm">
          {title}
        </span>
        <span className="text-sm text-slate-500">{description}</span>
      </div>
    </li>
  );
}
