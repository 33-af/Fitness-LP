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
        <footer className=" bg-[#181818] w-full py-15 lg:px-[46px]">
            <div className="custom-container flex justify-between max-[1020px]:flex-col max-[1020px]:px-6 max-[400px]:px-2">
                <div>
                    <img src={FooterLogo} alt="" />
                    <p className='my-6 text-[#888888] xl:text-[16px] lg:text-[12px] max-[650px]:text-[10px]'>
                        Transform Your Body with FitMaker, Your Trusted Partner in Fitness. <br />
                        With Over <span className='text-red-500'>5 Years</span> of Experience, We Offer Expert Coaching, Tailored  <br />
                        Workout Plans, and Comprehensive Nutritional Guidance. <span className='text-orange-500'>Join Our <br />
                            Community</span> and Start Your Journey Towards a Healthier, Stronger You. <br />
                        Ready to Make a Change? <br />
                    </p>
                    <div className="flex items-center justify-between px-13 max-[1020px]:max-w-100 max-[1020px]:mb-10 max-[650px]:mb-6">
                        <img src={FaceBookIcon} alt="" />
                        <img src={InstagramIcon} alt="" />
                        <img src={XIcon} alt="" />
                        <img src={YouTubeIcon} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-3 xl:gap-12 lg:gap-10'>
                    <div className='flex flex-col gap-6 text-[#888888] text-center xl:text-[16px] lg:text-[12px]  max-[400px]:text-[10px]'>
                        <div className='mb-3 xl:text-[20px] lg:text-[16px] max-[400px]:text-[14px] text-red-500 font-semibold'>Company</div>
                        <a href="#">About us</a>
                        <a href="#">Our Services</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Testimonial</a>
                        <a href="#">Contact Us</a>
                    </div>

                    <div className='flex flex-col gap-6 text-[#888888] text-center xl:text-[16px] lg:text-[12px]  max-[400px]:text-[10px]'>
                        <div className='mb-3 xl:text-[20px] lg:text-[16px] max-[400px]:text-[14px] text-red-500 font-semibold'>Resources</div>
                        <a href="#">Fitness tools</a>
                        <a href="#">Workout Videos</a>
                        <a href="#">nutrition Guides</a>
                        <a href="#">FAQ</a>
                        <a href="#">Success Stories</a>
                        <a href="#">Membership </a>
                    </div>

                    <div className='flex flex-col gap-6 text-[#888888] text-center xl:text-[16px] lg:text-[12px]  max-[400px]:text-[10px]'>
                        <div className='mb-3 xl:text-[20px] lg:text-[16px]  max-[400px]:text-[14px] text-red-500 font-semibold'>Company</div>
                        <a href="#">Weight Loss</a>
                        <a href="#">Building muscles</a>
                        <a href="#">Home Workout</a>
                        <a href="#">Gym Plan</a>
                        <a href="#">Our Plans</a>
                        <a href="#">Programs</a>
                    </div>
                </div>
                <div className='max-[1020px]:max-w-50 max-[1020px]:mt-10 max-[650px]:mt-6'>
                    <div className='text-orange-600 xl:text-[20px] lg:text-[16px] font-semibold mb-12 text-center max-[1020px]:mb-6'>Contact Us</div>
                    <div className="flex flex-col gap-6">
                        <div className='flex items-center gap-2 xl:text-[16px] lg:text-[12px] text-[#888888]'>
                            <img src={Location} alt="" />
                            <div>usa - Washngton DC</div>
                        </div>
                        
                        <div className='flex items-center gap-2 ml-[6px] xl:text-[16px] lg:text-[12px] text-[#888888]'>
                            <img src={PhoneIcon} alt=""/>
                            <div>1234-56789</div>
                        </div>
                        
                        <div className='flex items-center gap-2 ml-[4px] xl:text-[16px] lg:text-[12px] text-[#888888]'>
                            <img src={EmailICon} alt="" />
                            <div>Fitmakerrr@Gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
