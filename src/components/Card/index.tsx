// Components
import { CardRoot } from "./CardRoot";

interface CardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function Card({ title, text, icon }: CardProps) {
  return (
    <CardRoot.Wrapper>
      <CardRoot.Content>
        <CardRoot.Icon icon={icon} />
        <CardRoot.Title title={title} />
        <CardRoot.Text text={text} />
      </CardRoot.Content>
    </CardRoot.Wrapper>
  );
}
