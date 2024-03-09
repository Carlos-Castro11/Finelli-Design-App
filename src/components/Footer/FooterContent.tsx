// Icons
import Logo from "../assets/Logo";

interface FooterContentProps {
  children: React.ReactNode;
}

export default function FooterContent({ children }: FooterContentProps) {
  return (
    <div className="bg-primary-color grid place-content-center py-5 gap-1">
      <div className={`grid gap-4`}>{children}</div>
    </div>
  );
}
