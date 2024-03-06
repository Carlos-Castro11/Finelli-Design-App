import Icon from "@/utils/Icon";

interface ServiceContentProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function ServiceContent({
  title,
  text,
  icon,
}: ServiceContentProps) {
  return (
    <div className={`p-5 text-center grid gap-6`}>
      <div className="flex justify-center text-primary-color">{icon}</div>
      <h3
        className={`sm:text-3xl text-2xl uppercase text-primary-color font-bold`}
      >
        {title}
      </h3>
      <p className="">{text}</p>
    </div>
  );
}
