import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FC } from 'react';

type ScrollProps = {
    children: React.ReactNode
}


const Scroll: FC<ScrollProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: inView ? 1 : 0, // Когда элемент в области видимости, opacity становится 1
                y: inView ? 0 : 50 // Когда элемент в области видимости, y становится 0 (сдвигается на место)
            }}
            transition={{
                opacity: { duration: 1, ease: "easeOut" }, // Плавное изменение opacity
                y: { duration: 0.5, ease: "easeOut" } // Плавное изменение сдвига
            }}
        >
            {children}
        </motion.div>
    )
}

export default Scroll
