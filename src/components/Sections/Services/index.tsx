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
    <section id="services">
      <TitleSection title={ConstantsTitles.SERVICES_TITLE} />
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card
            title="consultorias"
            text={lorem}
            icon={<Icon name="MessagesSquare" size={55} />}
          />
          <Card
            title="projetos de interiores"
            text={lorem}
            icon={<Icon name="PencilRuler" size={55} />}
          />
          <Card
            title="Renderizações"
            text={lorem}
            icon={<Icon name="Image" size={55} />}
          />
        </div>
      </Container>
    </section>
  );
}
