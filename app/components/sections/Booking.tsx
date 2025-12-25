import Image from "next/image";
import BookingForm from "../BookingForm";

const Booking = () => {
  return (
    <section className="relative flex flex-row w-full h-fit justify-between items-center px-[250px] py-[60px]">
      <Image
        src="/images/misc/orange-background.webp"
        alt=""
        width={1920}
        height={648}
        className="absolute left-0 bottom-0 w-full h-[648px] z-0"
        preload
      />
      <BookingForm />
      <Image
        src="/images/misc/bicycle.webp"
        alt=""
        width={1500}
        height={1178}
        className="w-1/2 h-full z-10"
        preload
      />
    </section>
  );
};

export default Booking;
