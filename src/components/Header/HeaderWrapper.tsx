interface HeaderWrapperProps {
  children: React.ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  return (
    <header className="bg-background-color p-3 h-[5rem] 2xl:h-[6rem] shadow-md flex items-center">
      {children}
    </header>
  );
}
