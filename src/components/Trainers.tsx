import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png'
import TrainerOneImage from '../assets/samCole (1).png'
import TrainerTwoImage from '../assets/MH.png'
import TrainerThreeImage from '../assets/JA.png'
import TrainerFourImage from '../assets/TB.png'
import arrowRightButton from '../assets/arrowButton.png'

const Trainers = () => {
    return (
        <section className="w-[1244px] my-20 mx-auto">
            <div className="flex items-center justify-between">
                <h2 className='text-white font-bold text-[32px]'>Our fitness <span className='text-[#D90A14]'>Tools</span></h2>
                <div className="flex items-start flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <img src={arrowLeft} alt="arrow-left" width={36} height={36} className=' cursor-pointer ' />
                        <img src={arrowRight} alt="arrow-right" width={36} height={36} className='cursor-pointer' />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className='bg-[#D90A14] w-[40px] h-3 block  rounded-[8px]' />
                        <span className='bg-[#262626] w-[30px] h-3 block   rounded-[8px]' />
                    </div>
                </div>
            </div>
            <p className='text-white text-base my-6 text-center'>At This Part you can See Few Of The Many Positive reviews Of Our Customers.</p>
            <div className="relative w-full h-[394px] flex   justify-between  z-0">
                <div className="mt-[258px]  relative z-10 blur-[100px] bg-[#712B0D] w-full h-[94px] rounded-r-full " />
                <div className="absolute z-50 flex items-center justify-between w-full">
                    <img src={TrainerOneImage} alt="trainer image" width={277} height={385} />
                    <img src={TrainerTwoImage} alt="trainer image" width={277} height={385} />
                    <img src={TrainerThreeImage} alt="trainer image" width={277} height={385} />
                    <img src={TrainerFourImage} alt="trainer image" width={277} height={385} />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button type='button' className='w-[102px]  bg-transparent py-2 px-4 border-[1px]
                    border-solid border-[#CD4E17] flex items-end text-[#CD4E17] text-sm rounded-[12px] mt-6'>
                    View All <img src={arrowRightButton} alt="arrow-right" className='ml-2' />
                </button>
            </div>

        </section>
    )
}

export default Trainers
