// Constants
import { ConstantsTitles } from "../../../constants/index";

// Components
import Project from "@/components/Project";
import TitleSection from "@/components/TitleSection";

// Utils
import Container from "@/utils/Container";

// Data
import { ProjectsData } from "@/Database/Projects";

export default function Projects() {
  return (
    <section id="projects">
      <TitleSection
        title={ConstantsTitles.PROJECTS_TITLE}
        firstSection={true}
      />
      <Container>
        <div
          className={`
        mt-8 grid grid-cols-1 gap-4
        sm:grid-cols-2
        lg:grid-cols-3
        `}
        >
          {ProjectsData.map((item) => (
            <Project
              key={item.id}
              image={item.image}
              projectTitle={item.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
