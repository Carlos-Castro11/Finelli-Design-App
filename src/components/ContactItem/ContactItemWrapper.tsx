import Link from "next/link";

interface ContactItemWrapperProps {
  children: React.ReactNode;
  link: string;
}

export default function ContactItemWrapper({
  children,
  link,
}: ContactItemWrapperProps) {
  return (
    <Link href={link}>
      <div
        className={`
    bg-background-color rounded-md border-2 border-light-blue
    sm:hover:bg-body-background-color
    `}
      >
        {children}
      </div>
    </Link>
  );
}
