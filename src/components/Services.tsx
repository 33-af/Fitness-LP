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
            <div className='relative z-50 flex items-center justify-between w-[1244px]'>
                <img src={loseWeightImage} alt="Lose Weight"  width={284} height={285}/>
                <img src={BuildMuscleImage} alt="Build Muscle"  width={284} height={285}/>
                <img src={TrainHomeImage} alt="Train at Home"  width={284} height={285}/>
                <img src={GymPlanImage} alt="Gym Plan" width={284} height={285}/>
            </div>
        </section>
    )
}

export default Services
