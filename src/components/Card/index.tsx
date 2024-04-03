// Components
import DefaultText from "../DefaultText";
import SecondTitle from "../SecondTitle";
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
        <SecondTitle title={title} />
        <DefaultText text={text} />
      </CardRoot.Content>
    </CardRoot.Wrapper>
  );
}
