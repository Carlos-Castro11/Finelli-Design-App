interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return (
    <h3
      className={`sm:text-3xl text-2xl uppercase text-primary-color font-bold`}
    >
      {title}
    </h3>
  );
}
