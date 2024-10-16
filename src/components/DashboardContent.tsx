/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const DashboardContent = ({
  dashboardData,
  loading,
}: {
  dashboardData: any;
  loading: any;
}) => {
  const PhotographyData = dashboardData?.filter(
    (item: any) => item?.prompt == "Photography"
  );
  const LearningData = dashboardData?.filter(
    (item: any) => item?.prompt == "Learning"
  );
  return (
    <>
      {loading && "Loading..."}
      {!loading && dashboardData?.length > 0 && (
        <div>
          <img
            className="xl:h-[60px] lg:h-[50px] h-[30px]"
            src="/assets/Logo/Logo_white.png"
            alt=""
          />
          <h2 className="text-white text-4xl font-medium mt-14">
            Welcome <span className="underline">Test</span>
          </h2>
          <p className="text-white font-semibold mt-5">
            Hope you having a good day!
          </p>
          <div className="text-white   my-14">
            <h6 className="text-3xl font-medium mb-5">Photography</h6>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              slidesPerView={"auto"}
              spaceBetween={40}
            >
              {PhotographyData?.map((item: any, index: any) => (
                <SwiperSlide className="w-fit" key={index}>
                  <div className="rounded-[40px] overflow-hidden xl:h-[600px]  h-[400px] md:h-[500px] max-w-[240px] sm:max-w-[350px] md:max-w-[425px]">
                    <img
                      className="w-full h-full"
                      src={item?.image_url}
                      alt="Photography"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-white ">
            <h6 className="text-3xl font-medium mb-5">Learning</h6>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              slidesPerView={"auto"}
              spaceBetween={40}
            >
              {LearningData?.map((item: any, index: any) => (
                <SwiperSlide className="w-fit" key={index}>
                  <div className="rounded-[40px] overflow-hidden xl:h-[600px]  h-[400px] md:h-[500px] max-w-[240px] sm:max-w-[350px] md:max-w-[425px]">
                    <img
                      className="w-full h-full"
                      src={item?.image_url}
                      alt="Photography"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardContent;
