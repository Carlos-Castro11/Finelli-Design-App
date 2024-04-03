interface EducationItemProps {
  text: string;
  icon: React.ReactNode;
}

export default function EducationItem({ text, icon }: EducationItemProps) {
  return (
    <div className="flex gap-2">
      {icon}
      <p>{text}</p>
    </div>
  );
}
