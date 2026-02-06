import React from "react";
import { Link } from "react-router-dom";
// import backgroundImage from "../assets/Frame 24.png"

interface PageHeadProps {
  content: string;
  smallText: string;
  backgroundImage?: string;
  contentStyle?: string;
  smallTextStyle?: string;
  button?: string;
  hidden?: string;
  // other props if any
}

const PageHead: React.FC<PageHeadProps> = ({
  content,
  smallText,
  backgroundImage,
  contentStyle,
  smallTextStyle,
  button,
  hidden,
}) => {
  return (
    <>
      <section
        className="h-[100vh] w-[100%] bg-amber-600 mt-20 relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // clipPath: "ellipse(99% 100% at top)",
        }}
      >
        <div
          className="absolute inset-0 bg-brown opacity-50"
          style={
            {
              // clipPath: "ellipse(99% 100% at top)",
            }
          }
        ></div>
        <div className="relative z-10 px-4 md:px-6 flex flex-col justify-center items-center h-full w-full text-center text-white">
          <h1
            className={`text-[40px]  text-[#FED700] font-bold mb-2 ${contentStyle}`}
          >
            {content}
          </h1>
          <p className={`w-[45%] text-center h-[40%] ${smallTextStyle}`}>
            {smallText}
          </p>
          <Link
            to="/auth/signup"
            className={`p-4 w-[20%] bg-[#FF6600] rounded-[10px] font-semibold text-[18px] ${hidden}`}
          >
            <button>{button}</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PageHead;
