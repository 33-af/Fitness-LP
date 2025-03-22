import Button from "./Button"


const Journey = () => {
    return (
        <section className='relative z-0  h-[654px] mb-22'>
            {/* left-block*/}
            <div className="absolute z-0 top-0 left-0 blur-[125px] bg-[#712B0D] w-36 h-[654px] rounded-r-full ">
            </div>

            <div className="flex items-center gap-9 z-10 relative custom-container  ">
                {/* left-part*/}
                <div className="flex flex-col w-[604px] h-full m-h-[387px]  my-[142px]  ">
                    <div className="flex flex-col mb-9">
                        <div className="mx-[139px] w-[325px]">
                            <p className=" font-extrabold text-[40px]  text-white text-center">Achive Your</p>
                            <h1 className="text-[55px] font-extrabold text-center bg-gradient-to-r from-[#D90A14] to-[#CD4E17] bg-clip-text text-transparent white typography">Fitness Goals</h1>
                            <p className=" font-extrabold text-[40px]  text-white text-center">With FitMaker</p>
                        </div>
                    </div>

                    <p className='text-[14px] text-white font-medium w-[604px] h-[66px] mb-9'>"Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"</p>
                    <div className="">
                        <Button className='w-[290px] py-2 rounded-[24px] bg-[#D90A14] text-white cursor-pointer  border-none' type="button" title="Start Your Journey" />
                        <Button className='w-[290px] py-2 rounded-[24px] bg-transparent text-[#CD4E17]  border-2 border-solid border-[#CD4E17] cursor-pointer ml-6' type="button" title="Explore Programs" />
                    </div>
                </div>

                {/* right-part*/}
                <div className="z-0 relative w-full h-[609px] flex justify-center items-end ">
                    {/* circle*/}
                    <div className="z-20 absolute top-[8px] left-[86px] blur-[18px] bg-[#923710] w-[72px] h-[68px] rounded-full" />
                    {/* big circle*/}
                    <div className="z-20 absolute top-0 right-0 blur-[5px]  w-[570px] h-[533px] rounded-full mt-17 circle" />
                    {/* circle*/}
                    <div className="z-20 absolute bottom-0 right-[49px] blur-[18px] bg-[#9A070E] w-[72px] h-[68px] rounded-full" />
                </div>
            </div>

            {/* right-block*/}
            <div className="absolute z-[1] top-0 right-0 blur-[15px] bg-[#77060B]/60 w-66 h-[666px] rounded-l-full backdrop-blur-[5px] ">
            </div>
        </section>
    )
}

export default Journey
