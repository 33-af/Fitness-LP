import LeftMenImage from '../assets/leftMen.png';
import ArrowLeftIcon from '../assets/ArrowLeftDark.svg';
import ArrowRightIcon from '../assets/arrow-right.png';
import RightMenFirstImage from '../assets/rightFirstMen.png';
import RightSecondMenImage from '../assets/rightSecondMen.png'
import Quote from '../assets/quote.png'

const FeedBack = () => {
    return (
        <section className="custom-container mb-20 ">
            <div className='relative z-0 flex  items-end w-full h-[350px]'>
                <div className=" z-10  bg-[#77060B] w-[513px] h-[229px] blur-[200px] rounded-full absolute top-[121px] left-[382px]" />
                <img src={LeftMenImage} alt="men " width={273} height={350} />

                <div className="bg-[#5B0408] w-[623px] h-[192px] rounded-[12px] relative z-50  py-4 px-4 ">
                    <div className="flex  items-center justify-between mb-3">
                        <div className="flex flex-col mb-3">
                            <h2 className='text-white text-[20px]'>Steven Haward</h2>
                            <span className='text-sm text-[#8B8B8B] font-medium'>Our Trainer</span>
                        </div>
                        <img src={Quote} alt="quote-icon " width={38} height={29} />
                    </div>
                    <p className='text-xs text-white'>I’ve Been Using Fitmaker For The Past Three Months, And I’m Genuinely Impressed. The Website Is Easy To Navigate, And Everything Is Laid Out Clearly. I Purchased The Premium Plan, And The Personalized Coaching Has Been A Game-Changer For Me. My Coach Is Incredibly Supportive And Always Available To Answer My Questions. The Weekly Video Sessions Keep Me Motivated, And The Custom Meal Plans Have Helped Me Stay On Track With My Goals. Highly Recommended For Anyone Serious About Their Fitness Journey!</p>
                </div>

                <div className="flex items-center gap-3 ml-6">
                    <button className="p-0 bg-transparent border-none"><img src={ArrowLeftIcon} alt="arrow-left icon" width={36} height={36} /></button>
                    <button className="p-0 bg-transparent border-none"><img src={ArrowRightIcon} alt="arrow-right icon" width={36} height={36} /></button>
                </div>

                <div className="flex gap-4 ml-6">
                    <div className="absolute z-10 top-0 right-0 blur-[145px] bg-[#712B0D] w-[261px] h-[350px] rounded-r-full " />
                    <div className="relative z-20 flex gap-4">
                        <img src={RightMenFirstImage} alt="men image" width={100} height={350} />
                        <img src={RightSecondMenImage} alt="men image" width={100} height={350} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedBack
