// Components
import { ProfileRoot } from "@/components/Profile/ProfileRoot";
import { CardRoot } from "@/components/Card/CardRoot";
import TitleSection from "@/components/TitleSection";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";
import EducationWrapper from "@/components/Education/EducationWrapper";
import Education from "@/components/Education";

export default function About() {
  return (
    <section className="my-8">
      <TitleSection title={ConstantsTitles.ABOUT_TITLE} />
      <Container>
        <CardRoot.Wrapper>
          <CardRoot.Content>
            <ProfileRoot.Image />
            <CardRoot.Title title="giovana finelli" />
            <ProfileRoot.Content />
            <h3 className="text-xl text-primary-color">Formações:</h3>
            <Education
              course="Bacharel em Desgin de interiores / 5 anos"
              university="Universidade Cesumar"
            />
            <Education
              course="Bacharel em Arquitetura / 2 anos"
              university="Centro Universitário FIPMOC"
            />
            <Education
              course="Curso de Renderização / 35 horas"
              university="Professor Marcos João Claiton"
            />
          </CardRoot.Content>
        </CardRoot.Wrapper>
      </Container>
    </section>
  );
}
