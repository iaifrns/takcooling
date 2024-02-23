import { Spacer } from "../../components/common/spacer";
import CompanyInfo from "../../components/companyInfo/CompanyInfo";
import { ContactForm } from "../../components/contactForm";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar";
import { OtherBanner } from "../../components/otherPagesBanner";
import FirstTopBar from "../../components/topbar";

const ContactPage = () => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <FirstTopBar />
      <Navbar
        aboutScroll={onClick}
        serviceScroll={onClick}
        testimonyScroll={onClick}
      />
      <OtherBanner pageName="Contact Us" />
      <Spacer />

      <ContactForm />

      <Spacer />
      <CompanyInfo />
      <Footer />
    </>
  );
};

export default ContactPage;
