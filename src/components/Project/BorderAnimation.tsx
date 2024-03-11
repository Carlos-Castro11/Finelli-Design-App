interface BorderAnimationProps {
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
}

export default function BorderAnimation({
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
}: BorderAnimationProps) {
  return (
    <div
      className={`
  absolute bg-background-color z-10 transition-all duration-500 ease-in-out
  ${
    borderTop &&
    `left-4 top-4 h-0.5 w-0
    md:group-hover/project:w-[91%]
    lg:group-hover/project:w-[89.5%]
    xl:group-hover/project:w-[91.5%]
    2xl:group-hover/project:w-[93%]
    `
  }
  ${
    borderRight &&
    `right-4 bottom-4 w-0.5 h-0
    md:group-hover/project:h-[84%]
    lg:group-hover/project:h-[81%]
    xl:group-hover/project:h-[85%]
    2xl:group-hover/project:h-[87%]
    `
  }
  ${
    borderBottom &&
    `left-4 bottom-4 h-0.5 w-0
    md:group-hover/project:w-[91%]
    lg:group-hover/project:w-[89.5%]
    xl:group-hover/project:w-[91.5%]
    2xl:group-hover/project:w-[93%]
    `
  }
  ${
    borderLeft &&
    `left-4 bottom-4 w-0.5 h-0
    md:group-hover/project:h-[84%]
    lg:group-hover/project:h-[81%]
    xl:group-hover/project:h-[85%]
    2xl:group-hover/project:h-[87%]
    `
  }
  `}
    ></div>
  );
}
