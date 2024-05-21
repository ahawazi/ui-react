export default function BoxHeader(
    {
        children,
        bgColors = "bg-surface",
    }:
        {
            children: React.ReactNode,
            bgColors?: string,
        }
) {
    return (
        <div className={`${bgColors} rounded-t-3xl flex justify-center items-center py-2`}>
            {children}
        </div>
    );
}