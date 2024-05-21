import classNames from "classnames";

export default function Box(
    {
        children,
        className,
    }:
        {
            children: React.ReactNode,
            className?: string
        }
) {
    return <div className={classNames(
        "border-2 border-indigo-400/20 rounded-3xl p-2",
        className
    )}>
        {children}
    </div>;
}