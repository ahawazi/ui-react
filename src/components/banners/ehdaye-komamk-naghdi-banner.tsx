/* eslint-disable @next/next/no-img-element */
import ArrowLeft from "../svgs/arrow-left";

export default function EhdayeKomakNaghdiBanner() {
    return <>
        <div className="bg-indigo-400 relative text-white rounded-3xl flex">
            <div className="space-y-4 grow m-4 p-4 border rounded-3xl">
                <div className="space-y-3">
                    <div className="flex space-x-1 space-x-reverse items-center">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-lg font-bold">
                            اهدای کمک نقدی
                        </span>
                    </div>
                    <span className="text-base font-light">
                        اگه شما هم می خواید سهیم باشید
                    </span>
                </div>
                <button className="border border-white px-2 py-1 rounded-full">
                    پرداخت
                </button>
            </div>

            <div className="absolute -top-10 -left-1 w-24 h-64">
                <img
                    className="w-24 h-64 object-cover"
                    src="https://source.unsplash.com/random" alt="random" />
            </div>
        </div>
    </>
}