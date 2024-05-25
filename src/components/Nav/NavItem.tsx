import Link from "next/link";

interface NavItemProps {
  text: string;
  link: string;
  isMobile?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  style?: string;
}

export default function NavItem({
  text,
  link,
  isMobile = false,
  icon,
  onClick,
  style,
}: NavItemProps) {
  return (
    <li onClick={onClick} className={`${isMobile ? "border-b-[1px]" : ""}`}>
      <Link
        className={`drop-shadow-sm ${
          isMobile
            ? "text-lg flex gap-2"
            : `p-0.5 relative text-sm 2xl:text-base
          after:bg-primary-color after:content-[''] 
          after:absolute after:h-0.5 after:w-0 after:bottom-[1px] after:left-1/2 
          after:duration-300 after:ease-in-out after:translate-x-[-50%]
          hover:after:w-full ${style}`
        }`}
        href={link}
      >
        {isMobile ? icon : null}
        {text.toUpperCase()}
      </Link>
    </li>
  );
}
