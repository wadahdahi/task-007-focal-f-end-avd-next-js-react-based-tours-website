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
  { id: 1, image: "/images/popular-destination/image-001.webp", title: "Lucca Bike Tour", description: "A tour of the city and its surroundings led by a professional guide...", peopleCount: "3-10 PP", status: "EVERY DAY", price: 34 },
  { id: 2, image: "/images/popular-destination/image-002.webp", title: "Wine tasting In Tuscany", description: "The real magic is here where you can enjoy the best Tuscan wine and eat...", peopleCount: "10-30 PP", status: "MONDAY", price: 34 },
  { id: 3, image: "/images/popular-destination/image-003.webp", title: "Cinque Terre Tour", description: "Visiting the 5 Terre is a must, and you can never go there enough...", peopleCount: "10-50 PP", status: "TO BE DECIDED", price: 34 },
  { id: 4, image: "/images/popular-destination/image-004.webp", title: "Siena and Surroundings", description: "Visit the beautiful Siena and the cities that surround it to experience...", peopleCount: "5-10 PP", status: "TO BE DECIDED", price: 34 },
  { id: 5, image: "/images/popular-destination/image-001.webp", title: "5 - Lucca Bike Tour", description: "A tour of the city and its surroundings led by a professional guide...", peopleCount: "3-10 PP", status: "EVERY DAY", price: 34 },
  { id: 6, image: "/images/popular-destination/image-002.webp", title: "6 - Wine tasting In Tuscany", description: "The real magic is here where you can enjoy the best Tuscan wine and eat...", peopleCount: "10-30 PP", status: "MONDAY", price: 34 },
];

const CARD_WIDTH = 330;
const GAP = 33;
const STEP = CARD_WIDTH + GAP;
const VISIBLE = 4;
const AUTO_DELAY = 3000;

const extended = [
  ...cardsData.slice(-VISIBLE),
  ...cardsData,
  ...cardsData.slice(0, VISIBLE),
];

export default function OurPopularDestinations() {
  const [index, setIndex] = useState(VISIBLE);
  const [animate, setAnimate] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startAuto = () => {
    stopAuto();
    timerRef.current = window.setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setIndex(v => v + 1);
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
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  const next = () => {
    if (isAnimating) return;
    stopAuto();
    setIsAnimating(true);
    setIndex(v => v + 1);
    startAuto();
  };

  const prev = () => {
    if (isAnimating) return;
    stopAuto();
    setIsAnimating(true);
    setIndex(v => v - 1);
    startAuto();
  };

  return (
    <section className="flex flex-col w-full h-full justify-start">
      {/* TITLE + SLIDER BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-0 w-full justify-between items-start sm:items-center mb-[42px] sm:mb-[56px] px-22 sm:px-30 lg:px-36">
        <p className="font-extrabold text-[32px] text-[#333333]">
          Explore Our Popular Destinations
        </p>
        <div className="flex flex-row gap-[20px]">
          <button onClick={prev} disabled={isAnimating} className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-[#EFEFEF] shadow">
            <Image src="/icons/arrow-left-gray.png" alt="" width={14} height={7} className="w-[7px] h-[14px]" />
          </button>
          <button onClick={next} disabled={isAnimating} className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-[#FA8B02] shadow">
            <Image src="/icons/arrow-right-white.png" alt="" width={14} height={7} className="w-[7px] h-[14px]" />
          </button>
        </div>
      </div>
      {/* SLIDER */}
      <div
        className="
          overflow-hidden mx-auto
          w-[330px]
          md:w-[693px]
          xl:w-[1056px]
          2xl:w-[1419px]
          h-auto
        "
      >
        <div
          onTransitionEnd={onTransitionEnd}
          className="flex gap-[33px] w-full h-full"
          style={{
            transform: `translateX(${index * -STEP}px)`,
            transition: animate ? "transform 0.6s ease" : "none",
          }}
        >
          {extended.map((card, i) => (
            <div key={`${card.id}-${i}`} className="shrink-0 w-full sm:w-[330px] h-full">
              <div className="flex flex-col w-full h-auto overflow-hidden">
                <div className="relative w-full h-[280px] sm:w-[330px] sm:h-[280px] 2xl:h-[404px] mb-[16px]">
                  <Image src={card.image} alt={card.title} fill className="rounded-[24px] object-cover" />
                </div>
                <div className="flex flex-col w-full h-auto justify-between">
                  <h3 className="text-[24px] font-semibold mb-[12px]">{card.title}</h3>
                  <p className="text-2xl font-bold text-green-600 mb-[16px]">
                    from <span className="text-[#FA8B02]">{card.price} €</span>
                  </p>
                  <div className="flex flex-row w-auto h-auto px-[7px]
                  text-[16px] text-[#FA8B02] font-semibold leading-[26px]
                  justify-between mb-[13px]">
                    <div className="flex flex-row gap-[6px]">
                      <Image src="/icons/popular-destinations/calandar.png" alt="" width={18.29} height={18.29} className="w-[18.29px] h-[18.29px]" />
                      <span>{card.status}</span>
                    </div>
                    <div className="flex flex-row gap-[6px]">
                      <Image src="/icons/popular-destinations/calandar.png" alt="" width={18.29} height={18.29} className="w-[18.29px] h-[18.29px]" />
                      <span>{card.peopleCount}</span>
                    </div>
                  </div>
                  <p className="text-[18px] text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
