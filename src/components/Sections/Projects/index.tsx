// Constants
import { ConstantsTitles } from "../../../constants/index";

// Components
import Project from "@/components/Project";
import TitleSection from "@/components/TitleSection";

// Utils
import Container from "@/utils/Container";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <TitleSection title={ConstantsTitles.PROJECTS_TITLE} />
        <Container>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project image="spider-man.jpg" projectName="spider-man" />
            <Project image="iron-man.jpg" projectName="iron-man" />
            <Project image="groot.jpg" projectName="groot" />
            <Project image="spider-man.jpg" projectName="banheiro" />
            <Project image="iron-man.jpg" projectName="quarto de bebê" />
          </div>
        </Container>
      </section>
    </>
  );
}
