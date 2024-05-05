export default function BoxHeader(
    {
        children
    }:
        {
            children: React.ReactNode
        }
) {
    return (
        <div className="bg-indigo-400/50 rounded-t-3xl flex justify-center items-center py-2">
            {children}
        </div>
    );
}