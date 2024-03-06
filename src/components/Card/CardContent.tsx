interface CardContentProps {
  children: React.ReactNode;
}

export default function CardContent({ children }: CardContentProps) {
  return <div className={`p-5 text-center grid gap-6`}>{children}</div>;
}
