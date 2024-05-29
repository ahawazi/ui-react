import classNames from "classnames";

export default function ArrowLeft(
    {className = "w-6 h-6"}: Readonly<{ className?: string }> = {}
) {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
             className={
                 classNames("rotate-180", className)
             }>
            <path
                d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"/>
        </svg>
    </>;
}