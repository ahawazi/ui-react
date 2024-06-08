import classNames from "classnames";
import ArrowLeft from "@/components/svgs/arrow-left";

export default function IntroductionVideo(
    {
        active = false,
    }
) {
    return (
        <div className="flex items-center space-x-2 space-x-reverse">
            <div className="flex space-x-2 space-x-reverse w-full">
                <div className="size-16 shrink-0">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Haji"
                        className="object-cover size-full"
                    />
                </div>
                <div className={
                    classNames(
                        "px-4 flex items-center bg-gray-200 text-onSecondary font-medium rounded-l-full grow",
                        {
                            "bg-primary text-white": active,
                        }
                    )
                }>
                    <span className="truncate">
                      آیت الله اعرافی
                    </span>
                </div>
            </div>
            <div className="w-6">
                {
                    active && <ArrowLeft className="text-primary"/>
                }
            </div>
        </div>
    );
}
