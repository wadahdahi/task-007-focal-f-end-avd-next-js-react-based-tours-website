import CustomersReviews from "./components/cards/CustomersReviews";
import OurPopularDestinations from "./components/cards/OurPopularDestinations";
import HomeHero from "./components/heroes/HomeHero";
import Booking from "./components/sections/Booking";
import PopularPackages from "./components/sections/PopularPackages";
import Services from "./components/sections/Services";
import SpecialOffers from "./components/sections/SpecialOffers";
import WelcomeToOurSite from "./components/sections/WelcomeToOurSite";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[123px] w-screen h-full">
      <HomeHero />
      <OurPopularDestinations />
      <WelcomeToOurSite />
      <SpecialOffers />
      <Services />
      <Booking />
      <PopularPackages />
      <CustomersReviews />
    </div>
  );
};

export default HomePage;
