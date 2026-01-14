import CategorySection from "@/components/CategorySection/CategorySection";
import Hero from "@/components/HeroSection/Hero";
import PromoSlider from "@/components/PromoSlider/PromoSlider";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <PromoSlider />
    </div>
  );
}
