import TitleSection from "@/components/TitleSection";

import { ConstantsTitles } from "../../../constants/index";
import Project from "@/components/Project";
import Container from "@/utils/Container";

export default function Projects() {
  return (
    <>
      <section id="projects" className="mt-1">
        <TitleSection title={ConstantsTitles.PROJECTS_TITLE} />
        <Container>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project image="spider-man.jpg" />
            <Project image="iron-man.jpg" />
            <Project image="groot.jpg" />
            <Project image="spider-man.jpg" />
            <Project image="iron-man.jpg" />
          </div>
        </Container>
      </section>
    </>
  );
}
