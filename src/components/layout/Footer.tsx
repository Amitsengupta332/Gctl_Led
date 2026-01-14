import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: About */}
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              GCTL <span className="text-red-600">LED</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Germany Computer and Telecom Limited (GCTL) is one of the leading
              most Information communication Technology And Complete IT
              infrastructure Solution provider based in Dhaka, Bangladesh.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Wall Mount Digital Signage</li>
              <li>Android</li>
              <li>LCD Digital Signage Poster</li>
              <li>Video Walls</li>
              <li>All-in-One Interactive Display</li>
              <li className="font-medium mt-3">Panel</li>
              <li>Information Signage Display Kiosk</li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">
              Information
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1" />
                <span>
                  +8802-58610849 <br />
                  +8801847213869
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                info@gctlbd.com
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  House - 42 (5th floor) <br />
                  Road - 10, Sector - 4 <br />
                  Uttara, Dhaka - 1230
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        Copyright © 2026 CLS Computer, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
