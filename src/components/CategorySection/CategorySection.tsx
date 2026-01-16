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
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-center text-lg md:text-xl font-medium mb-8 md:mb-12">
          Our Category
        </h2>

        {/* ✅ EXACT behavior you want */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden rounded
                w-full
                md:max-w-md md:mx-auto
                lg:max-w-none lg:mx-0
              "
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="
                  w-full
                  h-[220px] md:h-[260px] lg:h-[260px]
                  object-cover
                "
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2">
                <p className="text-white text-sm font-medium text-center md:text-left">
                  {cat.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
