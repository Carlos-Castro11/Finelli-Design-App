interface ProjectProps {
  image: string;
  children?: React.ReactNode;
}

export default function ProjectImage({ image, children }: ProjectProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <div
      style={{ backgroundImage: `url(images/${image})` }}
      className={`mt-5 flex items-center justify-center rounded shadow-large cursor-pointer
          h-64 bg-cover bg-center `}
    >
      {children}
    </div>
  );
}
