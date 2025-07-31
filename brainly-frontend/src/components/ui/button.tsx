type Variants = "primary" |  "secondary" 


interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: ()=>void;
}


const variantStyles: Record<Variants,string> = {

    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-400 text-purple-600",

}


const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
}

const defaultStyles = "rounded-md flex flex-row  m-4 items-center cursor-pointer duration-300 hover:scale-110  "

export const Button = (props: ButtonProps) =>{
    return <button className={` flex-col ${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}> {props.startIcon ? <div className="pr-2">{props.startIcon}</div>: null} {props.text} {props.endIcon} </button>
}

