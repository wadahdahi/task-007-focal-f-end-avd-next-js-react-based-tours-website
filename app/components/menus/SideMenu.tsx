"use client";

import { useState, useEffect } from "react";
import SideNavbar from "../SideNavbar";

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <button className="flex flex-col lg:hidden" onClick={() => setOpen(true)}>
        <svg
          className="w-6 h-6 text-[#FA8B02] cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            d="M3 6h18M3 12h18M3 18h18"
          />
        </svg>
      </button>
      <aside
        className={`fixed top-0 left-0 h-screen w-full bg-linear-to-b from-orange-800/20 to-amber-800/20 backdrop-blur-md shadow-lg transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="font-bold text-2xl text-[#FA8B02] absolute top-8 right-12 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <SideNavbar />
      </aside>
    </div>
  );
};

export default SideMenu;
