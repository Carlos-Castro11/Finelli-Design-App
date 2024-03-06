interface ProjectWrapper {
  children: React.ReactNode;
}

export default function ProjectWrapper({ children }: ProjectWrapper) {
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
    </div>
  );
}
