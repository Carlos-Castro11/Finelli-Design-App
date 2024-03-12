// Components
import Card from "@/components/Card";
import TitleSection from "@/components/TitleSection";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";
import Icon from "@/utils/Icon";

// Data
import { ServicesData } from "@/Database/Services";

export default function Services() {
  return (
    <section id="services">
      <TitleSection title={ConstantsTitles.SERVICES_TITLE} />
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {ServicesData.map((card) => (
            <Card
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
