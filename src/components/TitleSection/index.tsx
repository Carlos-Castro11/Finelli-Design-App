interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <h1
      className={`md:text-7xl text-3xl font-bold text-primary-color uppercase relative
      before:content[''] before:absolute before:bg-gradient-to-r from-transparent from-[1%] to-primary-color 
      to-[20%] before:bottom-[45%] before:left-[35%] before:h-0.5 before:w-[65%]
    `}
    >
      {title}
    </h1>
  );
}
