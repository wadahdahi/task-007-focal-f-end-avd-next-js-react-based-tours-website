import Link from "next/link";
import SignUpButton from "./buttons/SignUpButton";

const SideNavbar = () => {
  return (
    <div className="flex flex-col p-34 justify-center items-center gap-12">
      <nav className="flex flex-col gap-10 lg:gap-6 text-[20px] text-[#ffffff] w-full justify-center items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/tour-packages">Tour Packages</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
      <SignUpButton />
    </div>
  );
};

export default SideNavbar;
