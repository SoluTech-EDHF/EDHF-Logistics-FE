import PageHead from "@/components/PageHead";
import heroSection from "../../assets/Hero Section.png";

const ContactUs = () => {
  return (
    <>
      <PageHead
        backgroundImage={heroSection}
        content="Your Support Starts Here"
        smallText="Contact us for prompt responses, real time help, and smooth logistics every steps of the way"
        hidden="hidden"
      />
    </>
  );
};

export default ContactUs;
