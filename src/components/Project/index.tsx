import { ProjectRoot } from "./ProjectRoot";

interface ProjectProps {
  image: string;
  projectTitle: string;
}

export default function Project({ image, projectTitle }: ProjectProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <ProjectRoot.Wrapper>
      <ProjectRoot.Image image={image} />
      <ProjectRoot.Title title={projectTitle} />
    </ProjectRoot.Wrapper>
  );
}
