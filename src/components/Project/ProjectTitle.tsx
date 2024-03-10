// Fonts
import { Courgette } from "next/font/google";
const font = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

interface ProjectTitle {
  title: string;
}

export default function ProjectTitle({ title }: ProjectTitle) {
  return (
    <h2
      className={`${font.className}
      absolute capitalize text-primary-color text-xl font-bold top-[-2rem] bg-white px-2
      rounded shadow
      md:shadow-none md:absolute md:capitalize md:text-white md:top-1/2 md:translate-y-[-50%] md:translate-x-[-50%] 
      md:left-1/2 z-20 md:bg-transparent md:opacity-0 md:group-hover/project:opacity-100 md:text-2xl
      transition ease-in-out duration-500
      `}
    >
      {title}
    </h2>
  );
}
