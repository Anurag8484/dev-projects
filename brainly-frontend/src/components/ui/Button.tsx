import type { ReactElement } from "react";

type Variants = "primary" |  "secondary" 


interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: ()=>void;
}


const variantStyles: Record<Variants,string> = {

    primary: "bg-[#E1E5FF] text-[#403AAA]",
    secondary: "bg-[#5046E4]  text-white",

}


const sizeStyles = {
    "sm": "py-1.5 px-3",
    "md": "py-1.5 px-4",
    "lg": "py-1  px-4"
}

const defaultStyles = "rounded-md flex gap-2 flex-row  m-4 items-center cursor-pointer duration-300 hover:scale-110  "

export const Button = (props: ButtonProps) =>{
    return <button className={` ${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}> {props.startIcon} {props.text} {props.endIcon} </button>
}

