// Components
import { ProfileRoot } from "@/components/Profile/ProfileRoot";
import ServiceWrapper from "@/components/Service/ServiceWrapper";
import TitleSection from "@/components/TitleSection";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";

export default function About() {
  return (
    <section className="mt-8 ">
      <TitleSection title={ConstantsTitles.ABOUT_TITLE} />
      <Container>
        <ServiceWrapper>
          <ProfileRoot.Image />
          <ProfileRoot.Content />
        </ServiceWrapper>
      </Container>
    </section>
  );
}
