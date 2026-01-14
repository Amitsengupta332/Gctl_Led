const categories = [
  { title: "Indoor LED Displays", image: "/images/category/cat1.avif" },
  { title: "Outdoor LED Displays", image: "/images/category/cat2.avif" },
  { title: "Creative LED Displays", image: "/images/category/cat3.avif" },
  { title: "Rental LED Displays", image: "/images/category/cat7.avif" },
  { title: "LED Controllers", image: "/images/category/cat8.avif" },
  { title: "Video Wall Controllers", image: "/images/category/cat4.avif" },
  { title: "Video Wall Controllers", image: "/images/category/cat5.avif" },
  { title: "Video Wall Controllers", image: "/images/category/cat6.avif" },
];

export default function CategorySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-center text-xl font-medium mb-12">
          Our Category
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay text */}
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                {cat.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
