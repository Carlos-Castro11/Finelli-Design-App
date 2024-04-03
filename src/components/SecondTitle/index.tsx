interface SecondTitleProps {
  title: string;
}

export default function SecondTitle({ title }: SecondTitleProps) {
  return (
    <h3
      className={`text-2xl uppercase text-primary-color font-bold
        lg:text-xl
        xl:text-2xl
        `}
    >
      {title}
    </h3>
  );
}
