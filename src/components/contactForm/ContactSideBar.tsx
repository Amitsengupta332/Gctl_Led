import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactSidebar() {
  return (
    <div className="space-y-8">

      {/* Interested Products */}
      <div className="border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Interested Products</h3>

        <div className="flex flex-wrap gap-2">
          {[
            "IoT LoRaWAN® Series",
            "5G & Cellular Products",
            "Environmental Sensing",
            "Software & Platform",
            "X Infinity",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="border rounded-xl p-6">
        <h3 className="font-semibold mb-3">Support & Knowledge Base</h3>

        <p className="text-sm text-gray-600 mb-2">
          <FaEnvelope className="inline mr-2" />
          support@gctlbd.com
        </p>

        <p className="text-sm text-gray-600">
          <FaWhatsapp className="inline mr-2" />
          +880 1750-000000
        </p>
      </div>

      {/* Marketing */}
      <div className="border rounded-xl p-6">
        <h3 className="font-semibold mb-3">Marketing & PR</h3>
        <p className="text-sm text-gray-600">
          marketing@gctlbd.com
        </p>
      </div>

      {/* Address */}
      <div className="border rounded-xl p-6">
        <h3 className="font-semibold mb-3">Company Address</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          House-42 (5th floor) <br />
          Road-10, Sector-4 <br />
          Uttara, Dhaka-1230 <br />
          Bangladesh
        </p>
      </div>

    </div>
  );
}
