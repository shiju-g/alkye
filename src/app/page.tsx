"use client";
import Email from "@/components/login/Email";
import Password from "@/components/login/Password";
import useAuthStore from "@/store/useAusthStore";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPasswordPage, setIsPasswordPage] = useState(false);
  const [emailData, setEmailData] = useState(null);
  const [passwordData, setPasswordData] = useState(null);
  const { clearAuth } = useAuthStore();

  useEffect(() => {
    clearAuth();
  }, []);
  return (
    <>
      <div className="bg-[#f4f4f4] xl:px-24 lg:px-20 px-4 lg:py-[100px] md:py-[70px] py-[50px]">
        {!isPasswordPage && (
          <Email
            setIsPasswordPage={setIsPasswordPage}
            setEmailData={setEmailData}
            emailData={emailData}
          />
        )}

        {isPasswordPage && (
          <Password
            setPasswordData={setPasswordData}
            emailData={emailData}
            passwordData={passwordData}
            setIsPasswordPage={setIsPasswordPage}
          />
        )}
      </div>
    </>
  );
}
