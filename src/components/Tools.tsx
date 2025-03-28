import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png'
import CalorieImage from '../assets/calory.png';
import BMIImage from '../assets/BMI.png'
import MacrueImage from '../assets/MacrueCalc.png';
import goalImage from '../assets/goal.png'
import { motion } from 'framer-motion';

const Tools = () => {
    return (
        <section className=" custom-container mb-80">

            <div className="flex items-center justify-between">
                <h2 className='text-white font-bold text-[32px]'>Our fitness <span className='text-[#D90A14]'>Tools</span></h2>
                <div className="flex items-start flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <button className="p-0 bg-transparent border-none">
                            <img src={arrowLeft} alt="arrow-left" width={36} height={36} className="cursor-pointer" />
                        </button>
                        <button className="p-0 bg-transparent border-none">
                            <img src={arrowRight} alt="arrow-right" width={36} height={36} className="cursor-pointer" />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className='bg-[#D90A14] w-[40px] h-3 block  rounded-[8px]' />
                        <span className='bg-[#262626] w-[30px] h-3 block   rounded-[8px]' />
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
                    />
                    <motion.img
                        src={BMIImage}
                        alt="BMI Calculator"
                        width={236}
                        height={223}
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        style={{ cursor: "pointer" }}
                    />
                    <motion.img
                        src={MacrueImage}
                        alt="Macronutrient Calculator"
                        width={236}
                        height={223}
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        style={{ cursor: "pointer" }}
                    />
                    <motion.img
                        src={goalImage}
                        alt="Fitness Goal Tracker"
                        width={236}
                        height={223}
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        style={{ cursor: "pointer" }}
                    />
                    <motion.img
                        src={CalorieImage}
                        alt="Calorie Tracker"
                        width={236}
                        height={223}
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Tools
