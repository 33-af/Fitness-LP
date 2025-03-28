import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Staticks = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const countSatisfaction = useMotionValue(0);
    const countExperience = useMotionValue(0);
    const countMembers = useMotionValue(0);

    const roundedSatisfaction = useTransform(countSatisfaction, Math.round);
    const roundedExperience = useTransform(countExperience, Math.round);
    const roundedMembers = useTransform(countMembers, Math.round);

    useEffect(() => {
        if (inView) {
            animate(countSatisfaction, 96, { duration: 4 });
            animate(countExperience, 5, { duration: 2 });
            animate(countMembers, 800, { duration: 5 });
        }
    }, [inView]);

    return (
        <div ref={ref} className=" flex items-center justify-center lg:middle-container  xl:custom-container  ">

            <div className="lg:w[928px] xl:w-[1244px] flex items-center">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center lg:w-[226px] h-[105px] xl:w-[299px] h-[86px] pt-4 pb-4 ">
                        <div className="flex items-baseline mb-1">
                            <motion.h2 className="text-[#D90A14] xl:font-bold  text-4xl  lg:text-[32px] ">
                                <motion.span>{roundedSatisfaction}</motion.span>%
                            </motion.h2>
                            <p className="text-white font-medium ml-2 xl:text-base lg:text-[14px]">Client Satisfaction</p>
                        </div>
                        <p className="text-[#888888] text-xs lg:text-center">Our members love their results and experience</p>
                    </div>
                    <span className="block h-[86px] w-1 bg-gradient-to-r from-[#D90A14] to-[#CD4E17] ml-2" />
                </div>

                <div className="flex items-center">
                    <div className="flex flex-col items-center lg:w-[226px] h-[105px] xl:w-[299px] h-[92px] pt-4 pb-4 ">
                        <div className="flex items-baseline mb-1">
                            <motion.h2 className="text-[#CD4E17] xl:font-bold  text-4xl  lg:text-[32px] ">
                                +<motion.span>{roundedExperience}</motion.span>
                            </motion.h2>
                            <p className="text-white font-medium ml-2 xl:text-base lg:text-[14px]">Years of Experience</p>
                        </div>
                        <p className="text-[#888888] text-xs lg:text-center">Trust in our proven track record of transforming</p>
                    </div>
                    <span className="block h-[86px] w-1 bg-gradient-to-r from-[#D90A14] to-[#CD4E17] ml-2" />
                </div>

                <div className="flex items-center">
                    <div className="flex flex-col items-center lg:w-[226px] h-[105px] xl:w-[299px] h-[92px] pt-6 pb-6 ">
                        <div className="flex items-baseline mb-1">
                            <motion.h2 className="text-[#D90A14] xl:font-bold  text-4xl  lg:text-[32px] ">
                                +<motion.span>{roundedMembers}</motion.span>
                            </motion.h2>
                            <p className="text-white font-medium ml-2 xl:text-base lg:text-[14px]">Active Members</p>
                        </div>
                        <p className="text-[#888888] text-xs lg:text-center">Join our thriving fitness community</p>
                    </div>
                    <span className="block h-[86px] w-1 bg-gradient-to-r from-[#D90A14] to-[#CD4E17] ml-2" />
                </div>

                <div className="flex items-center">
                    <div className="flex flex-col items-center lg:w-[226px] h-[105px] xl:w-[299px] h-[92px] pt-6 pb-6 ">
                        <div className="flex items-baseline mb-1">
                            <h2 className="text-[#CD4E17] xl:font-bold  text-4xl  lg:text-[32px] ">24/7</h2>
                            <p className="text-white font-medium ml-2 xl:text-base lg:text-[14px]">Support Available</p>
                        </div>
                        <p className="text-[#888888] text-xs lg:text-center">Expert assistance whenever you need it</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staticks;
