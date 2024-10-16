/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Email = ({
  setIsPasswordPage,
  setEmailData,
  emailData,
}: {
  setIsPasswordPage: any;
  setEmailData: any;
  emailData: any;
}) => {
  return (
    <div className="bg-white rounded-[50px] xl:p-[90px] lg:p-[70px] lg:px-auto lg:py-auto py-[50px]  px-[20px]">
      <img
        className="xl:h-[60px] lg:h-[50px] h-[30px]"
        src="/assets/Logo/Logo.png"
        alt=""
      />
      <div className="flex lg:flex-row flex-col md:pt-14 pt-8 xl:gap-14 gap-10 items-center">
        <div className="w-full lg:max-w-lg">
          <p className="md:text-2xl ">STEP 1</p>
          <h1 className="xl:text-[48px] md:text-[38px] text-2xl font-medium leading-tight">
            Enter your email address to continue
          </h1>
          <p className="xl:text-2xl md:text-xl font-normal xl:leading-[50px] mt-5">
            Log in to your account. If you don’t have one, you will be prompted
            to create one.
          </p>
        </div>
        <div className="w-full">
          {/* <label className="xl:text-xl md:font-normal font-medium">
            Enter a password to create your account with 
          </label> */}
          <div className="h-2"></div>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmailData(e.target.value)}
            className="w-full border focus:outline-none md:placeholder:text-xl placeholder:font-medium md:text-2xl font-medium border-[#939393] md:h-[80px] h-[50px] rounded-md md:pl-10 pl-3"
          />
          <div className="flex gap-2  mt-3 items-center md:justify-end justify-between">
            <p className=" text-[#4E4E4E] md:hidden block underline md:text-base text-sm">
              Have an account?
            </p>
            <button
              type="button"
              onClick={() => {
                if (emailData) {
                  setIsPasswordPage(true);
                }
              }}
              className="md:w-[227px] disabled:bg-black/60 disabled:cursor-not-allowed w-fit px-5 flex-shrink-0  md:h-[65px] h-[50px] bg-black text-white font-extrabold text-lg xl:text-xl rounded-[10px]"
              disabled={!emailData}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
