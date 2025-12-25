"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";

const SignIn = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-1/3 h-3/4 z-10 relative bg-[#ffffff] rounded-lg p-8 text-[#333333]">
        <button
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          type="button"
          onClick={() => router.push("/")}
        >
          ✕
        </button>
        <Form className="h-full flex flex-col justify-between">
          <div className=" text-start">
            <h2 className="mb-4 text-start text-[32px] font-semibold">
              Create Account
            </h2>

            <Form.Group className="flex flex-col mb-3">
              <Form.Label className="text-[18px] text-[#333333] font-semibold">
                Name and Surname
              </Form.Label>
              <Form.Control
                className="w-full"
                type="text"
                placeholder="Enter your name and surname"
              />
            </Form.Group>

            <Form.Group className="flex flex-col mb-3">
              <Form.Label className="text-[18px] text-[#333333] font-semibold">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Group>

            <Form.Group className="flex flex-col mb-3">
              <Form.Label className="text-[18px] text-[#333333] font-semibold">
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className="flex  gap-2.5 mb-4">
              <Form.Check type="checkbox" label="" />
              <Form.Label>
                I agree with <span className="text-[#FA8B02]">Terms</span> and{" "}
                <span className="text-[#FA8B02]">Privacy</span>{" "}
              </Form.Label>
            </Form.Group>
          </div>

          <div>
            <Button
              variant="primary"
              type="submit"
              className="w-full text-[#ffffff] bg-[#FA8B02] rounded-full mb-3"
            >
              Sign Up
            </Button>

            <p className="text-center mb-2">or</p>

            <Button
              variant="outline-light"
              className="w-full text-[#333333] bg-[#ffffff] border border-[#333333] rounded-full mb-3 justify-center items-center"
            >
              <Image
                src="/icons/google.png"
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                className="h-4.5 w-auto"
              />
              Sign Up with Google
            </Button>

            <p className="text-center mb-0">
              Already have an account?{" "}
              <a href="/login" className="text-[#FA8B02]">
                Log In
              </a>
            </p>
          </div>
        </Form>
      </div>
      <div className="fixed z-8 w-full h-screen bg-linear-to-b from-amber-900/20 to-[#422802]/8200 backdrop-blur-sm"></div>
      <div className="fixed z-0 w-full h-screen justify-start items-center px-[10%] pt-[30%] sm:pt-[18%] md:pt-[16%] xl:pt-[10%] bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/hero/hero-001.webp')] bg-cover bg-center"></div>
    </div>
  );
};

export default SignIn;
