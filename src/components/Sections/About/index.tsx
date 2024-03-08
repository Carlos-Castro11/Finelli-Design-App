// Components
import { ProfileRoot } from "@/components/Profile/ProfileRoot";
import TitleSection from "@/components/TitleSection";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";
import Education from "@/components/Education";

export default function About() {
  return (
    <section className="my-8">
      <TitleSection title={ConstantsTitles.ABOUT_TITLE} />
      <Container>
        <ProfileRoot.Wrapper>
          <ProfileRoot.Content />
          <h3 className="text-xl mb-1 text-primary-color">Formações:</h3>
          <div className="grid gap-4">
            <Education
              course="Bacharel em Desgin de interiores"
              university="Universidade Cesumar"
              time="2 anos"
            />
            <Education
              course="Bacharel em Arquitetura"
              university="Centro Universitário FIPMOC"
              time="5 anos"
            />
          </div>
        </ProfileRoot.Wrapper>
      </Container>
    </section>
  );
}
