/* eslint-disable @next/next/no-img-element */
import ArrowLeft from "../svgs/arrow-left";

export default function EhdayeKomakNaghdiBanner() {
    return <>
        <div className="bg-secondary relative text-white rounded-3xl flex mt-16 ml-1">
            <div
                style={{
                    backgroundImage: 'url(images/BG.png)',
                    backgroundSize: 'cover',
                }}
                className="absolute inset-0 w-full h-full rounded-3xl opacity-10"
            >
            </div>
            <div className="space-y-6 grow m-2 p-4 px-10 border rounded-3xl">
                <div className="space-y-4">
                    <div className="flex space-x-1 space-x-reverse items-center -mr-4">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-lg font-bold">
                            اهدای کمک نقدی
                        </span>
                    </div>
                    <span className="text-base font-light">
                        اگه شما هم می خواید سهیم باشید
                    </span>
                </div>
                <button className="border border-white px-8 py-0.5 rounded-full text-sm">
                    پرداخت
                </button>
            </div>

            <div className="absolute -top-16 -left-1 w-48 h-56">
                <img
                    className="w-full h-full object-cover"
                    src="https://source.unsplash.com/random" alt="random" />
            </div>
        </div>
    </>
}