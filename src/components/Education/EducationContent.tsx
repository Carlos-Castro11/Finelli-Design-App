interface EducationContentProps {
  children: React.ReactNode;
}

export default function EducationContent({ children }: EducationContentProps) {
  return <div className="grid gap-2 text-primary-color">{children}</div>;
}
