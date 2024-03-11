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
      <ProjectRoot.BorderAnimation borderTop={true} />
      <ProjectRoot.BorderAnimation borderBottom={true} />
      <ProjectRoot.BorderAnimation borderLeft={true} />
      <ProjectRoot.BorderAnimation borderRight={true} />
    </ProjectRoot.Wrapper>
  );
}
