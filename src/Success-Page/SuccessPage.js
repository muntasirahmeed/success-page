import React from "react";
import "./success-page.css";
import logo from "../images/loog.png";
import success from "../images/succss-arrow.png";
const SuccessPage = () => {
  return (
    <div className="page-container">
      <div className="">
        <div className="max-w-[1440px] mx-auto py-5">
          <img src={logo} alt="logo" className="w-[211.68px] h-[45px]" />
        </div>
        <div className="h-[1px] bg-[#EBEEF0]"></div>
        <div className="text-[#0F1419] h-screen">
          <div className=" mt-8">
            <h1 className="font-bold text-[34px] text-center">
              Welcome to Showcase 👋
            </h1>
            <p className="text-center text-[18px] font-[300] leading-[30px] w-[566px] mx-auto mt-3">
              Create an account and start showcasing your <br /> products to a
              global audience looking for new things!
            </p>
          </div>
          <div className="success-div ">
            <div className="flex justify-center flex-col items-center h-full">
              <img src={success} className="w-[157px] h-[143px]" alt="" />
              <p className="text-[24px] font-semibold font-sans mt-3">
                Success! 🎉
              </p>
              <p className="leading-[30px] w-[494px] mx-auto text-[#7A7C8B] mt-4 text-center text-[17px] ">
                You have successfully installed Showcase on your Shopify store
                and will now be able to showcase your products in our feed for
                potential buyers to discover!
              </p>
              <button className="py-3 px-8 rounded-md bg-[#357AF9] hover:bg-blue-600 transition duration-300 ease-in-out text-white font-semibold mt-8 font-[17px]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
