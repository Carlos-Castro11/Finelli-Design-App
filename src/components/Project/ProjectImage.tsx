interface ProjectImageProps {
  image: string;
}

export default function ProjectImage({ image }: ProjectImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded shadow-large"
      src={`/images/${image}`}
      alt="Ambiente de um projeto de interiores"
    />
  );
}
