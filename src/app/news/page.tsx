import BoxHeader from "@/components/elements/card/boxHeader";
import PlanBanner from "@/components/plans/plan-banner";
import Pagination from "@/components/pagination/pagination";
import NumberPagination from "@/components/pagination/numberPagination";

export default function NewsPage() {
    return (
        <div className="space-y-8 container mx-auto p-10">
            <BoxHeader>
                <h1 className="text-onSecondary font-normal text-lg">
                    همه اخبار
                </h1>
            </BoxHeader>
            <div className="space-y-4">
                {
                    Array.from(Array(5).keys()).map(value => {
                        return <>
                            <PlanBanner/>
                        </>
                    })
                }
            </div>
            <div className="flex justify-center">
                <NumberPagination/>
            </div>
        </div>
    );
}