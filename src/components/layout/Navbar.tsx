import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-200 text-sm">
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

      {/* Main Navbar */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="text-xl font-semibold text-blue-900">
              GCTL <span className="text-red-600">LED</span>
            </div>

            {/* Menu */}
            <nav className="flex items-center gap-8 text-sm font-medium text-gray-800">

              {/* Products with dropdown */}
              <div className="relative group">
                <button className="hover:text-blue-700 flex items-center gap-1">
                  Products
                  <span className="text-xs">▼</span>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-4 w-64 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <ul className="py-3 text-sm text-gray-700">
                    <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                      Indoor LED Display
                    </li>
                    <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                      Outdoor LED Display
                    </li>
                    <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                      Rental LED Display
                    </li>
                    <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                      Creative LED Display
                    </li>
                    <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                      LED Controllers
                    </li>
                    <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                      Video Wall Controller
                    </li>
                  </ul>
                </div>
              </div>

              <a className="hover:text-blue-700">Solutions</a>
              <a className="hover:text-blue-700">Support</a>
              <a className="hover:text-blue-700">Blog</a>
              <a className="hover:text-blue-700">Contact Us</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-5 text-gray-700 text-lg">
              <FaSearch />
              <FaUser />
              <FaShoppingCart />
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
