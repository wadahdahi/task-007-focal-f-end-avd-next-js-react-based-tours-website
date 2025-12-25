"use client";

import Image from "next/image";

type Tab = "public" | "private";

type TabsHeaderProps = {
  active: Tab;
  onChange: (tab: Tab) => void;
};

const base =
  "flex p-4.5 gap-2.5 leading-none justify-center items-center cursor-pointer transition-colors";

const activeClass = "bg-white text-[#FA8B02] font-semibold ";
const inactiveClass = "bg-[#ffffff40] text-white";

const TabsHeader = ({ active, onChange }: TabsHeaderProps) => {
  return (
    <div className="flex flex-row">
      <button
        className={`${base} ${
          active === "public" ? activeClass : inactiveClass
        } rounded-tl-xl text-[18px] text-start`}
        type="button"
        title="public"
        onClick={() => onChange("public")}
      >
        <Image
          src={
            active === "public"
              ? "/icons/public-active.png"
              : "/icons/public-disabled.png"
          }
          alt="Public tours"
          width={20}
          height={20}
        />
        Public Tours
      </button>
      <button
        className={`${base} ${
          active === "private" ? activeClass : inactiveClass
        } rounded-tr-xl text-[18px] text-start`}
        type="button"
        title="private"
        onClick={() => onChange("private")}
      >
        <Image
          src={
            active === "private"
              ? "/icons/private-active.png"
              : "/icons/private-disabled.png"
          }
          alt="Public tours"
          width={20}
          height={20}
        />
        Private Tours
      </button>
    </div>
  );
};

export default TabsHeader;
