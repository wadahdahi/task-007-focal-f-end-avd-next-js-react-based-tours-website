"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CardData = {
  id: number;
  image: string;
  title: string;
  description: string;
  peopleCount: string;
  status: string;
  price: number;
};

const cardsData: CardData[] = [
  {
    id: 1,
    image: "/images/popular-destination/image-001.webp",
    title: "Lucca Bike Tour",
    description:
      "A tour of the city and its surroundings led by a professional guide...",
    peopleCount: "3-10 PP",
    status: "EVERY DAY",
    price: 34,
  },
  {
    id: 2,
    image: "/images/popular-destination/image-002.webp",
    title: "Wine tasting In Tuscany",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat...",
    peopleCount: "10-30 PP",
    status: "MONDAY",
    price: 34,
  },
  {
    id: 3,
    image: "/images/popular-destination/image-003.webp",
    title: "Cinque Terre Tour",
    description:
      "Visiting the 5 Terre is a must, and you can never go there enough...",
    peopleCount: "10-50 PP",
    status: "TO BE DECIDED",
    price: 34,
  },
  {
    id: 4,
    image: "/images/popular-destination/image-004.webp",
    title: "Siena and Surroundings",
    description:
      "Visit the beautiful Siena and the cities that surround it to experience...",
    peopleCount: "5-10 PP",
    status: "TO BE DECIDED",
    price: 34,
  },
  {
    id: 5,
    image: "/images/popular-destination/image-001.webp",
    title: "CARD 5 - Lucca Bike Tour",
    description:
      "A tour of the city and its surroundings led by a professional guide...",
    peopleCount: "3-10 PP",
    status: "EVERY DAY",
    price: 34,
  },
  {
    id: 6,
    image: "/images/popular-destination/image-002.webp",
    title: "CARD 6 - Wine tasting In Tuscany",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat...",
    peopleCount: "10-30 PP",
    status: "MONDAY",
    price: 34,
  },
];

const VISIBLE = 4;
const AUTO_DELAY = 3000;

const extended = [
  ...cardsData.slice(-VISIBLE),
  ...cardsData,
  ...cardsData.slice(0, VISIBLE),
];

const OurPopularDestinations = () => {
  const [index, setIndex] = useState(VISIBLE);
  const [animate, setAnimate] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startAuto = () => {
    stopAuto();
    timerRef.current = window.setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setIndex((v) => v + 1);
      }
    }, AUTO_DELAY);
  };

  const stopAuto = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [isAnimating]);

  const onTransitionEnd = () => {
    if (index === extended.length - VISIBLE) {
      setAnimate(false);
      setIndex(VISIBLE);
    }

    if (index === 0) {
      setAnimate(false);
      setIndex(cardsData.length);
    }

    setIsAnimating(false);
  };

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  const next = () => {
    if (isAnimating) return;
    stopAuto();
    setIsAnimating(true);
    setIndex((v) => v + 1);
    startAuto();
  };

  const prev = () => {
    if (isAnimating) return;
    stopAuto();
    setIsAnimating(true);
    setIndex((v) => v - 1);
    startAuto();
  };

  return (
    <section className="flex flex-col px-[250px]">
      <div className="flex flex-row w-full h-fit justify-between items-center mb-[57px]">
        <p className="font-extrabold text-[32px] text-[#333333]">
          Explore Our Popular Destinantions
        </p>
        <div className="flex flex-row gap-[20px]">
          <button
            onClick={prev}
            disabled={isAnimating}
            className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-[#EFEFEF] shadow"
          >
            <Image
              src="/icons/arrow-left-gray.png"
              alt=""
              width={14}
              height={7}
              className="w-[7px] h-[14px]"
              preload
            />
          </button>
          <button
            onClick={next}
            disabled={isAnimating}
            className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-[#FA8B02] shadow"
          >
            <Image
              src="/icons/arrow-right-white.png"
              alt=""
              width={14}
              height={7}
              className="w-[7px] h-[14px]"
              preload
            />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 relative overflow-hidden">
        <div
          onTransitionEnd={onTransitionEnd}
          className="flex"
          style={{
            transform: `translateX(-${(index * 100) / VISIBLE}%)`,
            transition: animate ? "transform 0.6s ease" : "none",
          }}
        >
          {extended.map((card, i) => (
            <div key={`${card.id}-${i}`} className="w-1/4 shrink-0 px-4">
              <div className="bg-white shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative h-64">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="w-[330px] h-[404px] rounded-[24px] object-cover"
                    preload
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-[24px] font-semibold">{card.title}</h3>
                  <div className="flex text-[16px] font-semibold">
                    <span>{card.status}</span>
                    <span>{card.peopleCount}</span>
                  </div>
                  <p className="text-gray-600 flex-1">{card.description}</p>
                  <p className="text-2xl font-bold text-green-600">
                    {card.price} €
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPopularDestinations;
