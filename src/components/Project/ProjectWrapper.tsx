// Fonts
import { Courgette } from "next/font/google";
const font = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

interface ProjectWrapper {
  children: React.ReactNode;
  projectName: string;
}

export default function ProjectWrapper({
  children,
  projectName,
}: ProjectWrapper) {
  function handleClick() {
    console.log("click");
  }

  return (
    <div
      onClick={handleClick}
      className={`relative cursor-pointer
        after:content[''] after:h-full after:w-full after:absolute after:left-0 after:bottom-0
        hover:after:bg-black-banner after:transition after:ease-in-out after:duration-300 group/project
        transition ease-in-out duration-200
        md:hover:scale-[1.05] mt-8 first:mt-2 md:mt-0
        `}
    >
      {children}
      <h2
        className={`${font.className}
      absolute capitalize text-primary-color text-xl font-bold top-[-2rem] bg-white px-2
      rounded shadow-md
      md:shadow-none md:absolute md:capitalize md:text-white md:top-1/2 md:translate-y-[-50%] md:translate-x-[-50%] 
      md:left-1/2 z-20 md:bg-transparent md:opacity-0 md:group-hover/project:opacity-100 md:text-2xl
      transition ease-in-out duration-500
      `}
      >
        {projectName}
      </h2>
    </div>
  );
}
