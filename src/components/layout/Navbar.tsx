"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <>
      {/* ===== Top Info Bar (Desktop only) ===== */}
      <div className="hidden md:block bg-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex gap-6 text-gray-700">
            <span>📞 +8802-58610849</span>
            <span>✉️ info@gctlbd.com</span>
          </div>
          <div className="flex gap-4 text-gray-700">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-xl font-semibold text-blue-900">
              GCTL <span className="text-red-600">LED</span>
            </div>

            {/* ===== Desktop Menu ===== */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
              {/* Products dropdown */}
              <div className="relative group">
                <button className="hover:text-blue-700 flex items-center gap-1">
                  Products <span className="text-xs">▼</span>
                </button>

                <div className="absolute left-0 top-full mt-4 w-64 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <ul className="py-3 text-sm text-gray-700">
                    {[
                      "Indoor LED Display",
                      "Outdoor LED Display",
                      "Rental LED Display",
                      "Creative LED Display",
                      "LED Controllers",
                      "Video Wall Controller",
                    ].map((item) => (
                      <li
                        key={item}
                        className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/solutions" className="hover:text-blue-700">Solutions</Link>
              <Link href="/support" className="hover:text-blue-700">Support</Link>
              <Link href="/blog" className="hover:text-blue-700">Blog</Link>
              <Link href="/contact" className="hover:text-blue-700">Contact Us</Link>
            </nav>

            {/* ===== Desktop Icons ===== */}
            <div className="hidden md:flex items-center gap-5 text-gray-700 text-lg">
              <FaSearch />
              <FaUser />
              <FaShoppingCart />
            </div>

            {/* ===== Mobile Menu Button ===== */}
            <button
              className="md:hidden text-xl"
              onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        {/* ===== Mobile Menu ===== */}
        {menuOpen && (
          <div className="md:hidden border-t bg-white px-4 py-6 text-sm">
            {/* Products */}
            <div className="border-b pb-3 mb-3">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex justify-between items-center w-full font-medium py-2">
                Products
                <span className="text-lg">{productOpen ? "−" : "+"}</span>
              </button>

              {productOpen && (
                <ul className="mt-2 ml-3 space-y-2 text-gray-600">
                  <li className="py-1">Indoor LED Display</li>
                  <li className="py-1">Outdoor LED Display</li>
                  <li className="py-1">Rental LED Display</li>
                  <li className="py-1">Creative LED Display</li>
                  <li className="py-1">LED Controllers</li>
                  <li className="py-1">Video Wall Controller</li>
                </ul>
              )}
            </div>

            {/* Routes */}
            <nav className="flex flex-col divide-y text-gray-800">
              <a className="py-3 block">Solutions</a>
              <a className="py-3 block">Support</a>
              <a className="py-3 block">Blog</a>
              <a className="py-3 block">Contact Us</a>
            </nav>

            {/* Icons */}
            <div className="flex gap-6 pt-5 text-lg text-gray-700">
              <FaSearch />
              <FaUser />
              <FaShoppingCart />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
