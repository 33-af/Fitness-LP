
import CalorieImage from '../assets/calory.png';
import BMIImage from '../assets/BMI.png'
import MacrueImage from '../assets/MacrueCalc.png';
import goalImage from '../assets/goal.png'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const images = [CalorieImage, BMIImage, MacrueImage, goalImage, CalorieImage];

const Tools = () => {
    const containerRef = useRef(null);
    const [isSlider, setIsSlider] = useState(false); // Следим, нужен ли слайдер

    // Проверяем ширину экрана при загрузке и изменении размеров
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSlider(window.innerWidth < 1024); // Если < 1024px, включаем слайдер
        };
        checkScreenSize(); // Запускаем проверку при монтировании
        window.addEventListener("resize", checkScreenSize); // Отслеживаем изменения
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <section className="xl:px-0 xl:mb-20 lg:px-[46px] max-[630px]:px-6">
            <div className="custom-container">
                <div className="flex items-center justify-between lg:middle-container max-[430px]:flex-wrap">
                    <h2 className="text-white font-bold xl:text-[32px] lg:text-[24px] max-[630px]:text-[20px]">
                        Our fitness <span className="text-[#D90A14]">Tools</span>
                    </h2>
                </div>
                <p className="text-white text-base my-6 text-center relative z-10 max-[630px]:text-[12px] max-[429px]:mb-4">
                    Access a variety of tools to help you reach your fitness goals more effectively
                </p>
                <div className="relative">
                    <div className="blur-[100px] bg-[#712B0D] opacity-60 absolute z-0 xl:top-[10px] xl:left-[10px] xl:w-[1244px] xl:h-[215px]"></div>
                    
                    {isSlider ? (
                        // 🟢 Включаем слайдер, если экран < 1024px
                        <motion.div ref={containerRef} className="overflow-hidden w-full max-w-[429px] relative z-10">

                            <motion.div
                                className="flex gap-3 cursor-grab"
                                drag="x"
                                dragConstraints={{ right: 0, left: -((images.length - 3) * 130) }}
                            >
                                {images.map((img, index) => (
                                    <motion.img
                                        key={index}
                                        src={img}
                                        alt="Fitness Tool"
                                        width={236}
                                        height={223}
                                        loading="lazy"
                                        whileHover={{ scale: 1.1 }}
                                       className="z-10 xl:w-[236px] xl:h-[223px] lg:w-[176px] lg:h-[177px] max-[630px]:w-[120px] max-[429px]:h-[121px] flex-shrink-0" />
                                ))}
                            </motion.div>
                        </motion.div>
                    ) : (
                        // 🔵 Просто ряд картинок, если экран ≥ 1024px
                        <div className="flex gap-3 justify-center">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="Fitness Tool"
                                    width={236}
                                    height={223}
                                    loading="lazy"
                                    className="xl:w-[236px] xl:h-[223px] lg:w-[176px] lg:h-[177px]"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Tools;