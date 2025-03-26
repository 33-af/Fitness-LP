import { FC } from 'react'
import { motion } from 'framer-motion';
type ButtonProps = {
    className: string;
    type: "submit" | "reset" | "button" | undefined;
    title: string;
    icon?: string;
}

const Button: FC<ButtonProps> = ({ className, type, title, icon }) => {
    return (
        <motion.button
            className={className}
            type={type}
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.1 }}
        >
            {icon && <img src={icon} alt="icon" className="mr-2" />}
            {title}

        </motion.button>
    )
}

export default Button
