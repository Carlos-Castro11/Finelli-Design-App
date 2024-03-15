interface TitleSectionProps {
  title: string;
  firstSection?: boolean;
}

export default function TitleSection({
  title,
  firstSection = false,
}: TitleSectionProps) {
  return (
    <div
      className={`pointer-events-none ${
        firstSection ? "mt-1" : "my-0"
      } shadow-large animeLeft bg-primary-color 
    border-t-2 border-b-2 border-t-white border-b-white flex items-ceter justify-center p-5`}
    >
      <h1 className="drop-shadow-text font-bold uppercase text-3xl text-white">
        {title}
      </h1>
    </div>
  );
}
