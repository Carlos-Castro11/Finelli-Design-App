interface NavWrapperProps {
  children: React.ReactNode;
}

export default function NavWrapper({ children }: NavWrapperProps) {
  return <ul className="flex gap-8">{children}</ul>;
}
