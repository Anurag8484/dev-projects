import type { ReactElement } from "react";

export function SidebarItem({text,icon}:{
    text: string;
    icon: ReactElement;
}){
    return(
        <div className="flex gap-7 items-center hover:bg-slate-100 px-5 py-4 rounded-2xl font-[500]  cursor-pointer hover:scale-105 duration-300 hover:text-black">
            {icon}
            {text}
        </div>
    )
}