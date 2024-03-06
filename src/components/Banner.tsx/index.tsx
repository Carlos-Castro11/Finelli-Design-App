interface BannerProps {
  children?: React.ReactNode;
  image: string;
}

export default function Banner({ image, children }: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(images/${image})` }}
      className={`mt-8 flex items-center justify-center
       h-36 sm:h-48 md:h-[22rem] bg-fixed bg-cover bg-center 
       shadow-large`}
    >
      {children}
    </div>
  );
}
