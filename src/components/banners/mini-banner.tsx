import ArrowLeft from "../svgs/arrow-left";

export default function MiniBanner() {
    return <>
        <div
            className="flex justify-start space-x-2 space-x-reverse rounded-l-full text-white py-4 px-2 items-center w-full"
            style={
                {
                    backgroundImage: "url('https://source.unsplash.com/random')",
                }
            }
        >
            <ArrowLeft className="w-6 h-6 shrink-0"/>
            <span className="bg-primary rounded px-2 py-0.5 shrink-0 font-bold">
                ۳ روز
            </span>
            <span className="shrink-0 text-base font-medium">
                مانده به پایان
            </span>
        </div>
    </>;
}