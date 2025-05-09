import Button from './Button'
import { motion } from 'framer-motion';

const Plan = () => {
    return (
        <section className='mb-20 mt-0 mx-auto lg:px-[46px]'>
            <div className='custom-container '>
                <div className="flex items-center justify-center w-full">
                    <div className="w-[266px] h-11 border-2 border-solid border-[#D90A14] rounded-3xl flex items-center mb-6 relative z-10 ">
                        <Button title="Monthly" type="button" className="bg-[#D90A14] w-1/2 py-2 px-4 rounded-3xl text-white h-11" />
                        <Button title="Annually" type="button" className="w-1/2 py-2 px-4 text-[#D90A14]" />
                    </div>
                </div>

                <div className="flex items-center justify-between w-full gap-4 max-[1020px]:flex-col max-[600px]:px-[24px]">
                    <motion.div
                        className="w-[calc(100%-72px/3)] border-[3px] border-solid border-[#CD4E17] rounded-[8px] box-content max-[1020px]:w-[75%] max-[600px]:w-full"
                        whileHover={{ scale: 1.05 }} // Для увеличения при наведении
                        initial={{ opacity: 0, y: 20 }} // Начальная позиция с нулевой видимостью
                        animate={{ opacity: 1, y: 0 }} // Конечное состояние: полная видимость и начальная позиция
                        transition={{ duration: 0.6, ease: "easeOut" }} // Плавный переход
                        style={{ cursor: "pointer" }}
                    >
                        <div className="relative w-full">
                            {/* Размытый фон (на заднем плане) */}
                            <div className="absolute inset-0 bg-[#712B0D] w-full  blur-[180px] z-0 opacity-70"></div>

                            {/* Контент (должен быть выше блюра) */}
                            <div className="relative z-10">
                                <div className="my-6 mx-6">
                                    <p className='text-base font-medium text-[#CD4E17] text-center mb-4'> Package</p>
                                    <h2 className='text-3xl text-white text-center typography mb-4'>Pro Plan</h2>
                                    <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Description</h2>
                                    <p className="text-white  xl:text-sm lg:text-[12px] w-full text-justify mb-4 max-[600px]:text-[12px]">
                                        Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!
                                    </p>
                                    <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Features</h2>
                                    <ul className='text-white list-disc lg:text-[12px] ml-5 mb-4 max-[600px]:text-[12px]'>
                                        <li>Access to All Of Our Exercise Videos </li>
                                        <li>Progress Tracking</li>
                                        <li>Supportive Online Community</li>
                                        <li>Advanced, Personalized Workout Plans</li>
                                        <li>Comprehensive Nutrition Coaching</li>
                                        <li>Access to Advanced Workout Programs</li>
                                        <li>Body Composition Analysis</li>
                                    </ul>
                                    <p className='text-white text-[28px] text-center mb-4'>99$<span className='text-[18px] text-[#8B8B8B]'>/USDT</span></p>
                                    <Button title="Choose This Plan" type="button" className="bg-[#CD4E17] w-full py-2 text-white rounded-[20px]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-[calc(100%-72px/3)] border-[3px] border-solid border-[#CD4E17] rounded-[8px] box-content max-[1020px]:w-[75%] max-[600px]:w-full"
                        whileHover={{ scale: 1.05 }} // Для увеличения при наведении
                        initial={{ opacity: 0, y: 20 }} // Начальная позиция с нулевой видимостью
                        animate={{ opacity: 1, y: 0 }} // Конечное состояние: полная видимость и начальная позиция
                        transition={{ duration: 0.6, ease: "easeOut" }} // Плавный переход
                        style={{ cursor: "pointer" }}
                    >
                        <div className="relative w-full">
                            {/* Размытый фон (на заднем плане) */}
                            <div className="absolute inset-0 bg-[#77060B] w-full blur-[200px] z-0 opacity-70"></div>

                            {/* Контент (должен быть выше блюра) */}
                            <div className="relative z-10">
                                <div className="my-6 mx-6">
                                    <p className='text-base font-medium text-[#D90A14] text-center mb-4'> Package</p>
                                    <h2 className='text-3xl text-white text-center typography mb-4'>Custom Plan</h2>
                                    <h2 className='text-base font-medium text-[#D90A14] text-center mb-2'>Description</h2>
                                    <p className="text-white  lg:text-[12px] w-full text-justify mb-4 max-[600px]:text-[12px]">
                                        Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.
                                    </p>
                                    <h2 className='text-base font-medium text-[#D90A14] text-center mb-2'>Features</h2>
                                    <ul className='text-white list-disc lg:text-[12px] ml-5 mb-4 max-[600px]:text-[12px]'>
                                        <li>Access to All Of Our Exercise Videos </li>
                                        <li>Progress Tracking</li>
                                        <li>Supportive Online Community</li>
                                        <li>Fully Customized Workout and Nutrition Plan</li>
                                        <li>Weekly Check-ins with Your Trainer</li>
                                        <li>Access to All Platform Features</li>
                                        <li>Exclusive Gear Discounts</li>
                                    </ul>
                                    <p className='text-white text-[28px] text-center mb-4'>149$<span className='text-[18px] text-[#8B8B8B]'>/USDT</span></p>
                                    <Button title="Choose This Plan" type="button" className="bg-[#D90A14] w-full py-2 text-white rounded-[20px]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-[calc(100%-72px/3)] border-[3px] border-solid border-[#CD4E17] rounded-[8px] box-content max-[1020px]:w-[75%] max-[600px]:w-full"
                        whileHover={{ scale: 1.05 }} // Для увеличения при наведении
                        initial={{ opacity: 0, y: 20 }} // Начальная позиция с нулевой видимостью
                        animate={{ opacity: 1, y: 0 }} // Конечное состояние: полная видимость и начальная позиция
                        transition={{ duration: 0.6, ease: "easeOut" }} // Плавный переход
                        style={{ cursor: "pointer" }}
                    >
                        <div className="relative w-full">
                            {/* Размытый фон (на заднем плане) */}
                            <div className="absolute inset-0 bg-[#712B0D] w-full h-full blur-[180px] z-0 opacity-70"></div>

                            {/* Контент (должен быть выше блюра) */}
                            <div className="relative z-10">
                                <div className="my-6 mx-6">
                                    <p className='text-base font-medium text-[#CD4E17] text-center mb-4'> Package</p>
                                    <h2 className='text-3xl text-white text-center typography mb-4'>Begginer Plan</h2>
                                    <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Description</h2>
                                    <p className="text-white  lg:text-[12px] w-full text-justify mb-4 max-[600px]:text-[12px]">
                                        Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.
                                    </p>
                                    <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Features</h2>
                                    <ul className='text-white list-disc lg:text-[12px] ml-5 mb-9 max-[600px]:text-[12px]'>
                                        <li>Access to All Of Our Exercise Videos </li>
                                        <li>Progress Tracking</li>
                                        <li>Supportive Online Community</li>
                                        <li>Personalized Workout Plans</li>
                                        <li>Basic Nutrition Guidance</li>
                                        <li>Access to Group Fitness Classes</li>
                                    </ul>
                                    <p className='text-white text-[28px] text-center mb-4'>49$<span className='text-[18px] text-[#8B8B8B]'>/USDT</span></p>
                                    <Button title="Choose This Plan" type="button" className="bg-[#CD4E17] w-full py-2 text-white rounded-[20px]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default Plan
