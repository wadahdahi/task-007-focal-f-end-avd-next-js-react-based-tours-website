import Image from "next/image";

const WelcomeToOurSite = () => {
  return (
    <section className="relative flex flex-row h-fit justify-between items-center px-[250px]">
      <div className="flex w-1/2">
        <Image
          src="/images/misc/woman-clipped-in-shape.webp"
          alt=""
          width={450}
          height={650}
          className="w-[450px] h-[650px]"
          preload
        />
      </div>

      <div className="flex flex-col  w-1/2 h-fit justify-start items-start">
        <p className="font-semibold text-[16px] mb-[6px]">
          WELCOME TO OUR SITE!
        </p>
        <p className="font-extrabold text-[32px] mb-[32px]">
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
        <div className="flex flex-row w-2/3 justify-between items-start">
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[32px] leading-[32px]">
              20+
            </p>
            <p className="font-normal text-[16px] leading-[24px]">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[32px] leading-[32px]">
              100+
            </p>
            <p className="font-normal text-[16px] leading-[24px]">
              Happy Customer
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[32px] leading-[32px]">
              15+
            </p>
            <p className="font-normal text-[16px] leading-[24px]">
              Choice of Services
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="font-bold text-[#FA8B02] text-[32px] leading-[32px]">
              10+{" "}
            </p>
            <p className="font-normal text-[16px] leading-[24px]">
              Professional Guides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeToOurSite;
