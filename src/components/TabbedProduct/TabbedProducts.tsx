"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = ["Description", "Specifications", "Reviews"];

const products = [
  {
    id: 1,
    name: "Northern Sumatra Indonesia",
    image: "/images/products/p1.webp",
    model: "var253",
    price: "Tk 12,600.00",
  },
  {
    id: 2,
    name: "Northern Sumatra Indonesia",
    image: "/images/products/p1.webp",
    model: "var253",
    price: "Tk 12,600.00",
  },
  {
    id: 3,
    name: "Northern Sumatra Indonesia",
    image: "/images/products/p1.webp",
    model: "var253",
    price: "Tk 12,600.00",
  },
  {
    id: 4,
    name: "Northern Sumatra Indonesia",
    image: "/images/products/p1.webp",
    model: "var253",
    price: "Tk 12,600.00",
  },
];

export default function TabbedProducts() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-0 text-center md:text-left">
            Your Best LED Products Starts Here
          </h2>

          {/* Tabs */}
          <div className="flex justify-center md:justify-end gap-6 text-sm font-medium">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 border-b-2 transition ${
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="text-center max-w-sm mx-auto sm:max-w-none"
            >
              {/* Image */}
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <h3 className="text-sm font-medium mb-1">
                {product.name}
              </h3>

              <p className="text-xs text-gray-600 mb-2">
                Model: {product.model} &nbsp; | &nbsp; Code: {product.model}
              </p>

              <p className="text-sm font-semibold mb-3">
                From {product.price}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-2">
                <button className="bg-black text-white text-xs px-4 py-2">
                  QUICK ADD
                </button>
                <button className="border text-xs px-4 py-2">
                  VIEW PRODUCT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
