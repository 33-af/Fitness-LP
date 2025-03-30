import arrowLeft from "../assets/arrow-left.png"
import arrowRight from "../assets/arrow-right.png"
import TrainerOneImage from '../assets/samCole (1).png'
import TrainerTwoImage from '../assets/MH.png'
import TrainerThreeImage from '../assets/JA.png'
import TrainerFourImage from '../assets/TB.png'
import arrowRightButton from '../assets/arrowButton.png'
import { motion } from 'framer-motion';


const Trainers = () => {
    return (
        <section className=" my-20 mx-auto lg:px-[46px] xl:px-[46px] max-[1280px]:px-[14px] max-[429px]:px-6">
            <div className='custom-container'>
                <div className="flex items-center justify-between">
                    <h2 className='text-white font-bold xl:text-[32px] lg:text-[26px]  max-[430px]:text-[20px]'>Meet Our <span className='text-[#D90A14]'>Trainers</span></h2>
                    <div className="flex items-start flex-col">
                        <div className="flex items-center gap-3 mb-3  max-[430px]:w-[104px]  max-[430px]:justify-between max-[430px]:mb-1">
                            <img src={arrowLeft} alt="arrow-left" width={36} height={36} className=' cursor-pointer  max-[650px]:w-[15px] max-[650px]:h-[15px] max-[430px]:w-10  max-[430px]:h-9' />
                            <img src={arrowRight} alt="arrow-right" width={36} height={36} className='cursor-pointer max-[650px]:w-[15px] max-[650px]:h-[15px] max-[430px]:w-10  max-[430px]:h-9' />
                        </div>
                        <div className="flex items-center xl:gap-3  lg:gap-2 max-[430px]:gap-6  ">
                            <span className='bg-[#D90A14] w-[40px] h-3 block  rounded-[8px] max-[650px]:w-[15px] max-[650px]:w-h-1.5  max-[430px]:w-[40px]  max-[430px]:h-[10px]' />
                            <span className='bg-[#262626] w-[30px] h-3 block   rounded-[8px] max-[650px]:w-[12px] max-[650px]:w-h-1.5 ' />
                        </div>
                    </div>
                </div>
                <p className='xl:text-center text-white xl:text-base lg:text-[14px] lg:text-center my-6 relative  max-[430px]:my-4 max-[430px]:text-[11px] text-left '>At This Part you can See Few Of The Many Positive reviews Of Our Customers.</p>
                <div className="relative xl:w-full xl:h-[394px] lg:h-[310px] flex   justify-between  z-0  max-[430px]:h-[230px]">
                    <div className="xl:mt-[258px]  relative z-0 blur-[100px] bg-[#712B0D] w-full h-[94px] rounded-r-full " />
                    <div className="absolute z-50 grid grid-cols-4 xl:gap-10 max-[1280px]:gap-5 w-full max-[429px]:flex max-[429px]:items-center max-[429px]:gap-3" >
                        <motion.img
                            src={TrainerOneImage}
                            alt="trainer image"
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            style={{ cursor: "pointer" }}
                             className="max-[429px]:w-[119px] max-[429px]:h-[229px] cursor-pointer "
                        />
                        <motion.img
                            src={TrainerTwoImage}
                            alt="trainer image"
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                               className="max-[429px]:w-[119px] max-[429px]:h-[229px] cursor-pointer "
                        />
                        <motion.img
                            src={TrainerThreeImage}
                            alt="trainer image"
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                               className="max-[429px]:w-[119px] max-[429px]:h-[229px] cursor-pointer "
                        />
                        <motion.img
                            src={TrainerFourImage}
                            alt="trainer image"
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            style={{ cursor: "pointer" }}
                            className="max-[429px]:w-[119px] max-[429px]:h-[229px] cursor-pointer  max-[429px]:hidden"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <motion.button
                        type='button'
                        whileHover="hover"
                        className='w-[102px]  bg-transparent py-2 px-4 border-[1px]
                    border-solid border-[#CD4E17] flex items-end text-[#CD4E17] text-sm rounded-[12px]  cursor-pointer  relative overflow-hidden xl:mt-6 lg:mt-4  max-[429px]:mt-4 '>
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CD4E17] to-transparent opacity-50"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                        />
                        <span className="relative z-10"> View  All</span>
                        <img src={arrowRightButton} alt="arrow-right" className='ml-2' />
                    </motion.button>
                </div>
            </div>
        </section >
    )
}

export default Trainers
