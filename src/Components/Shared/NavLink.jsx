"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive ? "text-[#7c66dc] font-semibold" : "hover:text-gray-300"
      }
    >
      {children}
    </Link>
  );
};
export default NavLink;
