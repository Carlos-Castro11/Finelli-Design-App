interface NavWrapperProps {
  children: React.ReactNode;
  isMobile?: boolean;
}

export default function NavMobileWrapper({ children }: NavWrapperProps) {
  return (
    <ul
      className={`
        p-4 grid gap-3 fixed right-[.5%] top-[11%] bg-background-color 
        border border-primary-color shadow-md  rounded-md animeRight
        `}
    >
      {children}
    </ul>
  );
}
