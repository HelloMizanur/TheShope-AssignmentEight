import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-[#001a4d] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold italic tracking-tight">
              TileGallery
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Your premium destination for beautiful tiles. Quality, style, and
              craftsmanship in every piece.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <NavLink
                  href={"/"}
                  className="hover:text-white transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  href={"/alltiles"}
                  className="hover:text-white transition-colors"
                >
                  All Tiles
                </NavLink>
              </li>
              <li>
                <NavLink
                  href={"/myprofile"}
                  className="hover:text-white transition-colors"
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>support@tilegallery.com</li>
              <li>+880 177 73 456</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            © 2026 TileGallery. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              href={"https://web.facebook.com/"}
              className="btn btn-circle btn-sm bg-[#002a7a] hover:bg-[#003da1] border-none text-white"
            >
              <span className="text-xs">f</span>
            </Link>
            <Link
              href={"https://web.facebook.com/"}
              className="btn btn-circle btn-sm bg-[#002a7a] hover:bg-[#003da1] border-none text-white"
            >
              <span className="text-xs">in</span>
            </Link>
            <Link
              href={"https://x.com/"}
              className="btn btn-circle btn-sm bg-[#002a7a] hover:bg-[#003da1] border-none text-white"
            >
              <span className="text-xs">tw</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
