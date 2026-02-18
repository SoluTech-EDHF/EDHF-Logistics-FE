// import React from "react";
import Logo from "../../assets/LOGO (1).png";
import DeliveryImage from "../../assets/Delivery-rafiki 1.png";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <div
          className="h-[90%] md:h-[90%] w-[100%] md:w-[80%] 
          flex flex-col md:flex-row justify-between items-center 
          shadow-none md:shadow-2xl rounded-none md:rounded-[10px] p-5"
        >
          <div className="h-[100%] w-[50%]">
            <div className="h-[30%] w-[100%] flex flex-col justify-end items-start gap-6 p-4">
              <h1 className="text-[30px] font-semibold text-[#212121]">
                Forgot Password?
              </h1>
              <p className="text-[18px] text-[#212121] font-semibold">
                Provide the email address used during Sign Up.
              </p>
            </div>
            <div className="h-[40%] w-[90%] flex flex-col justify-center items-center gap-4">
              <form
                action=""
                className="h-auto w-[100%] flex flex-col justify-center items-start gap-4 p-5"
              >
                <p className="text-[18px] font-semibold text-[#212121]">
                  EMAIL
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="h-[50px] w-[90%] text-[#21212180] rounded-[5px] border-2 border-solid border-[#212121] p-3 mb-5"
                />
                <Link
                  to="/auth/verification"
                  className="w-[90%] bg-[#FF6600] text-white font-semibold py-3 rounded-[5px] mb-6 flex justify-center items-center"
                >
                  <button type="submit">SEND</button>
                </Link>
              </form>
            </div>
          </div>
          <div className="hidden md:flex h-[100%] w-[55%] flex-col justify-center items-center">
            <div className="h-[20%] w-[100%] flex justify-end items-center">
              <img src={Logo} alt="" className="mr-8 mt-8" />
            </div>
            <img src={DeliveryImage} alt="" className="h-[90%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
