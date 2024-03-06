// Components
import Card from "@/components/Card";
import TitleSection from "@/components/TitleSection";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";
import Icon from "@/utils/Icon";

export default function Services() {
  let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non quibusdam vel voluptatem vitae 
  excepturi veritatis alias fuga nemo natus. Reprehenderit odit excepturi cupiditate 
  id! Ab placeat provident eos qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Voluptate, 
  non quibusdam vel voluptatem vitae excepturi veritatis alias fuga nemo natus. 
  Reprehenderit odit excepturi cupiditate id! Ab placeat provident eos qui? luptatem 
  vitae excepturi veritatis alias fuga nemo natus. 
  Reprehenderit odit excepturi cupiditate id! Ab placeat provident eos qui?  eos qui?`;
  return (
    <section id="services" className="mt-8">
      <TitleSection title={ConstantsTitles.SERVICES_TITLE} />
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="consultoria"
            text={lorem}
            icon={<Icon name="MessagesSquare" size={55} />}
          />
          <Card
            title="projeto de interiores"
            text={lorem}
            icon={<Icon name="PencilRuler" size={55} />}
          />
          <Card
            title="levantamento"
            text={lorem}
            icon={<Icon name="HardHat" size={55} />}
          />
        </div>
      </Container>
    </section>
  );
}
