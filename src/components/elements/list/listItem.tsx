import ArrowLeft from "@/components/svgs/arrow-left";
import {LiHTMLAttributes} from "react";

export default function ListItem(
    {children, ...props}: LiHTMLAttributes<HTMLLIElement> & {children: React.ReactNode}
) {
    return (
        <li className="flex items-center justify-start p-2" {...props}>
            <ArrowLeft className="w-4 h-4 ml-2"/>
            {children}
        </li>
    );
}