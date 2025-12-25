import Link from "next/link";

const SignUpButton = () => {
  return (
    <div>
      <button
        className="text-[20px] text-[#ffffff] font-semibold w-30 h-11.75 md:w-36 lg:w-42 cursor-pointer rounded-full bg-[#FA8B02]"
        type="button"
      >
        <Link href="/auth">Sign Up</Link>
      </button>
    </div>
  );
};

export default SignUpButton;
