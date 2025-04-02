import Blog from "../../components/Blog"
import Breadcrumbs from "../../components/Breadcrumbs"
import FeedBack from "../../components/FeedBack"
import Footer from "../../components/Footer"
import Header from "../../components/Header/header"
import Journey from "../../components/Journey"
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
        classNameTitleOne="xl:font-bold xl:text-[32px] text-white xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-white lg:mt-[60px] lg:mb-4 max-[430px]:text-[20px] max-[430px]:mt-9 max-[430px]:mb-4 "
        classNameTitleTwo="xl:font-bold xl:text-[32px] text-[#D90A14] xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-[#D90A14] lg:mt-[60px] lg:mb-4"
        classNameTitleThree="xl:font-bold xl:text-[32px] text-[#D90A14] xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-[#D90A14] lg:mt-[60px]lg:mb-4"
        classNameTitleFour="xl:font-bold xl:text-[32px] text-[#D90A14] xl:mt-20 xl:mb-6 lg:font-bold lg:text-[24px] text-[#D90A14] lg:mt-[60px] lg:mb-4"
        classNameSubTitle="xl:text-base text-white xl:mb-6 lg:text-[14px] text-white lg:mb-4 max-[430px]:text-[14px] max-[430px]:mb-4"
      />


      <Scroll>
        <Services />
      </Scroll>
      <Breadcrumbs
        title='Our Plans'
        subTitle="Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way."
        classNameTitleOne="text-white font-bold xl:text-[32px] xl:mt-20 xl:mb-6 lg:text-[27px]  max-[430px]:mt-9   max-[430px]:text-[20px]  max-[430px]:mb-4"
        classNameTitleTwo="text-[#D90A14]"
        classNameSubTitle="xl:text-base lg:text-[13px] text-white mb-6 relative z-10  max-[430px]:text-[14px]"
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
        classNameTitleOne="font-bold xl:text-[32px] text-white xl:mt-20 mb-6 lg:text-[27px] lg:mb-4 lg:mt-[60px] max-[430px]:mt-9   max-[430px]:text-[20px]"
        classNameTitleTwo="font-bold xl:text-[32px] text-white xl:mt-20 mb-6 lg:text-[27px]"
        classNameTitleThree="font-bold xl:text-[32px] text-white mt-20 mb-6 lg:text-[27px]"
        classNameTitleFour="font-bold xl:text-[32px] text-white mt-20 mb-6 lg:text-[27px]"
        classNameSubTitle="xl:text-base lg:text-[13px] text-white mb-6 relative z-10  lg:mb-4"
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
      < Breadcrumbs title="FAQ" classNameTitleOne="text-white font-bold xl:text-[32px] xl:mb-8 xl:mt-20 lg:text-[24px] lg:mb-4 lg:mt-[60px] max-[630px]:text-[20px]  max-[630px]:mb-4 max-[430px]:mt-9" />
      <Scroll>
        <Faq />
      </Scroll>
      <Footer />
    </>
  )
}

export default Home
