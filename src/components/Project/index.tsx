import { ProjectRoot } from "./ProjectRoot";

interface ProjectProps {
  image: string;
  projectTitle: string;
  link: string;
}

export default function Project({ image, projectTitle, link }: ProjectProps) {
  return (
    <ProjectRoot.Wrapper link={link}>
      <ProjectRoot.Image image={image} />
      <ProjectRoot.Title title={projectTitle} />
      <ProjectRoot.BorderAnimation borderTop={true} />
      <ProjectRoot.BorderAnimation borderBottom={true} />
      <ProjectRoot.BorderAnimation borderLeft={true} />
      <ProjectRoot.BorderAnimation borderRight={true} />
    </ProjectRoot.Wrapper>
  );
}
