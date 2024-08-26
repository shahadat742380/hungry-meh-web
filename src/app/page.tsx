// import sections and components
import Banner from "@/components/banner";
import AboutUs from "@/sections/aboutUs";
import ExploreBlogs from "@/sections/explorBlogs";
import Hero from "@/sections/hero";
import Work from "@/sections/Work";
import WhyHungry from "@/sections/WhyHngry";
import Partner from "@/sections/partner";
import Faq from "@/sections/Faq";
import ClientReview from "@/sections/ClientReview";
import Steps from "@/sections/steps";
import Feature from "@/sections/features";
import Feature2 from "@/sections/features/Feature2";
import Feature3 from "@/sections/features/Feature3";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Partner /> */}
      <AboutUs />
      <WhyHungry />
      <Work />
      <Feature />
      <Feature2 />
      <Feature3 />
      <Steps />
      <ClientReview />
      <Faq />
      <ExploreBlogs />
      <Banner />
    </main>
  );
}
