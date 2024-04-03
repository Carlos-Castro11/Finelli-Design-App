// Constants
import { ConstantsTitles } from "../../../constants/index";

// Components
import Project from "@/components/Project";
import MainTitle from "@/components/MainTitle";

// Utils
import Container from "@/utils/Container";

// Data
import { ProjectsData } from "@/Database/Projects";

export default function Projects() {
  return (
    <section id="projects">
      <MainTitle title={ConstantsTitles.PROJECTS_TITLE} firstSection={true} />
      <Container>
        <div
          className={`
        mt-9 grid grid-cols-2 gap-x-5 gap-y-10
        lg:grid-cols-3
        `}
        >
          {ProjectsData.map((project) => (
            <Project
              key={project.id}
              image={project.image_cover}
              projectTitle={project.title}
              link={project.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
