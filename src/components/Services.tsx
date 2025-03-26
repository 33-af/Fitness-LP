import loseWeightImage from '../assets/LW.png'
import BuildMuscleImage from '../assets/BM.png'
import TrainHomeImage from '../assets/TH.png'
import GymPlanImage from '../assets/GP.png'
import { motion } from 'framer-motion';


const Services = () => {
    return (
        <section className="custom-container relative  mb-20">
            <div className="absolute z-0 top-10 left-10 bg-[#77060B] w-[1244px] h-[183px] blur-[200px]"></div>

            <div className='relative z-50 flex items-center justify-between w-[1244px]'>
                <motion.img
                    src={loseWeightImage}
                    alt="Lose Weight"
                    width={284}
                    height={285}
                     loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                />
                <motion.img
                    src={BuildMuscleImage}
                    alt="Build Muscle"
                    width={284}
                    height={285}
                     loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                />
                <motion.img
                    src={TrainHomeImage}
                    alt="Train at Home"
                    width={284}
                    height={285}
                     loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                />
                <motion.img
                    src={GymPlanImage}
                    alt="Gym Plan"
                    width={284}
                    height={285}
                     loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                />
            </div>
        </section>
    )
}

export default Services
