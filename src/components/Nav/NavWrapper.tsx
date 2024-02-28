interface NavWrapperProps {
  children: React.ReactNode;
  isMobile?: boolean;
}

export default function NavWrapper({
  children,
  isMobile = false,
}: NavWrapperProps) {
  return (
    <ul
      className={`${
        isMobile
          ? ` p-4 grid gap-3 fixed right-[.5%] top-[11%] 
          bg-background-color border border-primary-color 
          shadow-md  rounded-md animeRight`
          : `flex gap-8`
      }`}
    >
      {children}
    </ul>
  );
}
