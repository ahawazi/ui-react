import ArrowLeft from "@/components/svgs/arrow-left";

export default function Report() {
    return (
        <>
            <div className="from-red-600 to-red-500 bg-gradient-to-r to-10% p-2 rounded-2xl flex relative">
                <div className="p-5 space-y-2 rounded-2xl ml-24 grow">
                    <div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <ArrowLeft className="size-4 text-white"/>
                            <span className="text-white text-lg font-bold">گزارشگر مشکلات باشید</span>
                        </div>
                        <p className="text-white font-light line-clamp-2">
                            اگه محرومیت در منطقه شما هم وجود دارد یا آن را میشناسی به ما گزارش دهید.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button className="border border-white text-white py-0.5 px-6 rounded-full">
                            گزارش
                        </button>
                    </div>
                </div>
                <div className="absolute md:-left-14 -left-5 bottom-2">
                    <img
                        src="/svgs/microphone2.svg"
                        alt="Report"
                        className="w-32 md:w-40 shrink-0"
                    />
                </div>
            </div>
        </>
    );
}
