import React, { FC } from 'react'

type ButtonProps = {
    className: string;
    type: "submit" | "reset" | "button" | undefined;
    title: string;
}

const Button: FC<ButtonProps> = ({ className, type, title }) => {
    return (
        <button className={className} type={type} >
            {title}
        </button>
    )
}

export default Button
