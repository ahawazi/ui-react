import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Pagination() {
    return (
        <>
            <div className="flex space-x-6 space-x-reverse text-indigo-400">
                <div className="border border-indigo-400 rounded-lg">
                    <Next/>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                    <div
                        className="size-2 rounded-full bg-white"
                    >
                    </div>
                    <div
                        className="size-2 rounded-full bg-indigo-400"
                    >
                    </div>
                    <div
                        className="size-2 rounded-full bg-white"
                    >
                    </div>
                </div>
                <div className="border border-indigo-400 rounded-lg">
                    <Back/>
                </div>
            </div>
        </>
    );
}
