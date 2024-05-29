import ArrowLeft from "@/components/svgs/arrow-left";

export default function Report() {
    return (
        <>
            <div className="bg-red-500 p-2 rounded-2xl flex">
                <div className="p-5 pb-2 space-y-2 rounded-2xl">
                    <div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <ArrowLeft className="size-4 text-white"/>
                            <span className="text-white text-lg font-bold">گزارشگر مشکلات باشید</span>
                        </div>
                        <p className="text-white font-light line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            repellat quia ducimus architecto eaque, temporibus neque
                            praesentium quaerat ad, vel voluptatem nemo eius, earum commodi
                            error itaque sed repellendus similique.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button className="border border-white text-white bg-red-500 py-0.5 px-6 rounded-full">
                            گزارش
                        </button>
                    </div>
                </div>
                <div className="w-32 shrink-0">
                    <img
                        src="https://via.placeholder.com/100x150"
                        alt="Report"
                        className="w-full h-36 object-cover"
                    />
                </div>
            </div>
        </>
    );
}
