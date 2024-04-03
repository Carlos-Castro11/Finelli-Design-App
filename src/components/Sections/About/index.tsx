// Components
import { ProfileRoot } from "@/components/Profile/ProfileRoot";
import MainTitle from "@/components/MainTitle";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";
import Education from "@/components/Education";

// Data
import { EducationData } from "@/Database/Profile";

export default function About() {
  return (
    <section id="about" className="mt-4">
      <MainTitle title={ConstantsTitles.ABOUT_TITLE} />
      <Container>
        <ProfileRoot.Wrapper>
          <ProfileRoot.Content />
          <h3 className="text-xl mb-1 text-primary-color">Formações:</h3>
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
            {EducationData.map((education) => (
              <Education
                key={education.id}
                course={education.course}
                university={education.university}
                time={education.duration}
              />
            ))}
          </div>
        </ProfileRoot.Wrapper>
      </Container>
    </section>
  );
}
