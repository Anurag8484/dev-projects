export interface IconProps{
    size: "sm" | "md" | "lg",
    color?: string;
    onClick?: ()=>void;
}


export const iconSizeVariants = {
    "sm": "size-4",
    "md": "size-5",
    "lg": "size-6",
}