"use client";

import Image from "next/image";

const PublicTours = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3.5 bg-[#ffffff] px-3 py-4 justify-between items-start rounded-tr-xl rounded-bl-xl rounded-br-xl">
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 xl:flex xl:flex-row gap-0 sm:gap-2 w-full justify-between items-start
      sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-blue-300/30">
        <div className="flex flex-col w-full h-full px-4">
          <label className="flex flex-row gap-1.75" htmlFor="people">
            <Image
              src="/icons/search-box/people.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-4.5 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[18px]">
                Number of people
              </span>
              <select className="text-[#333333]" id="people">
                <option value="">Choose number</option>
              </select>
            </div>
          </label>
        </div>

        <div className="flex flex-col w-full h-full px-4">
          <label className="flex flex-row gap-1.75" htmlFor="date">
            <Image
              src="/icons/search-box/date.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-4.5 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[18px]">Date</span>
              <input className="text-[#333333]" id="date" type="date" />
            </div>
          </label>
        </div>

        <div className="flex flex-col w-full h-full px-4">
          <label className="flex flex-row gap-1.75" htmlFor="time">
            <Image
              src="/icons/search-box/time.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-4.5 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[18px]">Time</span>
              <input className="text-[#333333]" id="time" type="time" />
            </div>
          </label>
        </div>

        <div className="flex flex-col w-full h-full px-4">
          <label className="flex flex-row gap-1.75" htmlFor="tour">
            <Image
              src="/icons/search-box/tour.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-4.5 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[18px]">Tour</span>
              <select className="text-[#333333]" id="tour">
                <option value="">Select Tour</option>
              </select>
            </div>{" "}
          </label>
        </div>

        <div className="flex flex-col w-full h-full px-4">
          <label className="flex flex-row gap-1.75" htmlFor="transport">
            <Image
              src="/icons/search-box/car.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-4.5 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[18px]">Transportation</span>
              <select className="text-[#333333]" id="transport">
                <option value="">Select Transportation</option>
              </select>
            </div>
          </label>
        </div>
      </div>
      <button
        type="button"
        className="flex w-10 h-10 justify-center items-center cursor-pointer bg-[#FA8B02] rounded-xl"
      >
        {""}
        <Image
          src="/icons/search-box/search.png"
          alt=""
          aria-hidden="true"
          width={18}
          height={18}
          className="h-[25.33px] w-[25.33px]"
        />
      </button>
    </div>
  );
};

export default PublicTours;
