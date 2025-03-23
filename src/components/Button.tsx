import  { FC } from 'react'

type ButtonProps = {
    className: string;
    type: "submit" | "reset" | "button" | undefined;
    title: string;
    icon?:string;
}

const Button: FC<ButtonProps> = ({ className, type, title, icon }) => {
    return (
        <button className={className} type={type} >
            {title} {icon}
        </button>
    )
}

export default Button
