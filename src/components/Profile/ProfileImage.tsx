interface ProfileImageProps {
  image: string;
}

export default function ProfileImage({ image }: ProfileImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${image}`}
      alt="Perfil da dona do site, Giovana Finelli"
      className="rounded-full w-1/2 shadow"
    />
  );
}
