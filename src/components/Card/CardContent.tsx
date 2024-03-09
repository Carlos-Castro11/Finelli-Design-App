interface CardContentProps {
  children: React.ReactNode;
}

export default function CardContent({ children }: CardContentProps) {
  return (
    <div
      className={` p-5 text-center
    grid gap-5
    md:gap-4
    lg:p-3 lg:gap-3 
    `}
    >
      {children}
    </div>
  );
}
