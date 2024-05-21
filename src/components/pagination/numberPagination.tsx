import Back from "../svgs/back";
import Next from "../svgs/next";

export default function NumberPagination() {
    return (
        <>
            <div className="flex space-x-4 space-x-reverse items-center">
                <button className="border border-purple-400 size-8 flex justify-center items-center rounded-lg">
                    <Next/>
                </button>
                <div className="space-x-2 space-x-reverse">
                    <button
                        className="rounded-lg border border-purple-200 size-8 aspect-square text-center text-purple-600 font-bold">
                        1
                    </button>
                    <button
                        className="rounded-lg border border-purple-200 size-8 aspect-square text-center text-purple-600 font-bold">
                        2
                    </button>
                    <button
                        className="rounded-lg border border-purple-200 size-8 aspect-square text-center text-purple-600 font-bold">
                        3
                    </button>
                    <button
                        className="rounded-lg border border-purple-200 size-8 aspect-square text-center text-purple-600 font-bold">
                        4
                    </button>
                    <button
                        className="rounded-lg border border-purple-200 size-8 aspect-square text-center text-purple-600 font-bold">
                        ...
                    </button>
                </div>
                <button className="border border-purple-400 size-8 flex justify-center items-center rounded-lg">
                    <Back/>
                </button>
            </div>
        </>
    );
}
