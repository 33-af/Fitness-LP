import React, { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

type AccordionItemProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    index: number;
    onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick, index }) => {
    const contentHeight = useRef<HTMLDivElement | null>(null);

    const borderColor = index >= 1 && index <= 4 ? "border-[#CD4E17]" : "border-[#D90A14]";


    return (

        <div
            className={`border-2 border-solid ${borderColor} rounded-[8px] rounded-bl-[8px] overflow-hidden xl:mb-6 lg:mb-4`}  // Add rounded-bl-[8px] here
        >            <button className={` bg-transparent border-none cursor-pointer ${isOpen ? "active" : ""} w-full text-left flex items-center justify-between font-medium  xl:py-5 xl:px-6 xl:text-[20px] lg:text-base py-[14px] px-4 `} onClick={onClick}>
                <h2 className="text-white ">{question}</h2>
                <RiArrowDropDownLine className={`text-[32px] text-[#D90A14] w-8 h-8 ${isOpen ? "active" : ""}`} />
            </button>

            <div
                ref={contentHeight}
                className="p-0 px-4 transition-all duration-700 ease-in-out"
                style={{
                    height: isOpen && contentHeight.current ? `${contentHeight.current.scrollHeight}px` : "0px",
                }}
            >
                <p className="py-3 px-3  text-[#888888] text-base rounded-br-[8px] ">{answer}</p>
            </div>

        </div>
    );
};

export default AccordionItem;
