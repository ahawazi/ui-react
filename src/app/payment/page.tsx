import ArrowLeft from "@/components/svgs/arrow-left";
import Pilgrim from "@/components/pilgrim/pilgrim";
import Page from "@/components/layout/page";
import Card from "@/components/svgs/card";

export default function PaymentPage() {
    return (
        <>
            <Page className="min-h-screen">
                <h1 className="text-onSecondary font-bold text-lg text-center">
                    روش های پرداخت
                </h1>
                <div className="flex justify-center space-x-2 space-x-reverse my-8 items-center">
                    <ArrowLeft className="size-4 text-primary"/>
                    <span className="font-light">
                        شما می توانید با انتخاب یکی از گزینه‌های زیر موضوع و نحوه پرداخت خود را مشخص نمایید
                    </span>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {
                        Array.from(Array(5).keys()).map(value => {
                            return <>
                                <Pilgrim
                                    active={value == 2}
                                />
                            </>
                        })
                    }
                </div>
                <div className="max-w-lg mx-auto my-20">
                    <div className="rounded-lg overflow-hidden border border-onSecondary/20">
                        <div
                            style={
                                {
                                    backgroundImage: "url(https://source.unsplash.com/random)",
                                }
                            }
                        >
                            <div className="p-10 from-primary/50 to-secondary bg-gradient-to-r bg-cover">
                                <span className="text-lg text-white font-bold">
                                    فرزندان غدیر
                                </span>
                            </div>
                        </div>
                        <div className="divide-y divide-onSecondary/20 px-2">
                            <div className="py-4 px-2">
                                <div className="flex space-x-2 space-x-reverse items-start">
                                    <ArrowLeft className="shrink-0 size-6 p-1 text-primary"/>
                                    <p className="text-sm font-light">
                                        lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
                                        loremlorem loremlorem loremlorem loremlorem lorem
                                    </p>
                                </div>
                            </div>
                            <div className="py-4 px-2">
                                <div className="max-w-xs mx-auto space-y-2">
                                    <div className="space-x-2 space-x-reverse flex items-center text-onSecondary ">
                                        <input type="radio" name="type" id="custom" className="accent-onSecondary "/>
                                        <label htmlFor="custom" className="text-xs">
                                            مبلغ دلخواه
                                        </label>
                                    </div>
                                    <div className="space-x-2 space-x-reverse flex items-center  text-onSecondary ">
                                        <input type="radio" name="type" id="plan_1" className="accent-onSecondary "/>
                                        <label htmlFor="plan_1" className="text-xs">
                                            هزینه پوشش کامل زود نا بارور
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-2">
                                <div className="max-w-xs mx-auto space-y-4">
                                    <div className="flex space-x-2 space-x-reverse items-center text-neutral-700">
                                        <label htmlFor="custom" className="shrink-0 w-36 text-sm font-light">
                                            شماره همراه
                                        </label>
                                        <input type="input" name="type" id="custom"
                                               className="border-b outline-none grow px-2 py-1"/>
                                    </div>
                                    <div className="flex space-x-2 space-x-reverse items-center text-neutral-700">
                                        <label htmlFor="custom" className="shrink-0 w-36 text-sm font-light">
                                            نام و نام خانوادگی
                                        </label>
                                        <input type="input" name="type" id="custom"
                                               className="border-b outline-none grow px-2 py-1"/>
                                    </div>
                                    <div className="flex space-x-2 space-x-reverse items-center text-neutral-700">
                                        <label htmlFor="custom" className="shrink-0 w-36 text-sm font-light">
                                            نیت اهدا
                                        </label>
                                        <input type="input" name="type" id="custom"
                                               className="border-b outline-none grow px-2 py-1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary/20 py-8 space-y-6 border-t border-primary">
                            <div className="flex flex-col items-center text-onSecondary space-y-2">
                                <span className="text-base font-medium">
                                    مبلغ نهایی:
                                </span>
                                <div className="flex space-x-2 space-x-reverse items-center">
                                <span className="text-base font-medium">
                                    200000
                                </span>

                                    <small className="text-xs font-light">
                                        ریال
                                    </small>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="flex space-x-1 space-x-reverse items-center px-14 py-2 bg-primary rounded-lg text-white">
                                    <Card/>
                                    <span>
                                    پرداخت
                                </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}