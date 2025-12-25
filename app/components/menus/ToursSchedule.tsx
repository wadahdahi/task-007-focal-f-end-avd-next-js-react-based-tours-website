"use client";

import { useState } from "react";
import PublicTours from "../PublicTours";
import PrivateTours from "../PrivateTours";
import TabsHeader from "../TabsHeader";

const ToursSchedule = () => {
  const [active, setActive] = useState<"public" | "private">("public");

  return (
    <div className="flex flex-col w-full p-5 bg-[#ffffff20] rounded-xl">
      <TabsHeader active={active} onChange={setActive} />
      {active === "public" && <PublicTours />}
      {active === "private" && <PrivateTours />}
    </div>
  );
};

export default ToursSchedule;
