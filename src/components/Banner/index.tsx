interface BannerProps {
  children?: React.ReactNode;
  image: string;
}

export default function Banner({ image, children }: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(/images/${image})` }}
      className={` flex items-center justify-center
       h-36 bg-fixed bg-cover bg-center relative rounded
       after:bg-black-banner after:content[''] after:absolute after:w-full after:h-full after:rounded
       shadow-large`}
    >
      {children}
    </div>
  );
}
