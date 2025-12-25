import Image from "next/image";

const SpecialOffers = () => {
  return (
    <section className="relative flex flex-row w-full h-fit justify-between items-center px-[250px] py-[60px]">
      <Image
        src="/images/misc/orange-background.webp"
        alt=""
        width={1920}
        height={450}
        className="absolute left-0 bottom-0 w-screen h-[450px] z-0"
        preload
      />
      <div className="flex flex-col w-1/2 h-full mr-[150px] p-[30px] bg-[#ffffff30] rounded-[24px] justify-center items-center z-20">
        <h3 className="font-extrabold text-[32px] text-center mb-[32px]">
          Get Special Offers for Organizations
        </h3>
        <p className="text-[18px] leading-[24px] text-center mb-[32px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <button
          className="text-[20px] text-[#ffffff] bg-[#FA8B02] rounded-full px-[24px] py-[10px] mx- hover:bg-[#FA8B0230]"
          type="button"
        >
          Contact Us
        </button>
      </div>
      <Image
        src="/images/misc/tourist-woman.webp"
        alt=""
        width={258}
        height={373}
        className="absolute right-0 bottom-0 w-[427px] h-[600px]"
        preload
      />
      {/* <div className="relative flex w-1/2 h-full justify-end bg-amber-200 z-20"></div> */}
    </section>
  );
};

export default SpecialOffers;
