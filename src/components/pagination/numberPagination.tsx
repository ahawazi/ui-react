import Back from "../svgs/back";
import Next from "../svgs/next";
import ArrowLeft from "@/components/svgs/arrow-left";
import ArrowRight from "@/components/svgs/arrow-right";

export default function NumberPagination() {
    return (
        <>
            <div className="flex space-x-4 space-x-reverse items-center">
                <button className="border border-onSecondary/80 size-8 flex justify-center items-center rounded-lg text-onSecondary">
                    <ArrowRight
                        className="size-3"
                    />
                </button>
                <div className="space-x-2 space-x-reverse">
                    <button
                        className="rounded-lg border border-onSecondary/50 size-8 aspect-square text-center bg-secondary text-white font-bold">
                        1
                    </button>
                    <button
                        className="rounded-lg border border-onSecondary/50 size-8 aspect-square text-center text-onSecondary font-bold">
                        2
                    </button>
                    <button
                        className="rounded-lg border border-onSecondary/50 size-8 aspect-square text-center text-onSecondary font-bold">
                        3
                    </button>
                    <button
                        className="rounded-lg border border-onSecondary/50 size-8 aspect-square text-center text-onSecondary font-bold">
                        4
                    </button>
                    <button
                        className="rounded-lg border border-onSecondary/50 size-8 aspect-square text-center text-onSecondary font-bold">
                        ...
                    </button>
                </div>
                <button className="border border-onSecondary/80 size-8 flex justify-center items-center rounded-lg text-onSecondary">
                    <ArrowLeft
                        className="size-3"
                    />
                </button>
            </div>
        </>
    );
}
