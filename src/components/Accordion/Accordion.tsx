import { useState } from "react";
import AccordionItem from "./AccordionItem";
import data from "../../data/db";





const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4 relative z-50 max-[825px]:text-[12px]  xl:custom-container  lg:middle-container  max-[430px]:small-container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
