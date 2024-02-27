"use client";
import Link from "next/link";

interface NavItemProps {
  text: string;
}

export default function NavItem({ text }: NavItemProps) {
  return (
    <li>
      <Link href={"/"}>{text.toUpperCase()}</Link>
    </li>
  );
}
