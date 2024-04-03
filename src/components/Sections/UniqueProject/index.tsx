/* eslint-disable @next/next/no-img-element */
// Components
import Banner from "@/components/Banner";
import BannerTitle from "@/components/Banner/BannerTitle";
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
      <div className="grid lg:grid-cols-2 lg:container gap-6 lg:gap-0 lg:mt-7">
        <div className="flex flex-col lg:flex-row">
          {isGridWithTwoColumns ? null : <TitleSection title={project.title} />}
          <img
            className="lg:rounded shadow-large lg:max-w-[95%] object-cover"
            src={`/images/${project.image_cover}`}
            alt=""
          />
          {isGridWithTwoColumns ? null : (
            <div className="lg:container mx-2 lg:mx-0">
              <UniqueProjectImages images={project.images} />
            </div>
          )}
        </div>
        <div>
          {/* <Banner image={project.image_cover}>
            <BannerTitle text={project.title} />
          </Banner> */}
          {isGridWithTwoColumns ? (
            <>
              <TitleSection title={project.title} />
            </>
          ) : null}
          <div className="lg:mt-5 mx-2 lg:mx-0">
            <CardTitle title="Sobre o projeto" />
            <p className="text-primary-color mt-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
              ducimus. Blanditiis maiores explicabo nisi dignissimos neque
              dolore mollitia ipsa amet assumenda natus, iusto molestiae odit
              praesentium veniam magnam quidem voluptate.
            </p>
          </div>
          {isGridWithTwoColumns ? (
            <>
              <UniqueProjectImages images={project.images} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
