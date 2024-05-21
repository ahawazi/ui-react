import classNames from "classnames";

export default function Page(
    {
        children,
        className,
    }: Readonly<{
        children: React.ReactNode;
        className?: string,
    }>
) {
    return <div
        className={
            classNames(
                "bg-cover",
                className,
            )}
        style={
            {
                backgroundImage: "url('/images/BG.png')",
            }
        }>
        {
            children
        }
    </div>
}