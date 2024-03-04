import { ProjectRoot } from "./ProjectRoot";

interface ProjectProps {
  image: string;
}

export default function Project({ image }: ProjectProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <ProjectRoot.Image image={image}></ProjectRoot.Image>
  );
}
