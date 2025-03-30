import loseWeightImage from '../assets/LW.png'
import BuildMuscleImage from '../assets/BM.png'
import TrainHomeImage from '../assets/TH.png'
import GymPlanImage from '../assets/GP.png'
import { motion } from 'framer-motion';


const Services = () => {
    return (
        <section className=" relative flex items-center justify-center  xl:custom-container  xl:mb-20 lg:middle-container lg:mb-[60px] ">
            <div className="absolute z-0 top-10 left-10 bg-[#77060B] blur-[250px] xl:w-[1244px] h-[183px] lg:w-[908px] h-[173px] max-[430px]:w-[362px]  max-[430px]:h-[931px]" />

            <div className="relative z-50 flex items-center justify-between gap-4  lg:middle-container  lg:h-[228px]  xl:w-[1244px] xl:h-[285px]  2xl:w-[1244px] max-[430px]:flex-col ">
                <motion.img
                    src={loseWeightImage}
                    alt="Lose Weight"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                    className="lg:w-[223px] h-[228px] xl:w-[284px] xl:h-[285px] max-[430px]:w-[382px] max-[430px]:h-[379px]"

                />
                <motion.img
                    src={BuildMuscleImage}
                    alt="Build Muscle"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                    className="lg:w-[223px] h-[228px] xl:w-[284px] xl:h-[285px] max-[430px]:w-[382px] max-[430px]:h-[379px]"


                />
                <motion.img
                    src={TrainHomeImage}
                    alt="Train at Home"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                    className="lg:w-[223px] h-[228px] xl:w-[284px] xl:h-[285px] max-[430px]:w-[382px] max-[430px]:h-[379px]"


                />
                <motion.img
                    src={GymPlanImage}
                    alt="Gym Plan"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: "pointer" }}
                    className="lg:w-[223px] h-[228px] xl:w-[284px] xl:h-[285px] max-[430px]:w-[382px] max-[430px]:h-[379px]"


                />
            </div>
        </section>

    )
}

export default Services
