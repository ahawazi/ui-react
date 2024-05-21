import BoxHeader from "@/components/elements/card/boxHeader";
import PlanBanner from "@/components/plans/plan-banner";
import Pagination from "@/components/pagination/pagination";
import NumberPagination from "@/components/pagination/numberPagination";
import ArrowLeft from "@/components/svgs/arrow-left";
import Plan from "@/components/plans/plan";
import Pilgrim from "@/components/pilgrim/pilgrim";
import Page from "@/components/layout/page";
import Card from "@/components/svgs/card";

export default function PaymentPage() {
    return (
        <>
            <Page className="min-h-screen">
                <h1 className="text-secondary font-bold text-lg text-center">
                    روش های پرداخت
                </h1>
                <div className="flex justify-center space-x-2 space-x-reverse my-8 items-center">
                    <ArrowLeft className="size-4"/>
                    <span>
                        شما می توانید با انتخاب یکی از گزینه‌های زیر موضوع و نحوه پرداخت خود را مشخص نمایید
                    </span>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {
                        Array.from(Array(5).keys()).map(value => {
                            return <>
                                <Pilgrim/>
                            </>
                        })
                    }
                </div>
                <div className="max-w-lg mx-auto my-20">
                    <div className="rounded-lg overflow-hidden border border-indigo-400/20">
                        <div
                            style={
                                {
                                    backgroundImage: "url(https://source.unsplash.com/random)",
                                }
                            }
                        >
                            <div className="p-10 from-green-500/50 to-blue-700 bg-gradient-to-r bg-cover">
                                <span className="text-lg text-white font-bold">
                                    فرزندان غدیر
                                </span>
                            </div>
                        </div>
                        <div className="divide-y px-2">
                            <div className="py-4 px-2">
                                <div className="flex space-x-2 space-x-reverse items-start">
                                    <ArrowLeft className="shrink-0 size-6 p-1"/>
                                    <p>
                                        lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem
                                        loremlorem loremlorem loremlorem loremlorem lorem
                                    </p>
                                </div>
                            </div>
                            <div className="py-4 px-2">
                                <div className="max-w-xs mx-auto space-y-2">
                                    <div className="space-x-2 space-x-reverse items-center text-purple-400">
                                        <input type="radio" name="type" id="custom" className="accent-purple-400"/>
                                        <label htmlFor="custom">
                                            مبلغ دلخواه
                                        </label>
                                    </div>
                                    <div className="space-x-2 space-x-reverse items-center text-purple-400">
                                        <input type="radio" name="type" id="plan_1" className="accent-purple-400"/>
                                        <label htmlFor="plan_1">
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
                        <div className="bg-green-100 py-8 space-y-6 border-t border-green-500">
                            <div className="flex flex-col items-center text-purple-700 space-y-2">
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
                                    className="flex space-x-1 space-x-reverse items-center px-14 py-2 bg-green-400 rounded-lg text-white">
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