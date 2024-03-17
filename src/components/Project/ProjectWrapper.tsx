import Link from "next/link";

interface ProjectWrapper {
  children: React.ReactNode;
  link: string;
}

export default function ProjectWrapper({ children, link }: ProjectWrapper) {
  function handleClick() {
    console.log("click");
  }

  return (
    <Link
      href={link}
      onClick={handleClick}
      className={`relative cursor-pointer
        after:content[''] after:h-full after:w-full after:absolute after:left-0 after:bottom-0
        md:hover:after:bg-black-banner after:transition after:ease-in-out after:duration-300 group/project
        transition ease-in-out duration-200 after:rounded
        md:hover:scale-[1.05]
        `}
    >
      {children}
    </Link>
  );
}
