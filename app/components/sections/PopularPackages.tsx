import Image from "next/image";

type PackagesCardData = {
  id: number;
  image: string;
  title: string;
  price: number;
  packageProgram1: string;
  packageProgram2: string;
  packageProgram3: string;
  packageProgram4: string;
  width: number;
  height: number;
};

const packagesCardsData: PackagesCardData[] = [
  {
    id: 1,
    image: "/images/popular-packages/image-001.webp",
    title: "Bike and rickshaw rental",
    price: 10,
    packageProgram1: "Your bike for a day",
    packageProgram2: "City App",
    packageProgram3: "Discount on Rickshaw",
    packageProgram4: "Guaranteed Support",
    width: 3000,
    height: 1994,
  },
  {
    id: 2,
    image: "/images/popular-packages/image-002.webp",
    title: "Guided tour of the countryside",
    price: 30,
    packageProgram1: "A Mountain Bike Included",
    packageProgram2: "A Guide For You",
    packageProgram3: "Bottle of water",
    packageProgram4: "Guaranteed Support",
    width: 3000,
    height: 1996,
  },
  {
    id: 3,
    image: "/images/popular-packages/image-003.webp",
    title: "Taxi and NCC service",
    price: 45,
    packageProgram1: "Park ticket",
    packageProgram2: "Return bus",
    packageProgram3: "Companion",
    packageProgram4: "Guaranteed Support",
    width: 700,
    height: 525,
  },
  {
    id: 4,
    image: "/images/popular-packages/image-004.webp",
    title: "Bus Package",
    price: 10,
    packageProgram1: "Personal Driver",
    packageProgram2: "Wherever You Want",
    packageProgram3: "At the best price",
    packageProgram4: "Guaranteed Support",
    width: 1500,
    height: 1002,
  },
];

const PopularPackages = () => {
  return (
    <section className="flex flex-col w-full h-full px-[250px] justify-center items-center">
      <h3 className="text-[32px] font-extrabold">The Most Popular Packages</h3>
      <div className="flex gap-6">
        {packagesCardsData.map((item) => (
          <div key={item.id} className="w-[260px] rounded-xl bg-white shadow">
            <Image
              src={item.image}
              alt=""
              width={item.width}
              height={item.height}
              className="w-full h-2/3 object-cover"
              preload
            />
            <h3 className="text-[24px] font-bold">{item.title}</h3>
            <p className="text-[18px] font-normal leading-[26px]">
              {item.price}
            </p>
            <p className="">{item.packageProgram1}</p>
            <p className="">{item.packageProgram2}</p>
            <p className="">{item.packageProgram3}</p>
            <p className="">{item.packageProgram4}</p>
            <button
              className="w-full text-[20px] text-[#FA8B02] font-semibold border border-[#FA8B02] rounded-full py-[12px]"
              type="button"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPackages;
