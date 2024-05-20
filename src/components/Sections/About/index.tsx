// Icons
import GraduationIcon from "../../assets/Graduation";
import AwardIcon from "../../assets/Award";
import CalendarClockIcon from "../../assets/CalendarClock";

// Components
import { ProfileRoot } from "@/components/Profile/ProfileRoot";
import MainTitle from "@/components/MainTitle";
import { EducationRoot } from "../../Education/EducationRoot";

// Constants
import { ConstantsTitles } from "@/constants";

// Utils
import Container from "@/utils/Container";

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
              <EducationRoot.Wrapper key={education.id}>
                <EducationRoot.Content>
                  <EducationRoot.Item
                    icon={<AwardIcon />}
                    text={education.course}
                  />
                  <EducationRoot.Item
                    icon={<GraduationIcon />}
                    text={education.university}
                  />
                  <EducationRoot.Item
                    icon={<CalendarClockIcon />}
                    text={education.duration}
                  />
                </EducationRoot.Content>
              </EducationRoot.Wrapper>
            ))}
          </div>
        </ProfileRoot.Wrapper>
      </Container>
    </section>
  );
}
