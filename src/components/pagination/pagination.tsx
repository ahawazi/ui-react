import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Pagination() {
    return (
        <>
            <div className="flex space-x-6 space-x-reverse text-primary">
                <div className="border border-primary rounded-lg">
                    <Next/>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                    <div
                        className="size-2 rounded-full bg-neutral-400"
                    >
                    </div>
                    <div
                        className="size-2 rounded-full bg-primary"
                    >
                    </div>
                    <div
                        className="size-2 rounded-full bg-neutral-400"
                    >
                    </div>
                </div>
                <div className="border border-primary rounded-lg">
                    <Back/>
                </div>
            </div>
        </>
    );
}
