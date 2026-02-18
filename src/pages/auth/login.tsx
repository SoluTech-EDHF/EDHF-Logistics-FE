import Logo from "../../assets/LOGO (1).png";
import DeliveryImage from "../../assets/Delivery-rafiki 1.png";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="h-[100vh] w-[100%] flex justify-center items-center  md-mt-10">
        <div
          className="h-[90%] md:h-[90%] w-[100%] md:w-[80%] 
          flex flex-col md:flex-row justify-between items-center 
          shadow-none md:shadow-2xl rounded-none md:rounded-[10px]"
        >
          {/* LEFT */}
          <div
            className="h-[100%] w-[100%] md:w-[45%] 
            flex flex-col justify-center items-center px-6 md:px-0"
          >
            <div
              className="h-auto md:h-[25%] w-[100%] md:w-[90%] 
              flex flex-col justify-between items-start"
            >
              <h1 className="text-[#212121] text-[24px] font-semibold mt-8">
                Welcome Back!
              </h1>
              <p className="text-[#212121] font-semibold w-[100%] md:w-[70%] mb-3 text-[14px]">
                Log in to manage your deliveries and stay in control of your
                logistics operations.
              </p>
            </div>

            <form className="h-auto md:h-[80%] w-[100%] md:w-[90%] pr-0 md:pr-2 mt-4">
              <p className="text-[#212121] font-semibold">EMAIL</p>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-solid border-[#212121] p-3 mb-5"
              />

              <p className="text-[#212121] font-semibold">PASSWORD</p>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="h-[50px] w-[100%] text-[#21212180] rounded-[5px] border-2 border-solid border-[#212121] p-3 mb-4"
              />

              {/* Keep signed in */}
              <div className="w-full flex justify-between items-center text-sm font-semibold mb-6 mt-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF6600]" />
                  Keep me signed in
                </label>
                <Link to="/auth/forget-password">
                  <span className="text-[#FF6600] cursor-pointer">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6600] text-white font-semibold py-3 rounded-[5px] mb-6"
              >
                Log In
              </button>

              {/* OR */}
              <div className="flex flex-col items-center gap-4 mb-8 mt-8">
                <div className="flex items-center w-full gap-3">
                  <span className="flex-1 h-[1px] bg-[#21212140]"></span>
                  <p className="text-[#212121] font-semibold text-sm">Or</p>
                  <span className="flex-1 h-[1px] bg-[#21212140]"></span>
                </div>
              </div>

              {/* Social + Signup */}
              <div className="w-[100%] flex flex-col justify-between items-center gap-6 mb-10">
                <div className="w-[60%] md:w-[30%] flex justify-between items-center cursor-pointer">
                  <FcGoogle size={30} />
                  <BiLogoFacebookSquare size={30} />
                  <FaLinkedin size={30} />
                </div>
                <h1 className="text-[16px] font-semibold">
                  Don’t have an account?{" "}
                  <span className="text-[#FF6600] cursor-pointer">Sign Up</span>
                </h1>
              </div>
            </form>
          </div>

          {/* RIGHT (HIDDEN ON MOBILE) */}
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

export default Login;
