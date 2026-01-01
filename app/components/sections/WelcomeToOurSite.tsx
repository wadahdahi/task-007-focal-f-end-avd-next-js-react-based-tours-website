import Image from "next/image";

const WelcomeToOurSite = () => {
  return (
    <section className="relative flex flex-col lg:flex-row w-full min-h-full justify-between items-center px-[50px] xl:px-[250px]">
      {/* IMAGE + WELCOME TEXT WHEN SCREEN SIZE IS UNDER 1024 (mobile → md) */}
      <div className="flex flex-row w-full min-h-full lg:w-1/2 items-center justify-center mx-auto pr-[40px] 2xl:pr-[55px]">
        <div className="relative w-full h-full mx-auto">
          <Image
            src="/images/misc/woman-clipped-in-shape.webp"
            alt=""
            width={450}
            height={650}
            className="object-cover mx-auto"
            preload
          />
        </div>
        {/* WELCOME TEXT WHEN SCREEN IS OVER 1024 ("lg" SIZE) */}
        <div className="flex flex-col lg:hidden">
          <p className="flex flex-col lg:flex-row lg:hidden font-semibold text-[clamp(14px,5vw,22px)] md:text-[16px] mb-[6px]">
            <span>WELCOME</span> TO OUR SITE!
          </p>
          <p className=" lg:hidden font-extrabold text-[clamp(16px,5vw,32px)] mb-[32px]">
            We are the best company for your visit
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 h-full justify-start items-start mx-auto">
        <p className="hidden lg:block font-semibold text-[16px] mb-[6px]">
          WELCOME TO OUR SITE!
        </p>
        <p className="hidden lg:block font-extrabold text-[32px] mb-[32px]">
          We are the best company for your visit
        </p>
        <p className="font-normal text-[18px] leading-[32px] mb-[32px]">
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>
        {/* STATISTICS */}
        <div className="flex flex-row w-full md:w-fit justify-start gap-[50px] md:justify-start items-start mx-auto sm:mx-0">
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[24px] sm:text-[32px] leading-[32px]">
              20+
            </p>
            <p className="flex flex-col font-normal text-[12px] sm:text-[16px] leading-[24px]">
              <span>Years </span>
              <span>Experience</span>
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[24px] sm:text-[32px] leading-[32px]">
              100+
            </p>
            <p className="flex flex-col font-normal text-[12px] sm:text-[16px] leading-[24px]">
              <span>Happy </span>
              <span>Customer</span>
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[24px] sm:text-[32px] leading-[32px]">
              15+
            </p>
            <p className="flex flex-col font-normal text-[12px] sm:text-[16px] leading-[24px]">
              <span>Choice </span>
              <span>of Services</span>
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[24px] sm:text-[32px] leading-[32px]">
              10+
            </p>
            <p className="flex flex-col font-normal text-[12px] sm:text-[16px] leading-[24px]">
              <span>Professional </span>
              <span>Guides</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToOurSite;
