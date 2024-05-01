import ArrowLeft from "../svgs/arrow-left";

export default function MiniBanner() {
    return <>
        <div className="flex justify-start space-x-4 space-x-reverse rounded-l-full text-white from-red-800 to-red-50 bg-gradient-to-l py-4 px-2 items-center w-full">
            <ArrowLeft className="w-6 h-6 shrink-0" />
            <span className="bg-white rounded px-2 py-1 shrink-0">
                ۳ روز
            </span>
            <span>
                مانده به پایان
            </span>
        </div>
    </>;
}