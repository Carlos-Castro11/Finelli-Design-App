interface CardWrapperProps {
  children: React.ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <div
      className={`bg-gradient-to-b from-background-color to-background-color-gradient border border-primary-color 
      rounded-lg grid place-content-center shadow-large
    `}
    >
      {children}
    </div>
  );
}
