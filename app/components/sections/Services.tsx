import Image from "next/image";

type ServiceCardData = {
  id: number;
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

const serviceCardsData: ServiceCardData[] = [
  {
    id: 1,
    image: "/images/services/image-001.webp",
    title: "Bike and rickshaw rental",
    description: "Book your quality vehicle quickly for an hour or all day!",
    width: 3000,
    height: 1992,
  },
  {
    id: 2,
    image: "/images/services/image-002.webp",
    title: "Guided tour of the countryside",
    description:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
    width: 1500,
    height: 847,
  },
  {
    id: 3,
    image: "/images/services/image-003.webp",
    title: "Taxi and NCC service",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
    width: 1500,
    height: 1002,
  },
  {
    id: 4,
    image: "/images/services/image-004.webp",
    title: "Bus Package",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
    width: 1000,
    height: 664,
  },
];

const Services = () => {
  return (
    <section className="flex w-full h-full px-[250px] justify-center items-center">
      <div className="flex gap-6">
        {serviceCardsData.map((item) => (
          <div
            key={item.id}
            className="w-[260px] rounded-xl bg-white shadow p-4"
          >
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
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
