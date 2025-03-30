import Button from "./Button"
import BannerMan from '../assets/BannerMan.png'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";


const Journey = () => {
    const controls = useAnimation();




    useEffect(() => {
        controls.start({ opacity: 1, scale: 1 }); // Когда компонент монтируется, анимация начнется
    }, [controls]);


    return (
        <section className='relative z-0  xl:h-[662px] mb-22 lg:h-[556px] lg:mb-[60px]  max-[430px]:h-[382px] max-[430px]:mb-9  max-[430px]:py-1 px-6'>
            {/* left-block*/}
            <div className="blur-[155px] bg-[#712B0D] rounded-r-full  absolute z-0  xl:top-0  xl:left-0   xl:w-36 xl:h-[654px]  lg:w-[156px] lg:h-[529px] lg:top-[23px] lg:left-0 
            max-[430px]:w-[64px] max-[430px]:h-[337px]
            ">
            </div>



            <div className="flex items-center gap-9 z-10 relative custom-container lg:gap-4 lg:middle-container lg:justify-center  ">
                {/* left-part*/}
                <div className="flex flex-col xl:w-[604px] xl:h-full xl:max-h-[387px]  xl:my-[142px]  lg:w-[456px] lg:h-full lg:max-h-[343px] lg:my-[106px]  lg: gap-4 lg:middle-container  max-[430px]:w-[382px] max-[430px]:items-start  ">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1
                        }}
                        className="flex flex-col items-center xl:mb-9 lg:mb-6"
                    >
                        <div className="max-[430px]:flex items-center gap-1 hidden sm:flex">

                            <div className="mx-[139px] w-[325px]  max-[430px]:w-[189px]  max-[430px]:h-[233px] max-[430px]:py-[55px]  max-[430px]:mx-0">
                                <p className=" font-extrabold text-white text-center  xl:text-[40px] lg:text-[30px]  max-[430px]:text-[20px] max-[430px]:mb-4 ">Achive Your</p>
                                <h1 className=" font-extrabold text-center bg-gradient-to-r from-[#D90A14] to-[#CD4E17] bg-clip-text text-transparent white typography xl:text-[55px] lg:text-[45px]  max-[430px]:text-[24px] max-[430px]:mb-4 ">Fitness Goals</h1>
                                <p className=" font-extrabold text-white text-center  xl:text-[40px] lg:text-[30px]  max-[430px]:text-[20px]">With FitMaker</p>
                            </div>
                            <div className="relative z-0 lg:hidden xl:hidden 2xl:hidden md:hidden sm:hidden">
                                <motion.img
                                    src={BannerMan}
                                    alt="Fitmaker fitness model"
                                    width={536}
                                    height={609}
                                    className="absolute  z-40 max-[430px]:w-[169px] max-[430px]:h-[181px] "
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    layout
                                    transition={{
                                        duration: 1
                                    }}
                                    loading="lazy"
                                />
                                <div className="relative z-20   rounded-full  circle blur-[12px] h-[181px] w-[169px]" />

                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        className=' text-white font-medium  text-justify  xl:w-[604px] xl:h-[66px] xl:mb-9 xl:text-[14px] lg:text-[12px] lg:w-[456px] lg:h-[57px] lg:mb-6  max-[430px]:text-[12px]   max-[430px]:font-normal'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1
                        }}
                    >"Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"</motion.p>
                    <motion.div
                        className="flex items-center xl:gap-6 lg:gap-3  max-[430px]:gap-3   max-[430px]:w-[382px]"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{
                            duration: 3
                        }}
                    >
                        <Button className='py-2 rounded-[24px] bg-[#D90A14] text-white cursor-pointer  border-none xl:w-[290px]  lg:w-[222px]  max-[430px]:w-[185px]   max-[430px]:px-4 ' type="button" title="Start Your Journey" />

                        <motion.button
                            className="relative py-2 rounded-[24px] bg-transparent text-[#CD4E17] border-2 border-solid border-[#CD4E17] cursor-pointer overflow-hidden xl:w-[290px] lg:w-[222px] max-[430px]:px-4 max-[430px]:w-[185px]"
                            type="button"
                            whileHover="hover"
                        >


                            <span className="relative z-10">Explore Programs</span>
                        </motion.button>

                    </motion.div>
                </div>

                {/* right-part*/}
                <div className="z-0 relative  flex justify-center items-end xl:w-full xl:h-[654px] lg:h-[556px] lg:w-[456px] max-[429px]:hidden ">
                    {/* circle*/}
                    <motion.div
                        className="blur-[18px] bg-[#923710]  rounded-full z-20 absolute xl:top-[8px] xl:left-[86px]  xl:w-[72px] xl:h-[68px] lg: top-[21px] lg:left-[25px] lg:w-[54px] lg:h-[68px]   "
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
                        width={536}
                        height={609}
                        className="absolute z-40  xl:top-0 xl:right-5 xl:h-[609px] xl:w-[546px]  lg:top-0 lg:w-[408px] lg:h-[490px] lg:right-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        layout
                        transition={{
                            duration: 1
                        }}
                        loading="lazy"
                    />

                    <motion.div
                        className="z-50 absolute xl:top-[66px] xl:right-0 xl:w-[162px] xl:h-[66px] lg:top-[133px] lg:right-0 xlg:w-[138px] lg:h-[60px] max-[430px]:hidden "
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 3 }}
                    >
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white py-[6px]  xl:px-[36px] lg:px-[24px]">
                                <h2 className="mb-1">+ 1300</h2>
                                <p className="text-[12px]">Positive Reviews</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className=" z-50 absolute xl:top-[183px] xl:left-0  xl:w-[119px] xl:h-[66px]  lg:top-[163px] lg:left-0 lg:w-[95px] lg:h-[60px] max-[430px]:hidden"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 3 }}
                    >
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white  py-[6px] xl:px-[36px] lg:px-[24px]">
                                <h2 className="mb-1">+ 80</h2>
                                <p className="text-[12px]">Coaches</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="z-50 absolute xl:bottom- [55px] xl:left-[23px]  xl:w-[157px] xl:h-[66px]  lg:bottom-[36px] lg:left-[14px] lg:w-[133px] lg:h-[60px] max-[430px]:hidden"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 3 }}
                    >
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white py-[6px]  xl:px-[34px] lg:px-[20px] ">
                                <h2 className="mb-1">+ 1000</h2>
                                <p className="text-[12px]">Workout Videos</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="z-50 absolute xl:bottom-[80px] xl:right-[4px] xl:w-[157px] xl:h-[66px]  lg:bottom-[55px] lg:right-[6px] lg:w-[98px] lg:h-[60px] max-[430px]:hidden"
                        initial={{ opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 3 }}
                    >
                        <div className=" inset-0 rounded-[20px] p-[2px] bg-gradient-to-b from-[#D90A14] to-[#CD4E17]">
                            <div className="w-full h-full bg-[#1D1D1D] rounded-[18px] flex flex-col items-center justify-center text-white py-[6px] xl:px-[34px]  lg:px[24px]">
                                <h2 className="mb-1">+ 1500</h2>
                                <p className="text-[12px]">Trainers</p>
                            </div>
                        </div>
                    </motion.div>


                    {/* big circle*/}
                    <div className="z-20   rounded-full  circle  absolute xl:blur-[12px]   xl:top-[77px]  xl:right-0 xl:w-[570px] xl:h-[533px] lg:top-[77px] lg:right-0 lg:w-[420px] lg:h-[422px]   lg:blur-[25px] max-[430px]:hidden" />

                    {/* circle*/}
                    <motion.div
                        className="blur-[18px] bg-[#9A070E] rounded-full z-20 absolute xl:bottom-0 xl:right-[49px] xl:w-[72px] xl:h-[68px] lg:bottom-0 lg:right-[101px] lg:w-[54px] lg:h-[68px] max-[430px]:hidden"
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
            <div className=" blur-[65px] bg-[#77060B]/60 rounded-l-full backdrop-blur-[5px] absolute z-[1] xl:top-0 xl:right-0 xl:w-66 xl:h-[666px]  lg:top-0 lg:right-0 lg:w-[200px] lg:h-[536px]
              max-[430px]:w-[83px] max-[430px]:h-[342px]
            ">
            </div>
        </section>
    )
}

export default Journey
