import BlogSection from "@/components/Blog/BlogSection";
import CategorySection from "@/components/CategorySection/CategorySection";
 
import Hero from "@/components/HeroSection/Hero";
import PromoSlider from "@/components/PromoSlider/PromoSlider";
import TabbedProducts from "@/components/TabbedProduct/TabbedProducts";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <PromoSlider />
      <TabbedProducts />
      <BlogSection />
      {/* <ContactForm/> */}
    </div>
  );
}
