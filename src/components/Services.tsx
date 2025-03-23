import loseWeightImage from '../assets/LW.png'
import BuildMuscleImage from '../assets/BM.png'
import TrainHomeImage from '../assets/TH.png'
import GymPlanImage from '../assets/GP.png'


const Services = () => {
    return (
        <section className="custom-container relative  mb-20">
            {/* Размытый фон */}
            <div className="absolute z-10 top-[10px] left-[10px] bg-[#77060B] w-[1244px] h-[183px] blur-[200px]"></div>

            {/* Контейнер с фотографиями (выше блюра) */}
            <div className="relative z-50 flex items-center gap-4">
                <img src={loseWeightImage} alt="Lose Weight" />
                <img src={BuildMuscleImage} alt="Build Muscle" />
                <img src={TrainHomeImage} alt="Train at Home" />
                <img src={GymPlanImage} alt="Gym Plan" />
            </div>
        </section>
    )
}

export default Services
