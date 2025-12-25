import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex gap-10 lg:gap-6 text-[20px] text-[#ffffff] w-full justify-center items-center">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/tour-packages">Tour Packages</Link>
      <Link href="/contact-us">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
