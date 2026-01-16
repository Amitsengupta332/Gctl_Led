import Image from "next/image";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaComment,
  FaShareAlt,
} from "react-icons/fa";

const blogs = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: "X-Ray Baggage Scanner: Complete Guide for Security...",
  excerpt:
    "Security is a top priority Security is a top priority Security is a top priority Security is a top priority...",
  image: `/images/blogImage/blog${i + 1}.avif`,
  author: "Rose Tyler",
  date: "May 7, 2020",
}));

export default function BlogSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-center text-xl md:text-2xl font-medium mb-10 md:mb-14">
          Varito Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="text-center sm:text-left max-w-sm mx-auto sm:max-w-none">
              {/* Image */}
             <div className="relative w-full h-[220px] md:h-[240px] mb-4 overflow-hidden rounded mx-auto">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold mb-2">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>

              {/* Continue Reading */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
                Continue Reading <span>→</span>
              </a>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 border-t pt-3">
                <span className="flex items-center gap-1">
                  <FaUserCircle /> by {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaComment /> 0
                </span>
                <FaShareAlt className="ml-auto cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
