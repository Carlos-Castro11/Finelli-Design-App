import { ProjectRoot } from "./ProjectRoot";

interface ProjectProps {
  image: string;
  projectTitle: string;
}

export default function Project({ image, projectTitle }: ProjectProps) {
  return (
    <ProjectRoot.Wrapper>
      <ProjectRoot.Image image={image} />
      <ProjectRoot.Title title={projectTitle} />
    </ProjectRoot.Wrapper>
  );
}
