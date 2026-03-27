interface IconProps {
  name: string;
  className?: string;
  size?: number;
  fill?: boolean;
}

export default function Icon({
  name,
  className = "",
  size = 24,
  fill = false,
}: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' ${size}`,
      }}
    >
      {name}
    </span>
  );
}
