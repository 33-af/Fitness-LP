import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png'
import BuildMuscleImage from '../assets/buildMuscle.png';
import GuideBalanceImage from '../assets/balance.png';
import BenefitsImage from '../assets/BT.png';
import BusyPeopleImage from '../assets/BP.png';
import MotivatedImage from '../assets/MT.png';
import arrowRightButton from '../assets/arrowButton.png'
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <section className='custom-container mb-20'>

            <div className="flex items-center justify-between">
                <h2 className='text-white font-bold text-[32px]'>Fitmaker <span className='text-[#D90A14]'>Blog Posts </span></h2>
                <div className="flex items-start flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <button className="p-0 bg-transparent border-none"><img src={arrowLeft} alt="arrow-left" width={36} height={36} className=' cursor-pointer ' /></button>
                        <button className="p-0 bg-transparent border-none"> <img src={arrowRight} alt="arrow-right" width={36} height={36} className='cursor-pointer' /></button>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className='bg-[#D90A14] w-[40px] h-3 block  rounded-[8px]' />
                        <span className='bg-[#262626] w-[30px] h-3 block   rounded-[8px]' />
                    </div>
                </div>
            </div>
            <p className='text-white text-base my-6 text-center'>Discover essential tips to maximize your workout results and reach your fitness goals faster.</p>
            <div className="relative  w-full h-[380px] ">
                <div className="absolute top-0 right-0  z-10 blur-[100px] bg-[#77060B] w-[527px] h-[380px] rounded-r-full opacity-60 " />
                <div className="flex justify-between">
                    <motion.img
                        src={BuildMuscleImage}
                        alt="Build muscle"
                        width={611}
                        height={380}
                        loading="lazy"
                        whileHover={{ scale: 1.1, zIndex: 100 }}
                        style={{ cursor: "pointer" }}
                    />
                    <div className="flex  flex-col gap-3 relative z-50">
                        <div className="flex items-start gap-3">
                            <motion.img
                                src={GuideBalanceImage}
                                alt="Balance Food"
                                width={299}
                                height={184}
                                loading="lazy"
                                whileHover={{ scale: 1.1 }}
                                style={{ cursor: "pointer" }}
                            />
                            <motion.img
                                src={BenefitsImage}
                                alt="Benefits training"
                                width={299}
                                height={184}
                                loading="lazy"
                                whileHover={{ scale: 1.1 }}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <div className="flex items-start gap-3">
                            <motion.img
                                src={BusyPeopleImage}
                                alt="Busy people"
                                width={299}
                                height={184}
                                loading="lazy"
                                whileHover={{ scale: 1.1 }}
                                style={{ cursor: "pointer" }}
                            />
                            <motion.img
                                src={MotivatedImage}
                                alt="Motivated"
                                width={299}
                                height={184}
                                loading="lazy"
                                whileHover={{ scale: 1.1 }}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <motion.button
                    type='button'
                    whileHover="hover"
                    className='w-[102px]  bg-transparent py-2 px-4 border-[1px]
                    border-solid border-[#CD4E17] flex items-end text-[#CD4E17] text-sm rounded-[12px] mt-6 cursor-pointer  relative overflow-hidden'>
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

        </section>
    )
}

export default Blog
