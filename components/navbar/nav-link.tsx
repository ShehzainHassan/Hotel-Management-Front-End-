"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navbar.module.css";

interface NavLinkProps {
  href: string;
  children: string;
}
export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <p className={path === href ? classes.activeLink : classes.link}>
      <Link href={href}>{children}</Link>
    </p>
  );
}
