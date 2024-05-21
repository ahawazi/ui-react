export default function Pilgrim() {
    return (
        <>
            <div style={
                {
                    backgroundImage: "url(https://source.unsplash.com/random)",
                }
            }
                 className="rounded-lg overflow-hidden"
            >
                <div
                    className="size-32 flex flex-col justify-end bg-green-500/20"

                >
                    <p className="text-white text-center text-lg p-1 truncate">زائرین کربلا</p>
                </div>
            </div>
        </>
    );
}
