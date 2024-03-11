interface CardWrapperProps {
  children: React.ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <div
      className={`bg-background-color border border-primary-color 
      rounded-lg grid place-content-center shadow-large xl:p-3
    `}
    >
      {children}
    </div>
  );
}
