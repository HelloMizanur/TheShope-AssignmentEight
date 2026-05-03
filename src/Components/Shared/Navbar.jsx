import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/alltiles"} className="hover:text-gray-300">
          All Tiles
        </NavLink>
      </li>
      <li>
        <NavLink href={"/myprofile"} className="hover:text-gray-300">
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#2a2a2a] px-4 text-white">
      {/* --- LEFT: Logo --- */}
      <div className="navbar-start">
        {/* Mobile Hamburger (shows only on small screens) */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-[#2a2a2a] rounded-box w-52 border border-gray-700"
          >
            {list}
          </ul>
        </div>

        {/* Logo Branding */}
        <div className="flex items-center gap-2 cursor-pointer ml-2 lg:ml-0">
          <div className="bg-[#7c66dc] p-1.5 rounded-lg shrink-0">
            <span className="font-bold text-xs text-white">TG</span>
          </div>
          <NavLink
            href={"/"}
            className="text-xl font-semibold tracking-tight hidden sm:inline-block"
          >
            TileGallery
          </NavLink>
        </div>
      </div>

      {/* --- CENTER: Menu Items (Hidden on Mobile) --- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{list}</ul>
      </div>

      {/* --- RIGHT: Avatar & Logout --- */}
      <div className="navbar-end gap-2 sm:gap-4">
        <div className="avatar placeholder">
          <div className="bg-[#e0e0ff] text-[#4a4a8a] w-10 rounded-full flex justify-center items-center">
            <span className="text-sm font-bold">JD</span>
          </div>
        </div>
        <button className="btn btn-outline btn-sm border-gray-500 text-white hover:bg-gray-700 hover:border-gray-400 capitalize px-4 sm:px-6 font-normal">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
