/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DashboardContent from "@/components/DashboardContent";
// import useAuthStore from "@/store/useAusthStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  // const { token } = useAuthStore();
  const router = useRouter();
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchArticles = async (token: any) => {
    setLoading(true);
    const tokenCode = token; // Replace this with your actual token
    const response = await fetch(
      "https://untitled-twkmuar27a-uc.a.run.app/api",
      {
        method: "GET",
        headers: {
          Authorization: `Token ${tokenCode}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log("response error");
      setLoading(false);
    }

    const data = await response.json();
    setDashboardData(data);
    setLoading(false);
  };
  useEffect(() => {
    // Check if window is available (only in client-side rendering)
    if (typeof window !== "undefined") {
      const token: any = localStorage.getItem("auth-storage");
      const tokenData = token ? JSON.parse(token) : null;

      console.log(tokenData);
      if (!tokenData?.state?.token) {
        // Redirect to login if token is not present
        router.push("/"); // Change this to your login route
      } else {
        fetchArticles(tokenData?.state?.token);
      }
    }
  }, [router]);
  return (
    <div className="min-h-screen w-full bg-black lg:py-20 py-10 xl:pl-20 md:pl-10 pl-5">
      {loading && <div className="text-white">Loading...</div>}
      {!loading && dashboardData?.length > 0 && (
        <DashboardContent dashboardData={dashboardData} loading={loading} />
      )}
    </div>
  );
};

export default Page;
