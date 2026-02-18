// import React from "react";
import Logo from "../../assets/LOGO (1).png";
import DeliveryImage from "../../assets/Delivery-rafiki 1.png";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const SignUp = () => {
  return (
    <>
      <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <div
          className="h-[100%] md:h-[95%] w-[100%] md:w-[80%]
          flex flex-col md:flex-row justify-between items-center
          shadow-none md:shadow-2xl rounded-none md:rounded-[10px]"
        >
          {/* LEFT */}
          <div className="h-[100%] w-[100%] md:w-[50%] flex flex-col justify-center items-center px-6 md:px-0">
            {/* Logo (mobile only) */}
            <div className="w-full flex justify-center md:hidden mb-6">
              <img src={Logo} alt="" />
            </div>

            <div className="h-auto md:h-[20%] w-[100%] md:w-[90%] flex flex-col justify-between items-start">
              <h1 className="text-[#212121] text-[20px] font-semibold mt-3">
                Create Your Account & Move Faster!
              </h1>
              <p className="text-[#212121] font-semibold w-[100%] md:w-[60%] mb-3 text-[14px]">
                A powerful platform built to simplify your deliveries.
              </p>
            </div>

            {/* Form */}
            <form className="h-auto md:h-[80%] w-[100%] md:w-[90%] overflow-y-auto pr-0 md:pr-2 mt-4">
              <p className="text-[#212121] font-semibold">FULL NAME</p>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-[#212121] p-3 mb-5"
              />

              <p className="text-[#212121] font-semibold">EMAIL</p>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-[#212121] p-3 mb-5"
              />

              <p className="text-[#212121] font-semibold">PASSWORD</p>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-[#212121] p-3 mb-5"
              />

              <p className="text-[#212121] font-semibold">CONFIRM PASSWORD</p>
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-[#212121] p-3 mb-5"
              />

              <p className="text-[#212121] font-semibold">PHONE NUMBER</p>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-[#212121] p-3 mb-5"
              />

              <p className="text-[#212121] font-semibold">ADDRESS</p>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-[#212121] p-3 mb-6"
              />

              {/* Register button */}
              <button
                type="submit"
                className="w-full bg-[#FF6600] text-white font-semibold py-3 rounded-[5px] mb-6"
              >
                Register
              </button>

              {/* OR */}
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="flex items-center w-full gap-3">
                  <span className="flex-1 h-[1px] bg-[#21212140]"></span>
                  <p className="text-[#212121] font-semibold text-sm">Or</p>
                  <span className="flex-1 h-[1px] bg-[#21212140]"></span>
                </div>
              </div>

              {/* Social + Login */}
              <div className="w-full flex flex-col justify-between items-center gap-6 mb-10">
                <div className="w-[60%] md:w-[30%] flex justify-between items-center cursor-pointer">
                  <FcGoogle size={30} />
                  <BiLogoFacebookSquare size={30} />
                  <FaLinkedin size={30} />
                </div>
                <h1 className="text-[16px] font-semibold">
                  Already have an account?{" "}
                  <span className="text-[#FF6600] cursor-pointer">Log In</span>
                </h1>
              </div>
            </form>
          </div>

          {/* RIGHT — hidden on mobile */}
          <div className="hidden md:flex h-[100%] w-[45%] flex-col justify-center items-end gap-6">
            <img src={Logo} alt="" className="mr-8" />
            <img src={DeliveryImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
