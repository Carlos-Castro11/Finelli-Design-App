/* eslint-disable @next/next/no-img-element */
interface UniqueProjectImageProps {
  image: string;
  onClick: () => void;
}

export default function UniqueProjectImage({
  image,
  onClick,
}: UniqueProjectImageProps) {
  return (
    <img
      className="rounded lg:w-[90%] shadow-large cursor-pointer lg:hover:scale-105 transition-all duration-300"
      src={`/images/${image}`}
      alt="Ambiente de um projeto de interiores"
      onClick={onClick}
    />
  );
}
