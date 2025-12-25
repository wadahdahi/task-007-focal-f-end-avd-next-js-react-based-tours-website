import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-[#ffffff] bg-[#333333] w-full h-fit justify-center items-center px-[250px] py-[40px]">
      <div className="flex w-full h-fit justify-start items-start mb-[33px]">
        <Image
          src="/logo/logo.png"
          alt=""
          aria-hidden="true"
          width={133}
          height={130}
          className="h-full w-14"
        />
      </div>
      <hr className="w-full border border-[#929292] mb-[33px]" />
      <div className="flex flex-row gap-[93.7px] w-full h-full justify-start items-start mb-[33px]">
        <div className="flex flex-col">
          <h4 className="text-[20px] font-extrabold mb-[20px]">Services</h4>
          <div className="flex flex-col gap-[10px]">
            <div className="">Bike and Rickshaw rental</div>
            <div className="">Guided Tours of Lucca</div>
            <div className="">Guided Bike Tour of Lucca</div>
            <div className="">Trip In The Tuscan Hills</div>
            <div className="">Transportation With Luxury Cars</div>
            <div className="">Wine Tours By Bus With Guide</div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[20px] font-extrabold mb-[20px]">Home</h4>
          <div className="flex flex-col gap-[10px]">
            <div className="">Home</div>
            <div className="">About Us</div>
            <div className="">Tour Packages</div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[20px] font-extrabold mb-[20px]">Help</h4>
          <div className="flex flex-col gap-[10px]">
            <div className="">Terms of Use</div>
            <div className="">Provicy Policy</div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[20px] font-extrabold mb-[20px]">Contacts</h4>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[10px]">
              <Image
                src="/icons/location.png"
                alt=""
                aria-hidden="true"
                width={17.11}
                height={22}
                className="h-[17.11px] w-[22px]"
              />
              Piazza Napoleone, Lucca, Tuscany
            </div>
            <div className="flex flex-row gap-[10px]">
              <Image
                src="/icons/phone.png"
                alt=""
                aria-hidden="true"
                width={22.7}
                height={22.23}
                className="h-[22.7px] w-[22.23px]"
              />
              +39 346 368 5708
            </div>
            <div className="flex flex-row gap-[10px]">
              <Image
                src="/icons/email.png"
                alt=""
                aria-hidden="true"
                width={22}
                height={18.33}
                className="h-[22px] w-[18.33px]"
              />
              italiainlimo@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[20px] font-extrabold mb-[20px]">Social Media</h4>
          <div className="flex flex-row gap-[23.13px]">
            <Image
              src="/icons/twitter.png"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              className="h-[48px] w-[48px]"
            />
            <Image
              src="/icons/facebook.png"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              className="h-[48px] w-[48px]"
            />
            <Image
              src="/icons/instagram.png"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              className="h-[48px] w-[48px]"
            />
          </div>
        </div>
      </div>
      <hr className="w-full border border-[#929292] mb-[33px]" />
      <p>Copyright © 2025 . Developed By WADAH DAHI . All rights reserved.</p>
    </footer>
  );
};

export default Footer;
