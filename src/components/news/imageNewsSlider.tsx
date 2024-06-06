import ArrowRight from "@/components/svgs/arrow-right";
import ArrowLeft from "@/components/svgs/arrow-left";
import CalendarDays from "@/components/svgs/calendarDays";

export default function ImageNewsSlider() {
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-4 space-x-reverse text-onSecondary">
                <div
                    className="p-2 border border-onSecondary rounded-xl shadow-0 flex items-center justify-center">
                    <ArrowRight className="size-4"/>
                </div>
                <div className="grow h-56">
                    <img src="https://source.unsplash.com/random" alt="news"
                         className="size-full object-cover rounded-t-2xl"/>
                </div>
                <div
                    className="p-2 border border-onSecondary rounded-xl shadow-0 flex items-center justify-center">
                    <ArrowLeft className="size-4"/>
                </div>
            </div>
            <div className="flex justify-center space-x-reverse space-x-2">
                <div className="size-3 rounded-full bg-white"></div>
                <div className="size-3 rounded-full bg-onSecondary"></div>
                <div className="size-3 rounded-full bg-white"></div>
            </div>
            <div className="px-4 md:px-10 space-y-2">
                <div>
                    <p className="text-black text-base font-normal text-center">
                        بیستمین مرحله کمک های صادقانه
                    </p>
                </div>
                <div className="flex justify-between space-x-2 space-x-reverse text-onSecondary">
                                    <span className="text-base font-medium">
                                        گزارش تصویری
                                    </span>
                    <div className="flex space-x-reverse space-x-2 text-sm items-center">
                                        <span className="text-neutral-400">
                                            1399/12/12
                                        </span>
                        <CalendarDays className="size-4"/>
                    </div>
                </div>
            </div>
        </div>
    )
}