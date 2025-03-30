import LeftMenImage from '../assets/leftMen.png';
import ArrowLeftIcon from '../assets/ArrowLeftDark.svg';
import ArrowRightIcon from '../assets/arrow-right.png';
import RightMenFirstImage from '../assets/rightFirstMen.png';
import RightSecondMenImage from '../assets/rightSecondMen.png'
import Quote from '../assets/quote.png'

const FeedBack = () => {
    return (
        <section className="mb-20 lg:px-[46px] max-[950px]:px-6">
            <div className='custom-container'>
                <div className='relative z-0 flex justify-between items-end max-[950px]:items-center w-full h-[350px]'>
                    <div className=" z-10  bg-[#77060B]  blur-[200px] rounded-full absolute top-[121px] left-[382px]" />
                    <div className="max-[650px]:h-[200px] max-[650px]:w-[144px]"><img src={LeftMenImage} alt="men "/></div>

                    <div className="max-[950px]:static bg-[#5B0408] w-[460px] full h-fit rounded-[12px] relative z-50  py-4 px-4 max-[1290px]:left-[200px]  max-[1290px]:max-w-[450px] max-[1290px]:absolute">
                        <div className="flex  items-center justify-between mb-3">
                            <div className="flex flex-col mb-3">
                                <h2 className='text-white text-[20px]'>Steven Haward</h2>
                                <span className='text-sm text-[#8B8B8B] font-medium'>Our Trainer</span>
                            </div>
                            <img src={Quote} alt="quote-icon " width={38} height={29} />
                        </div>
                        <p className='xl:text-[12px] size text-white'>I’ve Been Using Fitmaker For The Past Three Months, And I’m Genuinely Impressed. The Website Is Easy To Navigate, And Everything Is Laid Out Clearly. I Purchased The Premium Plan, And The Personalized Coaching Has Been A Game-Changer For Me. My Coach Is Incredibly Supportive And Always Available To Answer My Questions. The Weekly Video Sessions Keep Me Motivated, And The Custom Meal Plans Have Helped Me Stay On Track With My Goals. Highly Recommended For Anyone Serious About Their Fitness Journey!</p>
                    </div>

                    <div className="flex items-center gap-3 ml-6 max-[950px]:hidden">
                        <button className="p-0 bg-transparent border-none"><img src={ArrowLeftIcon} alt="arrow-left icon" width={36} height={36} /></button>
                        <button className="p-0 bg-transparent border-none"><img src={ArrowRightIcon} alt="arrow-right icon" width={36} height={36} /></button>
                    </div>

                    <div className="flex gap-4 ml-6 max-[950px]:hidden">
                        <div className="absolute z-10 top-0 right-0 blur-[145px] bg-[#712B0D] w-[261px] h-[350px] rounded-r-full " />
                        <div className="relative z-20 flex gap-4">
                            <img src={RightMenFirstImage} alt="men image" />
                            <img src={RightSecondMenImage} alt="men image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedBack
