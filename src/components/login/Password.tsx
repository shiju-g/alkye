/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuthStore from "@/store/useAusthStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Password = ({
  setPasswordData,
  emailData,
  passwordData,
  setIsPasswordPage,
}: {
  setPasswordData: any;
  emailData: any;
  passwordData: any;
  setIsPasswordPage: any;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const HandleSubmit = async () => {
    setSubmitting(true);
    const response = await fetch(
      "https://untitled-twkmuar27a-uc.a.run.app/api/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: emailData,
          password: passwordData,
        }),
      }
    );

    if (response.ok) {
      const result = await response.json();
      const { setTokenAndUserId } = useAuthStore.getState();
      setTokenAndUserId(result.token, result.user_id);
      setSubmitting(false);
      toast.success("Login Successfull");
      router.push("/dashboard");
    } else {
      setSubmitting(false);
      setIsPasswordPage(false);
      toast.error("Invalid username and password");
    }
  };
  return (
    <div className="bg-white rounded-[50px] xl:p-[90px] lg:p-[70px] lg:px-auto lg:py-auto py-[50px]  px-[20px]">
      <img
        className="xl:h-[60px] lg:h-[50px] h-[30px]"
        src="/assets/Logo/Logo.png"
        alt=""
      />
      <div className="flex lg:flex-row flex-col md:pt-14 pt-8 xl:gap-14 gap-10 items-center">
        <div className="w-full lg:max-w-lg">
          <p className="md:text-2xl ">STEP 2</p>
          <h1 className="xl:text-[48px] md:text-[38px] text-2xl font-medium leading-tight">
            Create an account to continue
          </h1>
          <p className="xl:text-2xl md:text-xl font-normal xl:leading-[50px] mt-5">
            You’ll be able to log in to Dingoo with this email address and
            password.
          </p>
        </div>
        <div className="w-full">
          <label className="xl:text-xl md:font-normal font-medium">
            Enter a password to create your account with 
          </label>
          <div className="h-2"></div>
          <div className="w-full relative md:h-[80px] h-[50px]">
            <input
              type={!showPassword ? "password" : "text"}
              onChange={(e) => setPasswordData(e.target.value)}
              placeholder="Password"
              className="w-full border focus:outline-none md:placeholder:text-xl placeholder:font-medium md:text-2xl font-medium border-[#939393] md:h-[80px] h-[50px] rounded-md md:pl-10 pl-3"
            />
            {passwordData && (
              <div className="absolute top-0 right-0 w-fit h-full flex items-center pr-5">
                {!showPassword && (
                  <p
                    onClick={() => setShowPassword(true)}
                    className="font-medium cursor-pointer"
                  >
                    Show
                  </p>
                )}
                {showPassword && (
                  <img
                    onClick={() => setShowPassword(false)}
                    className="hover:cursor-pointer"
                    src="/assets/Icons/eye-off.png"
                    alt="password"
                  />
                )}
              </div>
            )}
          </div>
          <div className="flex gap-2  mt-3 items-center">
            <p className=" text-[#4E4E4E] md:text-base text-sm">
              Use a minimum of 6 characters (case sensitive) with at least one
              number or special character.
            </p>
            <button
              type="button"
              className="md:w-[227px] disabled:bg-black/60 disabled:cursor-not-allowed w-fit px-5 flex-shrink-0  md:h-[65px] h-[50px] bg-black text-white font-extrabold text-lg xl:text-xl rounded-[10px]"
              onClick={HandleSubmit}
              disabled={!emailData || !passwordData || passwordData.length < 9}
            >
              {submitting ? "Submitting.." : "Agree & Continue"}
            </button>
          </div>
        </div>
      </div>
      <p className=" font-thin text-sm md:mt-10 mt-5">
        Dingoo will use your data to personalise and improve your Dingoo
        experience and to send you information about Dingoo. You can change your
        communication preferences anytime. We may use your data as described in
        our Privacy Policy, including sharing it with The Test of Companies. By
        clicking "Agree & Continue", you agree to our Subscriber Agreement and
        acknowledge that you have read our Privacy Policy and Collection
        Statement.
      </p>
    </div>
  );
};

export default Password;
