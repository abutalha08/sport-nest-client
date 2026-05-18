import Banner from "@/components/Banner";
import BookingJourney from "@/components/BookingJourney";
import JoinNowSection from "@/components/JoinNowSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BookingJourney></BookingJourney>
      <WhyChooseUs></WhyChooseUs>
      <JoinNowSection></JoinNowSection>
     
    </div>
  );
}
