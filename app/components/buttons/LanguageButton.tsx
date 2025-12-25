const LanguageButton = () => {
  return (
    <div>
      <label
        className="text-[20px] text-[#ffffff] font-semibold justify-center items-center"
        id="language"
      >
        {""}
        <select
          className="font-sans cursor-pointer items-center text-[20px]"
          name="language"
        >
          <option className="text-[16px]" value="en">
            Eng
          </option>
          <option className="text-[16px]" value="ar">
            Ar
          </option>
          <option className="text-[16px]" value="de">
            De
          </option>
        </select>
      </label>
    </div>
  );
};

export default LanguageButton;
