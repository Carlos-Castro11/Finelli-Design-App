interface NavMobileWrapperProps {
  children: React.ReactNode;
}

export default function NavMobileWrapper({ children }: NavMobileWrapperProps) {
  return (
    <ul
      className={`
    p-4 grid gap-3 fixed right-[.5%] top-[22%] 
    bg-background-color border border-primary-color 
    shadow-md  rounded-md animeRight`}
    >
      {children}
    </ul>
  );
}
