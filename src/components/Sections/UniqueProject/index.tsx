"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

// Components
import MainTitle from "@/components/MainTitle";

// Interface
import { ProjectsDataProps } from "@/Database/Projects";

// Hooks
import useMedia from "@/hooks/useMedia";
import { UniqueProjectImageRoot } from "@/components/UniqueProjectImages/UniqueProjectImageRoot";
import SecondTitle from "@/components/SecondTitle";
import DefaultText from "@/components/DefaultText";

interface UniqueProjectProps {
  project: ProjectsDataProps;
}

export default function UniqueProject({ project }: UniqueProjectProps) {
  const isGridWithTwoColumns = useMedia("(min-width: 1024px)");
  const [coverImage, setCoverImage] = React.useState<string>(
    project.image_cover
  );

  return (
    <>
      <div className="grid lg:grid-cols-2 lg:container gap-6 lg:gap-0 lg:mt-7">
        <div className="flex flex-col lg:flex-row">
          {isGridWithTwoColumns ? null : <MainTitle title={project.title} />}
          <img
            className="lg:rounded shadow-large lg:max-w-[95%] object-cover"
            src={`/images/${coverImage}`}
            alt=""
          />
          {isGridWithTwoColumns ? null : (
            <div className="lg:container lg:mx-0 mx-2">
              <UniqueProjectImageRoot.Wrapper>
                {project.images.map((image) => (
                  <UniqueProjectImageRoot.Image
                    onClick={() => setCoverImage(image)}
                    image={image}
                    key={image}
                  />
                ))}
              </UniqueProjectImageRoot.Wrapper>
            </div>
          )}
        </div>
        <div>
          {/* <Banner image={project.image_cover}>
            <BannerTitle text={project.title} />
          </Banner> */}
          {isGridWithTwoColumns ? (
            <>
              <MainTitle title={project.title} />
            </>
          ) : null}
          <div className="lg:mt-5 mx-2 lg:mx-0">
            <SecondTitle title="Sobre o projeto" />
            <DefaultText text={project.about} />
          </div>
          {isGridWithTwoColumns ? (
            <UniqueProjectImageRoot.Wrapper>
              {project.images.map((image) => (
                <UniqueProjectImageRoot.Image
                  onClick={() => setCoverImage(image)}
                  image={image}
                  key={image}
                />
              ))}
            </UniqueProjectImageRoot.Wrapper>
          ) : null}
        </div>
      </div>
    </>
  );
}
