import Logo from "../../assets/LOGO (2).png";

const Footer = () => {
  return (
    <>
      <div className="min-h-[50vh] w-full bg-[#212121] flex justify-center">
        <div className="w-[90%] flex flex-col justify-between items-center py-10">
          {/* Top section */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-10">
            {/* Logo & description */}
            <div className="md:w-[20%] w-full flex flex-col gap-4">
              <img src={Logo} alt="logo" className="w-[120px]" />
              <p className="text-sm font-semibold text-white">
                We provide seamless delivery, real time tracking, and dependable
                logistics solutions
              </p>
            </div>

            {/* Information */}
            <div className="md:w-[20%] w-full flex flex-col gap-3 text-white font-semibold">
              <p className="text-[20px]">Information</p>
              <p className="text-sm cursor-pointer hover:text-[#FF6600]">
                Home
              </p>
              <p className="text-sm cursor-pointer hover:text-[#FF6600]">
                About Us
              </p>
              <p className="text-sm cursor-pointer hover:text-[#FF6600]">
                Contact Us
              </p>
            </div>

            {/* Office */}
            <div className="md:w-[20%] w-full flex flex-col gap-3 text-white font-semibold">
              <p className="text-[20px]">Office</p>
              <p className="text-sm">
                2 Market Street, Tolu Road, 1st Floor, Space 1, Olodi Apapa,
                Lagos.
              </p>
            </div>

            {/* Contact */}
            <div className="md:w-[20%] w-full flex flex-col gap-3 text-white font-semibold">
              <p className="text-[20px]">Contact Us</p>
              <p className="text-sm">
                +234-903-669-9353 <br />
                +351-927-379-914
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="w-full border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white font-semibold text-sm">
            <p>© 2025. All rights reserved.</p>
            <p className="flex gap-4 cursor-pointer">
              <span className="hover:text-[#FF6600]">Privacy</span>
              <span className="hover:text-[#FF6600]">Terms of Services</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
