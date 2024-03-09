// Components
import { ContactItemRoot } from "./ContactItemRoot";

interface ContactItemProps {
  link: string;
  linkText: string;
  icon: string;
}

export default function ContactItem({
  link,
  linkText,
  icon,
}: ContactItemProps) {
  return (
    <ContactItemRoot.Wrapper link={link}>
      <ContactItemRoot.Content icon={icon} linkText={linkText} />
    </ContactItemRoot.Wrapper>
  );
}
