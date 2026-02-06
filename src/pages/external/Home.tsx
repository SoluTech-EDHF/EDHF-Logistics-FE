import riderImage from "../../assets/Rectangle 13.png";
import Girl from "../../assets/girl2.png";
import boy17 from "../../assets/Rectangle 17.png";
import boy18 from "../../assets/Rectangle 18.png";
// import { Link } from 'react-router-dom';
import PageHead from "@/components/PageHead";
import heroPage from "../../assets/landingPage.jpeg";

const Home = () => {
  return (
    <div>
      <PageHead
        backgroundImage={heroPage}
        content="Dependable Delivery You Can Trust"
        smallText="From pickup to drop-off, we simplify logistics so you can focus on what matters most."
        contentStyle="max-sm:text-[32px] max-sm:w-[90%] text-[50px] w-[40%]"
        smallTextStyle="font-semibold h-[15%]! w-[25%]!"
        button="Register"
      />

      {/* Why We Are The Best Fit For You? */}
      <div className="h-screen w-[100%] bg-red flex justify-center items-center bg-[#F2F7F8] max-sm:h-auto max-sm:py-10">
        <div className="h-[95%] w-[90%] flex flex-col justify-between items-center">
          <h1 className="text-[20px] font-semibold mb-6">
            Why We Are The Best Fit For You?
          </h1>
          <div className="h-[95%] w-full flex justify-between items-center max-sm:flex-col max-sm:gap-6">
            <div className="h-full w-[45%] max-sm:w-[100%]">
              <img src={riderImage} alt="" className="h-full w-full" />
            </div>
            <div className="h-full w-[45%] flex flex-col justify-center items-start gap-6 max-sm:w-[100%] max-sm:items-center max-sm:text-center">
              <p className="font-semibold text-[20px] w-[70%] max-sm:w-[90%] max-sm:text-[16px]">
                <span className="text-[#00518A] font-semibold">
                  At Elisha Global Service Ltd,
                </span>{" "}
                we treat every package like it’s own.
              </p>
              <p className="font-semibold text-[20px] w-[70%] max-sm:w-[90%] max-sm:text-[16px]">
                Our flexible delivery solutions are built to scale with your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our services */}
      <div className="h-[120vh] w-[100%] flex flex-col justify-between items-center bg-[#F2F7F8] max-sm:h-auto">
        <h1 className="text-[20px] font-semibold mt-15">Our Services</h1>
        <div className="h-[90%] w-[90%] flex flex-wrap justify-between items-center gap-4 mt-10 max-sm:flex-col">
          {[
            "Document Dispatch",
            "Food Delivery",
            "Document Dispatch",
            "Food Delivery",
            "Document Dispatch",
            "Food Delivery",
          ].map((_, i) => (
            <div
              key={i}
              className="h-[47%] w-[30%] bg-white p-5 rounded-5 shadow-lg flex flex-col justify-between items-start max-sm:w-[100%]"
            >
              <div className="h-[60%] flex justify-between flex-col">
                <h1 className="text-[30px] text-[#FF6600] font-semibold max-sm:text-[22px]">
                  {_}
                </h1>
                <p className="text-[17px] mb-10 text-[#212121] font-normal w-[85%] max-sm:text-[16px]">
                  We use clean containers, quick routes, and trained riders to
                  maintain quality.
                </p>
              </div>
              <p className="text-[#FF6600] text-[20px] font-normal max-sm:text-[16px]">
                {_}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hear what People Says About Us */}
      <div className="h-[70vh] w-[100%] bg-[#F2F7F8] flex justify-center items-center max-sm:h-auto max-sm:py-10">
        <div className="h-[80%] w-[90%] flex justify-between items-center flex-col mt-6">
          <h1 className="text-[20px] font-semibold">
            Hear what People Says About Us
          </h1>
          <div className="h-[90%] w-[100%] flex justify-between items-center gap-4 max-sm:flex-col">
            {[Girl, boy17, boy18].map((img, i) => (
              <div
                key={i}
                className="h-[80%] w-[30%] bg-white flex flex-col justify-between items-center p-4 max-sm:w-[100%]"
              >
                <div className="h-[60%] w-[100%] flex flex-col justify-start items-center gap-5">
                  <h1 className="text-[#212121] text-[20px] font-semibold mt-5">
                    Testimonial
                  </h1>
                  <p className="text-[#212121] font-semibold text-[14px] w-[70%] text-center max-sm:w-[90%]">
                    “I’ve always trusted them with sensitive documents and
                    they’ve never missed a deadline. Their tracking updates keep
                    me at every time.”
                  </p>
                </div>
                <div className="h-[40%] w-[100%] flex flex-col justify-center items-center gap-2">
                  <img src={img} alt="" />
                  <p className="text-[#212121] text-[16px] font-semibold">
                    Customer Name
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
