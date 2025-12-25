"use client";

const BookingForm = () => {
  return (
    <form className="w-1/2 h-full mx-auto bg-[#ffffff30] px-[34px] py-[30px] rounded-[24px] shadow z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-[18px] font-semibold mb-[8px]">
              Name and Surname
            </label>
            <input
              type="text"
              placeholder="Enter your name and surname"
              className="w-full border bg-[#ffffff] rounded-lg mb-[30px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-[18px] font-semibold mb-[8px]">
              Telephone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your telephone number"
              className="w-full border bg-[#ffffff] rounded-lg mb-[30px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-[18px] font-semibold mb-[8px]">
              Date
            </label>
            <input
              type="date"
              className="w-full border bg-[#ffffff] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-[18px] font-semibold mb-[8px]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border bg-[#ffffff] rounded-lg mb-[30px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-[18px] font-semibold mb-[8px]">
              Service Type
            </label>
            <select className="w-full border bg-[#ffffff] rounded-lg mb-[30px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Select the service types</option>
              <option>Tour</option>
              <option>Private Trip</option>
              <option>Wine Tasting</option>
            </select>
          </div>

          <div>
            <label className="block text-[18px] font-semibold mb-[8px]">
              Time
            </label>
            <input
              type="time"
              className="w-full border bg-[#ffffff] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="bg-[#FA8B02] text-white px-10 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
