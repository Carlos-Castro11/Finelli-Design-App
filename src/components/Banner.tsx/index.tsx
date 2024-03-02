interface BannerProps {
  children?: React.ReactNode;
  image: string;
}

export default function Banner({ image, children }: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(images/${image})` }}
      className="mt-5 flex items-center justify-center h-28 sm:h-48 md:h-[22rem] bg-fixed bg-cover bg-center rounded shadow-large"
    >
      {children}
    </div>
  );
}
