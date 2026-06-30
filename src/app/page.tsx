import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import WhySorosha from "@/components/sections/WhySorosha";
import MechanicalBeauty from "@/components/sections/MechanicalBeauty";
import LifestyleQuote from "@/components/sections/LifestyleQuote";
import CollectionsCarousel from "@/components/sections/CollectionsCarousel";
import CraftsmanshipTimeline from "@/components/sections/CraftsmanshipTimeline";
import Testimonials from "@/components/sections/Testimonials";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Faq from "@/components/sections/Faq";
import Newsletter from "@/components/sections/Newsletter";
import FloatingCTA from "@/components/FloatingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCollections />
      <WhySorosha />
      <MechanicalBeauty />
      <LifestyleQuote />
      <CollectionsCarousel />
      <CraftsmanshipTimeline />
      <Testimonials />
      <InstagramGallery />
      <Faq />
      <Newsletter />
      <FloatingCTA />
    </>
  );
}
