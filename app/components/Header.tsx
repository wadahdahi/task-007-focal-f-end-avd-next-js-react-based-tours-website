import Image from "next/image";
import SideMenu from "./menus/SideMenu";
import Navbar from "../components/Navbar";
import SignUpButton from "./buttons/SignUpButton";
import LoginButton from "./buttons/LoginButton";
import LanguageButton from "./buttons/LanguageButton";

const Header = () => {
  return (
    <header className="flex 2xl:flex-row z-100 absolute top-0 w-screen h-fit px-[10%] py-[20px] justify-between items-center bg-[#ffffff20]">
      <Image
        src="/logo/logo.png"
        alt=""
        aria-hidden="true"
        width={133}
        height={130}
        className="h-full w-14"
      />
      <Navbar />
      <div className="hidden lg:flex flex-row w-fit gap-4 items-center justify-center">
        <LanguageButton />
        <LoginButton />
        <SignUpButton />
      </div>
      {/* SIDE MENU */}
      <SideMenu />
    </header>
  );
};

export default Header;
