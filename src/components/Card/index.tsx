import { CardRoot } from "./CardRoot";

interface CardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function Card({ title, text, icon }: CardProps) {
  return (
    <CardRoot.Wrapper>
      <CardRoot.Content title={title} text={text} icon={icon} />
    </CardRoot.Wrapper>
  );
}
