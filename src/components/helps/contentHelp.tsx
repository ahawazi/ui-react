import ArrowLeft from "@/components/svgs/arrow-left";


export default function ContentHelp() {
    return (
        <div className="bg-secondary p-2 rounded-2xl shadow-xl drop-shadow-2xl">
            <div className="border border-white/50 py-3 px-5 rounded-2xl space-y-4">
                <div className="text-white flex items-center font-bold space-x-2 space-x-reverse">
                    <ArrowLeft
                        className="size-3"
                    />
                    <span>
                        شما قصد کمک رسانی دارید؟
                    </span>
                </div>
                <div className="flex justify-center">
                    <button
                        className="text-white rounded-full px-4 py-0.5 border border-white text-base font-light">
                        کمک میکنم
                    </button>
                </div>
            </div>
        </div>
    )
}