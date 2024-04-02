/* eslint-disable @next/next/no-img-element */
interface UniqueProjectImageProps {
  image: string;
}

export default function UniqueProjectImage({ image }: UniqueProjectImageProps) {
  return (
    <img
      className="rounded shadow-large cursor-pointer lg:hover:scale-105 transition-all duration-300"
      src={`/images/${image}`}
      alt="Ambiente de um projeto de interiores"
    />
  );
}
