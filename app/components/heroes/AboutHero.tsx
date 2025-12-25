const AboutHero = () => {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center px-8 sm:px-62.5 pt-[30%] sm:pt-[10%] bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/hero/hero-002.webp')] bg-cover bg-center">
      <h1 className="font-display text-[36px] sm:text-[72px] text-[#ffffff]">
        Our team cares about your full relax
      </h1>
      <p className="font-bold w-2/3 text-[16px] sm:text-[24px] text-center mb-15 text-[#ffffff]">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>
      <button
        className="bg-none border-2 text-[20px] font-semibold text-[#ffffff] px-6 py-3.5 rounded-full"
        type="button"
      >
        View our Tour Packages
      </button>
    </div>
  );
};

export default AboutHero;
