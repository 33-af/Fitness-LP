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
import Scroll from "../../components/Scroll"


const Home = () => {
  return (
    <>
      <Header />
      <Journey />
      <Scroll>
        <Staticks />
      </Scroll>
      <Breadcrumbs
        title="Our Services"
        subTitle="At This Part You Can Easily access all of our services. take a look at them and choose whichever you want."
        classNameTitleOne="xl:font-bold xl:text-[32px] text-white xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-white lg:mt-[60px] lg:mb-4"
        classNameTitleTwo="xl:font-bold xl:text-[32px] text-[#D90A14] xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-[#D90A14] lg:mt-[60px] lg:mb-4"
        classNameTitleThree="xl:font-bold xl:text-[32px] text-[#D90A14] xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-[#D90A14] lg:mt-[60px]lg:mb-4"
        classNameTitleFour="xl:font-bold xl:text-[32px] text-[#D90A14] xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-[#D90A14] lg:mt-[60px] lg:mb-4"
        classNameSubTitle="xl:text-base text-white xl:mb-6 lg:text-[14px] text-white lg:mb-4"
      />


      <Scroll>
        <Services />
      </Scroll>
      <Breadcrumbs
        title='Our Plans'
        subTitle="Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way."
        classNameTitleOne="font-bold text-[32px] text-white mt-20 mb-6"
        classNameTitleTwo="text-[#D90A14]"
        classNameSubTitle="text-base text-white mb-6 relative z-10"
      />
      <Scroll>
        <Plan />
      </Scroll>
      <Scroll>
        <Tools />
      </Scroll>
      <Breadcrumbs
        title='What Our Customers Say'
        subTitle="At This Part you can See Few Of The Many Positive reviews Of Our Customers."
        classNameTitleOne="font-bold text-[32px] text-white mt-20 mb-6"
        classNameTitleTwo="font-bold text-[32px] text-white mt-20 mb-6"
        classNameTitleThree="font-bold text-[32px] text-[#D90A14] mt-20 mb-6"
        classNameTitleFour="font-bold text-[32px] text-[#D90A14] mt-20 mb-6"
        classNameSubTitle="text-base text-white mb-3"
      />
      <Scroll>
        <FeedBack />
      </Scroll>
      <Scroll>
        <Trainers />
      </Scroll>
      <Scroll>
        <Blog />
      </Scroll>
      <Scroll>
        <Login />
      </Scroll>
      < Breadcrumbs title="FAQ" classNameTitleOne="text-white font-bold xl:text-[32px] xl:mb-8 lg:text-[24px] mb-4" />
      <Scroll>
        <Faq />
      </Scroll>
      <Footer />
    </>
  )
}

export default Home
