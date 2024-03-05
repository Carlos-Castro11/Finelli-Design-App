interface ProjectProps {
  image: string;
}

export default function ProjectImage({ image }: ProjectProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded shadow-large" src={`/images/${image}`} alt="" />
  );
}
