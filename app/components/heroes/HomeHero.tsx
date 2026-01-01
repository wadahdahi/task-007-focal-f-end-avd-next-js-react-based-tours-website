import ToursSchedule from "../menus/ToursSchedule";

const HomeHero = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-start items-start md:items-center px-[0%] md:px-[10%] pt-[30%] sm:pt-[18%] md:pt-[16%] xl:pt-[10%] bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/hero/hero-001.webp')] bg-cover bg-center">
      <h1 className="font-display text-[48px] md:text-[72px] px-[6%] md:px-0 mb-[6px] sm:mb-[18px] md:mb-[16px] leading-[100%] text-[#ffffff]">
        Enjoy in the best way!
      </h1>
      <p className="font-bold text-[16px] sm:text-[24px] px-[6%] md:px-0 mb-[20px] sm:mb-15 text-[#ffffff]">
        Enjoy our services for your trip anytime
      </p>
      <ToursSchedule />
    </div>
  );
};

export default HomeHero;
