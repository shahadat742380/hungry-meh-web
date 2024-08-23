// import sections and components
import Banner from "@/components/banner";
import AboutUs from "@/sections/aboutUs";
import Clinic from "@/sections/clinic";
import ExploreBlogs from "@/sections/explorBlogs";
import Hero from "@/sections/hero";
import Work from "@/sections/Work";
import Impact from "@/sections/impact";
import WhyHungry from "@/sections/WhyHngry";
import Partner from "@/sections/partner";
import Faq from "@/sections/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partner />
      <AboutUs />
      <WhyHungry />
      <Work />
      <Clinic />
      <Impact />
      <ExploreBlogs />
      <Faq />
      <Banner />
    </main>
  );
}
