import { icons } from "lucide-react";

interface IconProps {
  name: string;
  size?: number | undefined;
}

const Icon = ({ name, size = 25 }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon size={size} />;
};

export default Icon;
