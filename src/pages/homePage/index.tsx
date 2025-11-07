import { useRef } from "react";
import AboutUs from "../../components/aboutus/aboutUs";
import Banner from "../../components/banner";
import { Spacer } from "../../components/common/spacer";
import CompanyInfo from "../../components/companyInfo/CompanyInfo";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar";
import Services from "../../components/ourServices/services";
import Testimonies from "../../components/testimonies/testimonies";
import FirstTopBar from "../../components/topbar";
import TrustUs from "../../components/trustUs/trustUs";
import WhyUs from "../../components/whyUs/whyUs";

export const handleWhatsapp = () => {
  const message = "";
  const phone = "+447877020977"
  const encodedMessage = encodeURIComponent(message || "");
  const whatsappUrl = `https://wa.me/${phone}${
    message ? `?text=${encodedMessage}` : ""
  }`;
  window.open(whatsappUrl, "_blank");
};

const HomePage = () => {
  const aboutTargetRef = useRef<HTMLDivElement>(null);
  const serviceTargetRef = useRef<HTMLDivElement>(null);
  const testimonyTargetRef = useRef<HTMLDivElement>(null);

  const onScrollToAbout = () => {
    if (aboutTargetRef.current) {
      aboutTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onScrollToService = () => {
    if (serviceTargetRef.current) {
      serviceTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onScrollToTestimony = () => {
    if (testimonyTargetRef.current) {
      testimonyTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <FirstTopBar />
      <Navbar
        aboutScroll={onScrollToAbout}
        serviceScroll={onScrollToService}
        testimonyScroll={onScrollToTestimony}
      />
      <Banner scrollToService={onScrollToService} />
      <Spacer />
      <Services serviceRef={serviceTargetRef} />
      <Spacer />
      <AboutUs aboutRef={aboutTargetRef} />
      <Spacer />
      <WhyUs />
      <TrustUs />
      <Spacer />
      <Testimonies testimonyRef={testimonyTargetRef} />
      <Spacer />
      <CompanyInfo />
      <Footer />
    </>
  );
};

export default HomePage;
