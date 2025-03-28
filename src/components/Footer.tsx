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
            <div className="custom-container xl:pt-[60px]  xl:pb-[67px] lg:pt-8  lg:middle-container">
                <div className="flex items-start  justify-between gap-2">
                    <div className="flex flex-col xl:w-[515px] mr-3 lg:w-[361px]">
                        <img src={FooterLogo} alt="footer-logo" width={151} height={63} className='xl: w-[151px] h-[63px] lg:w-[135px] h-[22px] mb-4' />
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

                    <div className="flex  gap-1  xl:w-[515px] h-[301px] lg:w-[361px] h-[260px] ">

                        <div className="flex flex-col xl:w-[169px] lg:w-[118px] ">
                            <h2 className='text-[#D90A14] text-[20px] text-center mb-9 lg:mb-6'>Company</h2>
                            <div className="text-[#888888] text-[14px] text-center ">
                                <p className=' xl:mb-6 lg:mb-[20px]'>About us</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Our Services</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Careers</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Blog</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Testimonial</p>
                                <p >Contact Us</p>
                            </div>
                        </div>

                        <div className="flex flex-col xl:w-[169px] lg:w-[118px] ">
                            <h2 className='text-[#D90A14] text-[20px] text-center mb-9 lg:mb-6'>Resources</h2>
                            <div className="text-[#888888] text-[14px] text-center ">
                                <p className=' xl:mb-6 lg:mb-[20px]'>Fitness tools</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Workout Videos</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Nutrition Guides</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>FAQ</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Success Stories</p>
                                <p>Membership </p>
                            </div>
                        </div>


                        <div className="flex flex-col xl:w-[169px] lg:w-[118px] ">
                            <h2 className='text-[#D90A14] text-[20px] text-center mb-9 lg:mb-6'>Programs</h2>
                            <div className="text-[#888888] text-[14px] text-center ">
                                <p className=' xl:mb-6 lg:mb-[20px]'>Weight Loss</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Building Muscles</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Home Workout</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Gym Plan</p>
                                <p className=' xl:mb-6 lg:mb-[20px]'>Our Plans</p>
                                <p>Fitness group Us</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col w-[190px] h-[187px]  lg:h-[158px]">
                        <h2 className='text-[#D90A14] text-[20px] text-center mb-9 lg:mb-6'>Contact Us</h2>
                        <div className="flex items-start flex-col">
                            <div className="flex items-center gap-1 mb-6">
                                <img src={Location} alt="Location-icon" width={24} height={24} />
                                <p className='text-[#888888] text-[12px] ml-1'>Usa - Washngton DC</p>
                            </div>
                            <div className="flex items-center gap-1 mb-6">
                                <img src={PhoneIcon} alt="Phone-icon" width={24} height={24} />
                                <p className='text-[#888888] text-[12px] ml-1'>1234-56789C</p>
                            </div>

                            <div className="flex items-center gap-1">
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
