import FooterLogo from '../assets/landing-logo.png'
import FaceBookIcon from '../assets/FaceBook.png';
import InstagramIcon from '../assets/Instagram.png';
import PhoneIcon from '../assets/Phone.png';
import EmailICon from '../assets/emailIcon.png';
import Location from '../assets/Location.png'
import XIcon from '../assets/X.png';

import YouTubeIcon from '../assets/YouTubeIcon.png';

const Footer = () => {
    return (
        <footer className=" bg-[#181818]  w-full ">
            <div className="xl:w-[1244px] mx-auto my-0 xl:pt-[60px]  xl:pb-[67px] lg:pt-8  lg:middle-container max-w-[430px]:py-8  max-w-[430px]:px-6">
                <div className="flex flex-col items-center  gap-3  max-w-[430px]:w-full sm:flex-row items-start">

                    <div className="flex flex-col xl:w-[515px]  lg:w-[361px]   ">
                        <img src={FooterLogo} alt="footer-logo" width={151} height={63} className='xl: w-[151px] h-[63px] lg:w-[135px] h-[22px] mb-4 max-w-[430px] max-w-[132px] max-h-[53px]' />
                        <div className=" text-[#888888] text-justify xl:font-medium mb-6 text-base lg:mb-4 text-[12px]">
                            Transform Your Body with FitMaker, Your Trusted Partner in Fitness. With Over <span className='text-[#D90A14] '>5 Years</span>  of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. <span className='text-[#D90A14] '>Join Our Community</span> and Start Your Journey Towards a Healthier, Stronger You. Ready to Make a Change?
                        </div>
                        <div className="flex  items-center justify-around ">
                            <img src={FaceBookIcon} alt="Facebook-icon" width={24} height={24} className='cursor-pointer' />
                            <img src={InstagramIcon} alt="Instagram-icon" width={24} height={24} className='cursor-pointer' />
                            <img src={XIcon} alt="X-icon" width={24} height={22} className='cursor-pointer' />
                            <img src={YouTubeIcon} alt="YouTube-icon" width={35} height={25} className='cursor-pointer' />
                        </div>
                    </div>

                    <div className=" flex  gap-1 xl:w-[515px] xl:items-start justify-between xl:h-[301px]  lg:w-[361px]  lg: h-[260px]  max-w-[430px]:w-full max-h-[280px] max-w-[430px]:justify-center items-start">

                        <div className="flex flex-col xl:max-w-[169px] lg:w-[118px] max-w-[124px]:w-full  ">
                            <h2 className="text-[#D90A14] text-[20px] text-center xl:mb-9 lg:mb-6  max-[430px]:mb-6">
                                Company
                            </h2>
                            <div className="text-[#888888] text-[14px] text-center">
                                {["About us", "Our Services", "Careers", "Blog", "Testimonial", "Contact Us"].map((text, index) => (
                                    <p key={index} className="xl:mb-6 lg:mb-6 max-[430px]:mb-[20px] last:mb-0">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col xl:max-w-[169px] lg:w-[118px] max-w-[124px]:w-full  ">
                            <h2 className="text-[#D90A14] text-[20px] text-center xl:mb-9 lg:mb-6  max-[430px]:mb-6">
                                Resources
                            </h2>
                            <div className="text-[#888888] text-[14px] text-center">
                                {[
                                    "Fitness tools",
                                    "Workout Videos",
                                    "Nutrition Guides",
                                    "FAQ",
                                    "Success Stories",
                                    "Membership",
                                ].map((text, index) => (
                                    <p key={index} className="xl:mb-6 lg:mb-6 max-[430px]:mb-[20px] last:mb-0">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>



                        <div className="flex flex-col xl:w-[169px] lg:w-[118px] max-w-[124px] w-full  ">
                            <h2 className="text-[#D90A14] text-[20px] text-center xl:mb-9 lg:mb-6  max-[430px]:mb-6">
                                Programs
                            </h2>
                            <div className="text-[#888888] text-[14px] text-center">
                                {[
                                    "Weight Loss",
                                    "Building Muscles",
                                    "Home Workout",
                                    "Gym Plan",
                                    "Our Plans",
                                    "Fitness group Us",
                                ].map((text, index) => (
                                    <p key={index} className="xl:mb-6 lg:mb-6 max-[430px]:mb-[20px] last:mb-0">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>


                    </div>

                    <div className="flex flex-col xl:max-w-[190px] lg:w-[190px] max-w-[124px] w-full  ">
                        <h2 className='text-[#D90A14] text-[20px] text-center mb-9 lg:mb-6'>Contact Us</h2>
                        <div className="flex items-start flex-col">
                            <div className="flex items-center gap-1 mb-6 w-[190px]">
                                <img src={Location} alt="Location-icon" width={24} height={24} />
                                <p className='text-[#888888] text-[12px] ml-1'>Usa - Washngton DC</p>
                            </div>
                            <div className="flex items-center gap-1 mb-6 w-[190px]">
                                <img src={PhoneIcon} alt="Phone-icon" width={24} height={24} />
                                <p className='text-[#888888] text-[12px] ml-1'>1234-56789C</p>
                            </div>

                            <div className="flex items-center gap-1 w-[190px]">
                                <img src={EmailICon} alt="Email-icon" width={24} height={24} />
                                <p className='text-[#888888] text-[12px] ml-1'>Fitmakerrr@Gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
