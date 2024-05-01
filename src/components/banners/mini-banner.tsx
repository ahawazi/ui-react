export default function MiniBanner() {
    return <>
        <div className="flex justify-start space-x-4 space-x-reverse rounded-l-full text-white from-red-800 to-red-50 bg-gradient-to-l py-4 px-2 items-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <span className="bg-white rounded px-2 py-1 shrink-0">
                ۳ روز
            </span>
            <span>
                مانده به پایان
            </span>
        </div>
    </>;
}