import Breadcrumbs from "../../components/Breadcrumbs"
import Header from "../../components/Header/header"
import Journey from "../../components/Journey"
import Plan from "../../components/Plan"
import Services from "../../components/Services"
import Staticks from "../../components/Staticks"


const Home = () => {
  return (
    <>
      <Header />
      <Journey />
      <Staticks />
      <Breadcrumbs
        title='Our Services'
        subTitle="At This Part You Can Easily access all of our servises. take a look at them and chose wich ever you want."
        classNameTitle="font-bold text-[32px] text-white mt-20 mb-6"
        classNameSubTitle="text-base text-white mb-6"
      />
      <Services/>
      <Breadcrumbs
        title='Our Plans'
        subTitle="Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way."
        classNameTitle="font-bold text-[32px] text-white mt-20 mb-6"
        classNameSubTitle="text-base text-white mb-6"
      />
      <Plan/>
    </>
  )
}

export default Home
