interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <h1 className="md:text-7xl text-5xl font-bold drop-shadow-text text-primary-color uppercase">
      {title}
    </h1>
  );
}
