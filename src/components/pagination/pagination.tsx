import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Pagination(
    {
        color = "primary",
    }:
        {
            color?: string;
        }
) {
    return (
        <>
            <div className={`flex space-x-6 space-x-reverse text-${color}`}>
                <div className={`border border-${color} rounded-lg`}>
                    <Next />
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                    <div
                        className="size-2 rounded-full bg-neutral-400"
                    >
                    </div>
                    <div
                        className={`size-2 rounded-full bg-${color}`}
                    >
                    </div>
                    <div
                        className="size-2 rounded-full bg-neutral-400"
                    >
                    </div>
                </div>
                <div className={`border border-${color} rounded-lg`}>
                    <Back />
                </div>
            </div>
        </>
    );
}
