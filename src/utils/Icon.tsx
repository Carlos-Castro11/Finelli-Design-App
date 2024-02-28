import { icons } from "lucide-react";

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon />;
};

export default Icon;
