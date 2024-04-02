// Components
import CardTitle from "@/components/Card/CardTitle";
import ProjectImage from "@/components/Project/ProjectImage";
import TitleSection from "@/components/TitleSection";
import UniqueProjectImages from "@/components/UniqueProjectImages";

// Interface
import { ProjectsDataProps } from "@/Database/Projects";

// Hooks
import useMedia from "@/hooks/useMedia";

interface UniqueProjectProps {
  project: ProjectsDataProps;
}

export default function UniqueProject({ project }: UniqueProjectProps) {
  const isGridWithTwoColumns = useMedia("(min-width: 1024px)");

  return (
    <>
      <TitleSection title={project.title} />
      <div className="grid lg:grid-cols-2 mt-7 container gap-6 lg:gap-7">
        <div>
          <ProjectImage image={project.image_cover} />
          {isGridWithTwoColumns ? null : (
            <UniqueProjectImages images={project.images} />
          )}
        </div>
        <div>
          <CardTitle title="Sobre o projeto" />
          <p className="text-primary-color">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            ducimus. Blanditiis maiores explicabo nisi dignissimos neque dolore
            mollitia ipsa amet assumenda natus, iusto molestiae odit praesentium
            veniam magnam quidem voluptate.
          </p>
          {isGridWithTwoColumns ? (
            <UniqueProjectImages images={project.images} />
          ) : null}
        </div>
      </div>
    </>
  );
}
