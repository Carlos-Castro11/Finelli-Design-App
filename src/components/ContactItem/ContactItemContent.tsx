// Icons
import Icon from "@/utils/Icon";
import Link from "next/link";

interface ContactItemContentProps {
  linkText: string;
  icon: string;
}

export default function ContactItemContent({
  linkText,
  icon,
}: ContactItemContentProps) {
  return (
    <Link href={""} className="flex gap-3 px-2 py-1 text-primary-color">
      <Icon name={icon} />
      <p>{linkText}</p>
    </Link>
  );
}
