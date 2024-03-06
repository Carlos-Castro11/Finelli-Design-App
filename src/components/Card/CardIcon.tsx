interface CardIconProps {
  icon: React.ReactNode;
}

export default function CardIcon({ icon }: CardIconProps) {
  return <div className="flex justify-center text-primary-color">{icon}</div>;
}
