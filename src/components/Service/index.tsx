import { ServiceRoot } from "./ServiceRoot";

interface ServiceProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function Service({ title, text, icon }: ServiceProps) {
  return (
    <ServiceRoot.Wrapper>
      <ServiceRoot.Content title={title} text={text} icon={icon} />
    </ServiceRoot.Wrapper>
  );
}
