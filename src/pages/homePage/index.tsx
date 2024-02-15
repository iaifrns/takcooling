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

const HomePage = () => {
    return (
        <>
            <FirstTopBar />
            <Navbar/>
            <Banner/>
            <Spacer/>
            <Services/>
            <Spacer/>
            <AboutUs/>
            <Spacer/>
            <WhyUs/>
            <TrustUs/>
            <Spacer/>
            <Testimonies/>
            <Spacer/>
            <CompanyInfo/>
            <Footer/>
        </>
    )
};

export default HomePage;