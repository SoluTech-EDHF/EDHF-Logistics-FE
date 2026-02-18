import PageHead from "../components/PageHead";
import backgroundImage from "../assets/Frame 24.png";

const AboutUs = () => {
  return (
    <>
      <PageHead
        backgroundImage={backgroundImage}
        content="Driving Excellence in Every Delivery"
        smallText="At Elisha Global Services LTD, we believe that getting what you need should be fast, simple, and stress-free.
Founded with a mission to make everyday life easier, we connect people with the products, services,
and essentials they rely on—delivered straight to their door with speed and care."
        hidden="hidden"
      />

      {/* About section */}
      <section className="w-full flex justify-center py-20">
        <div className="w-[90%] max-w-[1200px] flex flex-col gap-12">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-[32px] md:text-[40px] font-semibold text-[#212121]">
              About Us
            </h1>
            <div className="w-20 h-1 bg-[#00518A] mx-auto mt-4" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 text-[#212121] leading-relaxed">
            <p className="text-[16px] md:text-[18px] font-medium">
              <span className="text-[#00518A] font-semibold">
                At Elisha Global Service Ltd,
              </span>{" "}
              we treat every package as if it were our own. From pickup to
              delivery, we prioritize care, accuracy, and professionalism. With
              trained couriers, strict quality standards, and a proven track
              record of on-time deliveries, we give you complete peace of mind
              from start to finish.
            </p>

            <p className="text-[16px] md:text-[18px] font-medium">
              We understand that every client has unique logistics needs, which
              is why our delivery solutions are designed to be flexible and
              scalable. Whether you’re sending important documents, raw
              foodstuffs, or essential goods, we provide efficient, reliable
              logistics that keep your operations running smoothly.
            </p>

            <p className="text-[16px] md:text-[18px] font-medium">
              <span className="text-[#00518A] font-semibold">
                At Elisha Global Service Ltd,
              </span>{" "}
              we are more than a delivery service—we are your trusted partner in
              fast, safe, and dependable logistics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
