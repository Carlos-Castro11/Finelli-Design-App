interface ProfileImageProps {
  image: string;
}

export default function ProfileImage({ image }: ProfileImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${image}`}
      alt="Perfil da dona do site, Giovana Finelli"
      className="shadow-large rounded-full sm:w-[30%] w-[50%] lg:w-[20%] 2xl:w-[13%]"
    />
  );
}
