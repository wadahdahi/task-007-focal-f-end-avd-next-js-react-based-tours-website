"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CustomersReviewsData = {
  id: number;
  image: string;
  name: string;
  review: string;
};

const customersReviewsData: CustomersReviewsData[] = [
  {
    id: 1,
    image: "/images/misc/costumer-001.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 2,
    image: "/images/misc/costumer-001.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 3,
    image: "/images/misc/costumer-001.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 4,
    image: "/images/misc/costumer-001.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 5,
    image: "/images/misc/costumer-001.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    id: 6,
    image: "/images/misc/costumer-001.webp",
    name: "Lyod Gomez",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
];

const VISIBLE = 4;
const AUTO_DELAY = 3000;

const extended = [
  ...customersReviewsData.slice(-VISIBLE),
  ...customersReviewsData,
  ...customersReviewsData.slice(0, VISIBLE),
];

const CustomersReviews = () => {
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
      setIndex(customersReviewsData.length);
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
            <div key={`${card.id}-${i}`} className="w-1/2 shrink-0 px-4">
              <div className="bg-white justify-between items-center shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative h-full">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] rounded-full object-cover"
                    preload
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-[24px] font-semibold">{card.name}</h3>
                  <p className="text-gray-600 flex-1">{card.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersReviews;
