import Button from "./Button"
import BannerMan from '../assets/BannerMan.png'
import { motion, useAnimation, useTime, useTransform } from 'framer-motion';
import { useEffect } from "react";


const Journey = () => {
    const controls = useAnimation();
    const time = useTime();
    const rotate = useTransform(time, [0, 5000], [5, 360], { clamp: false })


    useEffect(() => {
        controls.start({ opacity: 1, scale: 1 }); // Когда компонент монтируется, анимация начнется
    }, [controls]);


    return (
        <section className='relative z-0  h-[654px] mb-22'>
            {/* left-block*/}
            <div className="absolute z-0 top-0 left-0 blur-[125px] bg-[#712B0D] w-36 h-[654px] rounded-r-full ">
            </div>

            <div className="flex items-center gap-9 z-10 relative custom-container  ">
                {/* left-part*/}
                <div className="flex flex-col w-[604px] h-full m-h-[387px]  my-[142px]  ">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1
                        }}
                        className="flex flex-col mb-9"
                    >
                        <div className="mx-[139px] w-[325px]">
                            <p className=" font-extrabold text-[40px]  text-white text-center">Achive Your</p>
                            <h1 className="text-[55px] font-extrabold text-center bg-gradient-to-r from-[#D90A14] to-[#CD4E17] bg-clip-text text-transparent white typography">Fitness Goals</h1>
                            <p className=" font-extrabold text-[40px]  text-white text-center">With FitMaker</p>
                        </div>
                    </motion.div>

                    <motion.p
                        className='text-[14px] text-white font-medium w-[604px] h-[66px] mb-9 text-justify'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1
                        }}
                    >"Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"</motion.p>
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{
                            duration: 3
                        }}
                    >
                        <Button className='w-[290px] py-2 rounded-[24px] bg-[#D90A14] text-white cursor-pointer  border-none' type="button" title="Start Your Journey" />

                        <motion.button
                            className="w-[290px] py-2 rounded-[24px] bg-transparent text-[#CD4E17] border-2 border-solid border-[#CD4E17] cursor-pointer ml-6 relative overflow-hidden"
                            type="button"
                            whileHover="hover"
                        >
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CD4E17] to-transparent opacity-50"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                            />
                            <span className="relative z-10">Explore Programs</span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* right-part*/}
                <div className="z-0 relative w-full h-[654px] flex justify-center items-end ">
                    {/* circle*/}
                    <motion.div
                        className="z-20 absolute top-[8px] left-[86px] blur-[18px] bg-[#923710] w-[72px] h-[68px] rounded-full"
                        animate={{
                            rotate: 360,
                            x: [0, 40, 0], // Двигается вправо (+20px)
                            y: [0, 10, 0],// Двигается вниз (+20px)
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.img
                        src={BannerMan}
                        alt="Fitmaker fitness model"
                        width={569}
                        height={550}
                        className="absolute z-40  top-0 right-0 h-[605px]"
                        initial={{ scale: 0 }} //изначально спрятано и нету
                        animate={{ scale: 1 }} //анимирует потом до появления
                        layout
                        transition={{
                            duration: 1
                        }} //how many seconds the animation will last
                        loading="lazy"
                    />

                    <motion.div
                        className="absolute top-[66px] right-0 w-[162px] h-[66px] z-50"
                        initial={{ opacity: 0 }}
                        animate={controls}  // Появляется после того, как картинка будет видна
                        transition={{ duration: 3 }}
                    >
                        {/* Градиентная рамка */}
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            {/* Внутренний элемент с фоном */}
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white px-[36px] py-[6px]">
                                <h2 className="mb-1">+ 1300</h2>
                                <p className="text-[12px]">Positive Reviews</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute top-[183px] left-0  w-[119px] h-[66px] z-50"
                        initial={{ opacity: 0 }}
                        animate={controls}  // Появляется после того, как картинка будет видна
                        transition={{ duration: 3 }}
                    >
                        {/* Градиентная рамка */}
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            {/* Внутренний элемент с фоном */}
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white px-[36px] py-[6px]">
                                <h2 className="mb-1">+ 80</h2>
                                <p className="text-[12px]">Coaches</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom- [55px] left-[23px]  w-[157px] h-[66px] z-50"
                        initial={{ opacity: 0 }}
                        animate={controls}  // Появляется после того, как картинка будет видна
                        transition={{ duration: 3 }}
                    >
                        {/* Градиентная рамка */}
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            {/* Внутренний элемент с фоном */}
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white px-[34px] py-[6px]">
                                <h2 className="mb-1">+ 1000</h2>
                                <p className="text-[12px]">Workout Videos</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-[80px] right-[4px] w-[157px] h-[66px] z-50"
                        initial={{ opacity: 0 }}
                        animate={controls}  // Появляется после того, как картинка будет видна
                        transition={{ duration: 3 }}
                    >
                        {/* Градиентная рамка */}
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            {/* Внутренний элемент с фоном */}
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white px-[34px] py-[6px]">
                                <h2 className="mb-1">+ 1500</h2>
                                <p className="text-[12px]">Trainers</p>
                            </div>
                        </div>
                    </motion.div>


                    {/* big circle*/}
                    <motion.div
                        className="z-20 absolute top-0 right-0 blur-[12px]  w-[570px] h-[533px] rounded-full mt-17 circle"
                        initial={{ scale: 1 }}
                        style={{ rotate }}
                    />
                    {/* circle*/}
                    <motion.div
                        className="z-20 absolute bottom-0 right-[49px] blur-[18px] bg-[#9A070E] w-[72px] h-[68px] rounded-full"
                        animate={{
                            rotate: 360,
                            x: [0, 40, 0], // Двигается вправо (+20px)
                            y: [0, 40, 0], // Двигается вниз (+20px)
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>

            {/* right-block*/}
            <div className="absolute z-[1] top-0 right-0 blur-[15px] bg-[#77060B]/60 w-66 h-[666px] rounded-l-full backdrop-blur-[5px] ">
            </div>
        </section>
    )
}

export default Journey
