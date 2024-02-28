"use client";
import Link from "next/link";

interface NavItemProps {
  text: string;
  link: string;
  isMobile?: boolean;
}

export default function NavItem({ text, link, isMobile }: NavItemProps) {
  return (
    <li
      className={`${
        isMobile ? `border-b-[1px] border-bottom-primary-color` : null
      }`}
    >
      <Link
        className={`${
          isMobile
            ? `text-lg`
            : `p-0.5 relative text-base
          after:bg-primary-color after:content-[''] 
          after:absolute after:h-0.5 after:w-0 after:bottom-0.5 after:left-1/2 
          after:duration-200 after:ease-in-out after:translate-x-[-50%]
          hover:after:w-full`
        }`}
        href={link}
      >
        {text.toUpperCase()}
      </Link>
    </li>
  );
}
