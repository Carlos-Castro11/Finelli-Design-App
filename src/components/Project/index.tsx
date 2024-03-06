// Components
import { ProjectRoot } from "./ProjectRoot";

interface ProjectProps {
  image: string;
  projectName: string;
}

export default function Project({ image, projectName }: ProjectProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <ProjectRoot.Wrapper projectName={projectName}>
      <ProjectRoot.Image image={image} />
    </ProjectRoot.Wrapper>
  );
}
