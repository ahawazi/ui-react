import ArrowLeft from "@/components/svgs/arrow-left";
import {LiHTMLAttributes} from "react";

export default function ListItem(
    {children, ...props}: LiHTMLAttributes<HTMLLIElement> & {children: React.ReactNode}
) {
    return (
        <li className="flex items-start justify-start p-2" {...props}>
            <ArrowLeft className="size-2 ml-2 text-primary shrink-0"/>
            {children}
        </li>
    );
}