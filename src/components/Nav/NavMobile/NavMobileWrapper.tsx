interface NavMobileWrapperProps {
  children: React.ReactNode;
}

export default function NavMobileWrapper({ children }: NavMobileWrapperProps) {
  return (
    <ul
      className={`
        p-4 grid gap-3 fixed left-0 top-[12%] bg-background-color w-full
        border border-primary-color shadow-md  rounded-md z-50 animeRight
        `}
    >
      {children}
    </ul>
  );
}
