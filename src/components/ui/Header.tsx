import { useState } from "react";
import Logo from "../../assets/LOGO (1).png";
import profile from "../../assets/Ellipse 2.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false; // change to true when user is logged in

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-[#FF6600]"
      : "text-[#212121] hover:text-[#FF6600]";
  };
  return (
    <header className="w-full fixed top-0 z-50 shadow-md bg-white">
      <div className="flex justify-between items-center w-[90%] mx-auto h-[80px]">
        {/* Logo */}
        <img src={Logo} alt="logo" className="h-[60%] " />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-between w-[70%]">
          <ul className="flex justify-around items-center w-[70%] font-semibold gap-4">
            <Link to="/">
              <li className={isActive("/")}>Home</li>
            </Link>
            <Link to="/about">
              <li className={isActive("/about")}>About Us</li>
            </Link>
            <Link to="/services">
              <li className={isActive("/services")}>Services</li>
            </Link>
            <Link to="/contact">
              <li className={isActive("/contact")}>Contact Us</li>
            </Link>
          </ul>

          {/* Profile */}
          <div className="h-[20%] w-[20%] flex flex-col justify-center items-center gap-2 rounded">
            {isLoggedIn ? (
              <>
                <div className="h-[50%] w-[50%]">
                  <img
                    src={profile}
                    alt="profile"
                    className="mt-3 rounded-full"
                  />
                </div>
                <p className="text-white text-sm font-normal">John Doe</p>
              </>
            ) : (
              <Link
                to="/auth/login"
                className="bg-[#FF6600] text-white w-[90%] h-[40%] rounded text-sm font-semibold p-3 flex justify-center items-center"
              >
                Login
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full bg-white border-t shadow-lg">
          <nav className="flex flex-col items-center gap-6 py-6 font-semibold">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={isActive("/")}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={isActive("/about")}
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className={isActive("/services")}
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={isActive("/contact")}
            >
              Contact Us
            </Link>

            {/* Mobile Profile */}
            <div className="flex flex-col items-center bg-[#00518A] px-6 py-3 rounded">
              <img
                src={profile}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-white text-sm mt-1">John Doe</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
