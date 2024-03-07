import Link from "next/link";
import { ComponentProps } from "react";

interface NavItemProps extends ComponentProps<"li"> {
  text: string;
  link: string;
  isMobile?: boolean;
  icon?: React.ReactNode;
}

export default function NavItem({
  text,
  link,
  isMobile = false,
  icon,
}: NavItemProps) {
  return (
    <li className={`${isMobile ? "border-b-[1px]" : ""}`}>
      <Link
        className={`drop-shadow-sm ${
          isMobile
            ? "text-lg flex gap-2"
            : `p-0.5 relative text-base
          after:bg-primary-color after:content-[''] 
          after:absolute after:h-0.5 after:w-0 after:bottom-0.5 after:left-1/2 
          after:duration-300 after:ease-in-out after:translate-x-[-50%]
          hover:after:w-full`
        }`}
        href={link}
      >
        {isMobile ? icon : null}
        {text.toUpperCase()}
      </Link>
    </li>
  );
}
