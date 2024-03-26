interface CardWrapperProps {
  children: React.ReactNode;
  isMiddleCard?: boolean;
}

export default function CardWrapper({
  children,
  isMiddleCard = false,
}: CardWrapperProps) {
  return (
    <div
      className={` grid place-content-center xl:p-3
     ${
       isMiddleCard &&
       `relative 
       after:absolute after:bg-gradient-to-r after:from-transparent after:via-light-blue after:to-transparent 
       after:content[''] after:h-[1px] after:w-full after:-bottom-6
       after:lg:w-[1px] after:lg:h-full after:lg:bottom-0 after:lg:-left-4
       after:lg:bg-gradient-to-t
      
       before:absolute before:bg-gradient-to-r before:from-transparent before:via-light-blue before:to-transparent 
       before:content[''] before:h-[1px] before:w-full before:-top-3
       before:lg:w-[1px] before:lg:h-full before:lg:top-0 before:lg:-right-4
       before:lg:bg-gradient-to-t
       `
     }
    `}
    >
      {children}
    </div>
  );
}
