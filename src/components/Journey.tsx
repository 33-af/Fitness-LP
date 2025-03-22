import React from 'react'

const Journey = () => {
    return (
        <section className='relative z-0 '>
            <div className="absolute z-0 top-0 left-0 bg-[#712B0D] w-36 h-[666px] rounded-r-full ">
            </div>
            {/* descr */}
            {/* wrapper */}
            <div className="flex items-center gap-9 z-10 relative custom-container top-[141px] left-0 ">
                <div className="flex flex-col w-[604px] ">
                    <h1 className="text-center font-extrabold text-[40px] w-[400px] ml-[115px] leading-tight text-white">
                        Achieve Your <br />
                        <span className="text-7xl bg-gradient-to-r from-[#D90A14] to-[#CD4E17] bg-clip-text text-transparent whitespace-nowrap">
                            Fitness Goals
                        </span>
                        <br />
                        With FitMaker
                    </h1>


                    <p className=''>"Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"</p>
                    <div className="">
                        <button className=''>Start Your Journey</button>
                        <button className=''>Explore Programs</button>
                    </div>
                </div>

                <div className="">
                    {/* circle*/}
                    <div className=""></div>

                </div>
            </div>


            <div className="absolute z-[1] top-0 right-0 bg-[#77060B]/60 w-36 h-[666px] rounded-l-full backdrop-blur-[5px]">
            </div>
        </section>
    )
}

export default Journey
