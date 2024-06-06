/* eslint-disable @next/next/no-img-element */
import ArrowLeft from "../svgs/arrow-left";

export default function ApplicationBanner() {
    return <>
        <div className="bg-blue-900 relative text-white rounded-3xl flex ml-1">
            <div
                style={{
                    backgroundImage: 'url(images/BG.png)',
                    backgroundSize: 'cover',
                }}
                className="absolute inset-0 w-full h-full rounded-3xl opacity-10"
            >
            </div>

            <div className="hidden md:block absolute bottom-1 right-6 w-44">
                <img
                    className="w-full h-full object-cover"
                    src="/svgs/mobile-application.svg" alt="random"/>
            </div>

            <div className="space-y-6 grow m-2 p-4 px-10 border border-white/20 border-r-0 rounded-r-none rounded-3xl mr-48">
                <div className="space-y-4">
                    <div className="flex space-x-1 space-x-reverse items-center -mr-4">
                        <ArrowLeft className="w-4 h-4"/>
                        <span className="text-lg font-bold">
                            نرم افزار موسسه حضرت خدیجه <small className="text-sm font-light">(س)</small>
                        </span>
                    </div>
                    <span className="text-sm font-thin">
                        مجری طرح زیارت اولی های اهل بیت علیهم السلام
                    </span>
                </div>
                <div className="flex justify-center space-x-reverse space-x-2">
                    <div className="bg-neutral-400 w-24 h-10 rounded-lg">
                    </div>
                    <div className="bg-neutral-400 w-24 h-10 rounded-lg">
                    </div>
                </div>
            </div>

        </div>
    </>
}