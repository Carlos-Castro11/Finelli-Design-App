import TitleSection from "@/components/TitleSection";

import { ConstantsTitles } from "../../../constants/index";

export default function Projects() {
  return (
    <>
      <section id="projects" className="mt-1">
        <TitleSection title={ConstantsTitles.PROJECTS_TITLE} />
      </section>
    </>
  );
}
