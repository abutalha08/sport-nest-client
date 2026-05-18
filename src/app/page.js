import Banner from "@/components/Banner";
import BookingJourney from "@/components/BookingJourney";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BookingJourney></BookingJourney>
      <WhyChooseUs></WhyChooseUs>
     
    </div>
  );
}
