// Components
import { CardRoot } from "./CardRoot";

interface CardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  isMiddleCard: boolean;
}

export default function Card({ title, text, icon, isMiddleCard }: CardProps) {
  return (
    <CardRoot.Wrapper isMiddleCard={isMiddleCard}>
      <CardRoot.Content>
        <CardRoot.Icon icon={icon} />
        <CardRoot.Title title={title} />
        <CardRoot.Text text={text} />
      </CardRoot.Content>
    </CardRoot.Wrapper>
  );
}
