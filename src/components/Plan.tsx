import Button from './Button'

const Plan = () => {
    return (
        <section className='w-[1244px] mb-20 mt-0 mx-auto '>
            <div className="flex items-center justify-center ">
                <div className="w-[266px] h-11 border-2 border-solid border-[#D90A14] rounded-3xl flex items-center mb-6">
                    <Button title="Monthly" type="button" className="bg-[#D90A14] w-1/2 py-2 px-4 rounded-3xl text-white h-11" />
                    <Button title="Annually" type="button" className="w-1/2 py-2 px-4 text-[#D90A14]" />
                </div>
            </div>

            <div className="flex items-center justify-between w-full">
                <div className=" max-w-[390px]  w-full h-[553px] border-[3px] border-solid border-[#CD4E17] rounded-[8px] ">
                    <div className="relative w-[361px] h-[369px]">
                        {/* Размытый фон (на заднем плане) */}
                        <div className="absolute inset-0 bg-[#712B0D] w-full  blur-[230px] z-0"></div>

                        {/* Контент (должен быть выше блюра) */}
                        <div className="relative z-10">
                            <div className="my-6 mx-6 w-[340px]">
                                <p className='text-base font-medium text-[#CD4E17] text-center mb-4'> Package</p>
                                <h2 className='text-3xl text-white text-center typography mb-4'>Pro Plan</h2>
                                <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Description</h2>
                                <p className="text-white  text-sm w-full text-justify mb-4">
                                    Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!
                                </p>
                                <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Features</h2>
                                <ul className='text-white list-disc text-sm ml-5 mb-4'>
                                    <li>Access to All Of Our Exercise Videos </li>
                                    <li>Progress Tracking</li>
                                    <li>Supportive Online Community</li>
                                    <li>Advanced, Personalized Workout Plans</li>
                                    <li>Comprehensive Nutrition Coaching</li>
                                    <li>Access to Advanced Workout Programs</li>
                                    <li>Body Composition Analysis</li>
                                </ul>
                                <p className='text-white text-[28px] text-center mb-4'>99$<span className='text-[18px] text-[#8B8B8B]'>/USDT</span></p>
                                <Button title="Choose This Plan" type="button" className="bg-[#CD4E17] w-[342px] py-2 text-white rounded-[20px]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" max-w-[390px]  w-full h-[553px] border-[3px] border-solid border-[#D90A14] rouded-[8px] ">
                    <div className="relative w-[361px] h-[369px]">
                        {/* Размытый фон (на заднем плане) */}
                        <div className="absolute inset-0 bg-[#77060B] w-full blur-[300px] z-0"></div>

                        {/* Контент (должен быть выше блюра) */}
                        <div className="relative z-10">
                            <div className="my-6 mx-6 w-[340px]">
                                <p className='text-base font-medium text-[#D90A14] text-center mb-4'> Package</p>
                                <h2 className='text-3xl text-white text-center typography mb-4'>Custom Plan</h2>
                                <h2 className='text-base font-medium text-[#D90A14] text-center mb-2'>Description</h2>
                                <p className="text-white  text-sm w-full text-justify mb-4">
                                    Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.
                                </p>
                                <h2 className='text-base font-medium text-[#D90A14] text-center mb-2'>Features</h2>
                                <ul className='text-white list-disc text-sm ml-5 mb-4'>
                                    <li>Access to All Of Our Exercise Videos </li>
                                    <li>Progress Tracking</li>
                                    <li>Supportive Online Community</li>
                                    <li>Fully Customized Workout and Nutrition Plan</li>
                                    <li>Weekly Check-ins with Your Trainer</li>
                                    <li>Access to All Platform Features</li>
                                    <li>Exclusive Gear Discounts</li>
                                </ul>
                                <p className='text-white text-[28px] text-center mb-4'>149$<span className='text-[18px] text-[#8B8B8B]'>/USDT</span></p>
                                <Button title="Choose This Plan" type="button" className="bg-[#D90A14] w-[342px] py-2 text-white rounded-[20px]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" max-w-[390px]  w-full h-[553px] border-[3px] border-solid border-[#CD4E17] rouded-[8px] ">
                    <div className="relative w-[361px] h-[369px]">
                        {/* Размытый фон (на заднем плане) */}
                        <div className="absolute inset-0 bg-[#712B0D] w-full h-full blur-[200px] z-0"></div>

                        {/* Контент (должен быть выше блюра) */}
                        <div className="relative z-10">
                            <div className="my-6 mx-6 w-[340px]">
                                <p className='text-base font-medium text-[#CD4E17] text-center mb-4'> Package</p>
                                <h2 className='text-3xl text-white text-center typography mb-4'>Begginer Plan</h2>
                                <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Description</h2>
                                <p className="text-white  text-sm w-full text-justify mb-4">
                                    Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.
                                </p>
                                <h2 className='text-base font-medium text-[#CD4E17] text-center mb-2'>Features</h2>
                                <ul className='text-white list-disc text-sm ml-5 mb-9'>
                                    <li>Access to All Of Our Exercise Videos </li>
                                    <li>Progress Tracking</li>
                                    <li>Supportive Online Community</li>
                                    <li>Personalized Workout Plans</li>
                                    <li>Basic Nutrition Guidance</li>
                                    <li>Access to Group Fitness Classes</li>
                                </ul>
                                <p className='text-white text-[28px] text-center mb-4'>49$<span className='text-[18px] text-[#8B8B8B]'>/USDT</span></p>
                                <Button title="Choose This Plan" type="button" className="bg-[#CD4E17] w-[342px] py-2 text-white rounded-[20px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    )
}

export default Plan
