interface HeaderContentProps {
  children: React.ReactNode;
}

export default function HeaderContent({ children }: HeaderContentProps) {
  return (
    <div className="container text-primary-color bg-background-color flex justify-between items-center">
      {children}
    </div>
  );
}
