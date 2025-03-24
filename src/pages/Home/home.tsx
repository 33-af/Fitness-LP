import Blog from "../../components/Blog"
import Breadcrumbs from "../../components/Breadcrumbs"
import FeedBack from "../../components/FeedBack"
import Footer from "../../components/Footer"
import Header from "../../components/Header/header"
import Journey from "../../components/Journey"
import Login from "../../components/Login"
import Plan from "../../components/Plan"
import Services from "../../components/Services"
import Staticks from "../../components/Staticks"
import Tools from "../../components/Tools"
import Trainers from "../../components/Trainers"
import Faq from "../../components/Faq"


const Home = () => {
  return (
    <>
      <Header />
      <Journey />
      <Staticks />
      <Breadcrumbs
        title='Our Services'
        subTitle="At This Part You Can Easily access all of our servises. take a look at them and chose wich ever you want."
        classNameTitleOne="font-bold text-[32px] text-white mt-20 mb-6"
        classNameTitleTwo="font-bold text-[32px] text-[#D90A14] mt-20 mb-6"
        classNameSubTitle="text-base text-white mb-6"
      />
      <Services />
      <Breadcrumbs
        title='Our Plans'
        subTitle="Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way."
        classNameTitleOne="font-bold text-[32px] text-white mt-20 mb-6"
        classNameTitleTwo="text-[#D90A14]"
        classNameSubTitle="text-base text-white mb-6"
      />
      <Plan />
      <Tools />
      <Breadcrumbs
        title='What Our Customers Say'
        subTitle="At This Part you can See Few Of The Many Positive reviews Of Our Customers."
        classNameTitleOne="font-bold text-[32px] text-white mt-20 mb-6"
        classNameTitleTwo="font-bold text-[32px] text-white mt-20 mb-6"
        classNameTitleThree="font-bold text-[32px] text-[#D90A14] mt-20 mb-6"
        classNameTitleFour="font-bold text-[32px] text-[#D90A14] mt-20 mb-6"
        classNameSubTitle="text-base text-white mb-3"
      />
      <FeedBack />
      <Trainers />
      <Blog />
      <Login />
      < Breadcrumbs title="FAQ" classNameTitleOne="text-white text-[32px] font-bold mb-8" />
      <Faq />
      <Footer/>
    </>
  )
}

export default Home
