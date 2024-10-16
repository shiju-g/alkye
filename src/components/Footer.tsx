import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="md:w-10/12 w-11/12 mx-auto xl:px-10 py-20">
        <div className="flex items-center md:gap-x-[40px] gap-x-5 gap-y-5">
          <Link href={"/"}>
            <img
              className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]"
              src="/assets/Icons/facebook.png"
              alt=""
            />
          </Link>
          <Link href={"/"}>
            <img
              className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]"
              src="/assets/Icons/instagram.png"
              alt=""
            />
          </Link>
          <Link href={"/"}>
            <img
              className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]"
              src="/assets/Icons/twitter.png"
              alt=""
            />
          </Link>
          <Link href={"/"}>
            <img
              className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]"
              src="/assets/Icons/twitch.png"
              alt=""
            />
          </Link>
          <Link href={"/"}>
            <img
              className="md:h-[40px] md:w-[40px] h-[30px] w-[30px]"
              src="/assets/Icons/youtube.png"
              alt=""
            />
          </Link>
        </div>
        <div className="mt-16 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-10">
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Privacy Policy
          </Link>
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Contact Us
          </Link>
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Cookie preferences
          </Link>
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Corporate Information
          </Link>
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Privacy Policy
          </Link>
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Contact Us
          </Link>
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Cookie preferences
          </Link>
          <Link
            href={""}
            className="text-white font-semibold  lg:text-lg text-sm hover:text-yellow-500"
          >
            Corporate Information
          </Link>
        </div>
        <p className="text-2xl text-white flex items-center gap-3 font-semibold mt-16">
          <span className="text-gray-600 ">© </span>Alkye Test
        </p>
      </div>
    </div>
  );
};

export default Footer;
