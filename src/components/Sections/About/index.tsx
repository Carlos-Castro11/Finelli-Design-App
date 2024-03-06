// Components
import { ProfileRoot } from "@/components/Profile/ProfileRoot";
import CardWrapper from "@/components/Card/CardWrapper";
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
        <CardWrapper>
          <ProfileRoot.Image />
          <ProfileRoot.Content />
        </CardWrapper>
      </Container>
    </section>
  );
}
