import Banner from "@/components/Banner";
import BookingJourney from "@/components/BookingJourney";
import FeaturedFacilities from "@/components/FeaturedFacilities";
import JoinNowSection from "@/components/JoinNowSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BookingJourney></BookingJourney>
      <FeaturedFacilities></FeaturedFacilities>
      <WhyChooseUs></WhyChooseUs>
      <JoinNowSection></JoinNowSection>
     
    </div>
  );
}
