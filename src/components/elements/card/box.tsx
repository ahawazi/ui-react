export default function Box(
    {
        children
    }:
        {
            children: React.ReactNode
        }
) {
    return <div className="border-2 border-indigo-400/20 rounded-3xl p-2">
        {children}
    </div>;
}