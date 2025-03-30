import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png'
import CalorieImage from '../assets/calory.png';
import BMIImage from '../assets/BMI.png'
import MacrueImage from '../assets/MacrueCalc.png';
import goalImage from '../assets/goal.png'
import { motion } from 'framer-motion';

const Tools = () => {
    return (
        <section className="xl:px-0  xl:mb-20  lg:px-[46px]">
            <div className="custom-container">
                <div className="flex items-center justify-between lg:middle-container  max-[430px]:flex-wrap">
                    <h2 className='text-white font-bold xl:text-[32px] lg:text-[24px]'>Our fitness <span className='text-[#D90A14]'>Tools</span></h2>
                    <div className="flex items-start flex-col lg:middle-container">
                        <div className="flex items-center gap-3 mb-3">
                            <button className="p-0 bg-transparent border-none">
                                <img src={arrowLeft} alt="arrow-left" className="cursor-pointer xl: w-9 h-9 lg:w-7 lg:h-7" />
                            </button>
                            <button className="p-0 bg-transparent border-none">
                                <img src={arrowRight} alt="arrow-right" className="cursor-pointer xl: w-9 h-9 lg:w-7 lg:h-7" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className='bg-[#D90A14] xl:w-[40px] h-3 block  rounded-[8px] lg:w-9 lg:[10px]' />
                            <span className='bg-[#262626] xl:w-[30px] h-3 block   rounded-[8px] lg:w-[22px] lg:h-[10px]' />
                        </div>
                    </div>

                </div>
                <p className='text-white text-base my-6 text-center relative z-10'>Access a variety of tools to help you reach your fitness goals more effectively</p>
                <div className="relative ">
                    <div className="absolute z-0 top-[10px] left-[10px]   blur-[100px] bg-[#712B0D] w-[1244px] h-[215px] opacity-60 "></div>
                    <div className="flex items-center justify-between relative z-50">
                        <motion.img
                            src={CalorieImage}
                            alt="Calorie Tracker"
                            width={236}
                            height={223}
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            style={{ cursor: "pointer" }}
                            className='xl:w-[236px] xl:h-[223px] lg:w-[176px] lg:h-[177px]'
                        />
                        <motion.img
                            src={BMIImage}
                            alt="BMI Calculator"
                            width={236}
                            height={223}
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            style={{ cursor: "pointer" }}
                            className='xl:w-[236px] xl:h-[223px] lg:w-[176px] lg:h-[177px]'
                        />
                        <motion.img
                            src={MacrueImage}
                            alt="Macronutrient Calculator"
                            width={236}
                            height={223}
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            style={{ cursor: "pointer" }}
                            className='xl:w-[236px] xl:h-[223px] lg:w-[176px] lg:h-[177px]'
                        />
                        <motion.img
                            src={goalImage}
                            alt="Fitness Goal Tracker"
                            width={236}
                            height={223}
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            style={{ cursor: "pointer" }}
                            className='xl:w-[236px] xl:h-[223px] lg:w-[176px] lg:h-[177px]'
                        />
                        <motion.img
                            src={CalorieImage}
                            alt="Calorie Tracker"
                            width={236}
                            height={223}
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            style={{ cursor: "pointer" }}
                            className='xl:w-[236px] xl:h-[223px] lg:w-[176px] lg:h-[177px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools
