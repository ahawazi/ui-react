import BoxHeader from "@/components/elements/card/boxHeader";
import PlanBanner from "@/components/plans/plan-banner";
import Pagination from "@/components/pagination/pagination";
import NumberPagination from "@/components/pagination/numberPagination";
import ArrowLeft from "@/components/svgs/arrow-left";
import Plan from "@/components/plans/plan";
import Pilgrim from "@/components/pilgrim/pilgrim";
import Page from "@/components/layout/page";

export default function PaymentPage() {
    return (
        <>
            <Page className="min-h-screen">
                <h1 className="text-indigo-700 font-bold text-lg text-center">
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
                <div className="w-80 mx-auto">
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}