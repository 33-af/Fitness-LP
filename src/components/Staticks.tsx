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
        <div ref={ref} className="custom-container flex items-center space-x-4">
            <div className="flex items-center">
                <div className="flex flex-col items-center w-[299px] h-[86px] mt-[18px]">
                    <div className="flex items-baseline mb-1">
                        <motion.h2 className="text-[#D90A14] text-4xl font-bold">
                            <motion.span>{roundedSatisfaction}</motion.span>%
                        </motion.h2>
                        <p className="text-white text-base ml-2">Client Satisfaction</p>
                    </div>
                    <p className="text-[#888888] text-xs">Our members love their results and experience</p>
                </div>
                <span className="block h-[86px] w-1 bg-gradient-to-r from-[#D90A14] to-[#CD4E17] ml-2" />
            </div>

            <div className="flex items-center">
                <div className="flex flex-col items-center w-[299px] h-[86px] mt-[18px]">
                    <div className="flex items-baseline mb-1">
                        <motion.h2 className="text-[#CD4E17] text-4xl font-bold">
                            +<motion.span>{roundedExperience}</motion.span>
                        </motion.h2>
                        <p className="text-white text-base ml-2">Years of Experience</p>
                    </div>
                    <p className="text-[#888888] text-xs">Trust in our proven track record of transforming</p>
                </div>
                <span className="block h-[86px] w-1 bg-gradient-to-r from-[#D90A14] to-[#CD4E17] ml-2" />
            </div>

            <div className="flex items-center">
                <div className="flex flex-col items-center w-[299px] h-[86px] mt-[18px]">
                    <div className="flex items-baseline mb-1">
                        <motion.h2 className="text-[#D90A14] text-4xl font-bold">
                            +<motion.span>{roundedMembers}</motion.span>
                        </motion.h2>
                        <p className="text-white text-base ml-2">Active Members</p>
                    </div>
                    <p className="text-[#888888] text-xs">Join our thriving fitness community</p>
                </div>
                <span className="block h-[86px] w-1 bg-gradient-to-r from-[#D90A14] to-[#CD4E17] ml-2" />
            </div>

            <div className="flex items-center">
                <div className="flex flex-col items-center w-[299px] h-[86px] mt-[18px]">
                    <div className="flex items-baseline mb-1">
                        <h2 className="text-[#CD4E17] text-4xl font-bold">24/7</h2>
                        <p className="text-white text-base ml-2">Support Available</p>
                    </div>
                    <p className="text-[#888888] text-xs">Expert assistance whenever you need it</p>
                </div>
            </div>
        </div>
    );
};

export default Staticks;
