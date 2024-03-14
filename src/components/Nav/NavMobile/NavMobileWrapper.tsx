interface NavMobileWrapperProps {
  children: React.ReactNode;
  mobileActive: boolean;
}

export default function NavMobileWrapper({
  children,
  mobileActive,
}: NavMobileWrapperProps) {
  return (
    <ul
      className={`
        p-4 grid gap-3 fixed left-0 top-[12%] bg-background-color w-full
        border border-primary-color shadow-md  rounded-md z-50
        opacity-0 transform translate-x-10 transition-all duration-300 ease-in-out
        ${mobileActive && "opacity-100 translate-x-0"}
        `}
    >
      {children}
    </ul>
  );
}
