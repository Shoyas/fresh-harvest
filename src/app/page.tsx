
import AboutUs from "@/components/homePage/AboutUs";
import HeroArea from "@/components/homePage/HeroArea";
import OurBlog from "@/components/homePage/OurBlog";
import OurProducts from "@/components/homePage/OurProducts";
import PromotionalArea from "@/components/homePage/PromotionalArea";
import Testimonial from "@/components/homePage/Testimonial";

export default function Home() {
  return (
    <>
      <HeroArea />
      <OurProducts />
      <AboutUs />
      <PromotionalArea />
      <Testimonial />
      <OurBlog />
    </>
  );
}
