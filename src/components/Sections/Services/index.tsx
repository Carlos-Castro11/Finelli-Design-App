// Components
import Card from "@/components/Card";
import MainTitle from "@/components/MainTitle";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";
import Icon from "@/utils/Icon";

// Data
import { ServicesData } from "@/Database/Services";

export default function Services() {
  return (
    <section id="services" className="mt-8">
      <MainTitle title={ConstantsTitles.SERVICES_TITLE} />
      <Container>
        <div className="grid lg:grid-cols-3 gap-8 p-1 lg:p-10">
          {ServicesData.map((card) => (
            <Card
              isMiddleCard={card.isMiddleCard ? card.isMiddleCard : false}
              key={card.id}
              title={card.title}
              text={card.text}
              icon={<Icon name={card.iconName} size={55} />}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
