import ArrowLeft from "../svgs/arrow-left";

export default function MiniBanner() {
    return <>
        <div
            className="flex justify-start space-x-4 space-x-reverse rounded-l-full text-white py-4 px-2 items-center w-full bg-neutral-400">
            <ArrowLeft className="w-6 h-6 shrink-0"/>
            <span className="bg-indigo-400 rounded px-2 py-1 shrink-0">
                ۳ روز
            </span>
            <span className="shrink-0">
                مانده به پایان
            </span>
        </div>
    </>;
}