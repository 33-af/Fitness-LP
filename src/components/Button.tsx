import { FC } from 'react'

type ButtonProps = {
    className: string;
    type: "submit" | "reset" | "button" | undefined;
    title: string;
    icon?: string;
}

const Button: FC<ButtonProps> = ({ className, type, title, icon }) => {
    return (
        <button className={className} type={type} >
            {icon && <img src={icon} alt="icon" className="mr-2" />}
            {title}

        </button>
    )
}

export default Button
