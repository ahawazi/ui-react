import BoxHeader from "@/components/elements/card/boxHeader";
import PlanBanner from "@/components/plans/plan-banner";
import Pagination from "@/components/pagination/pagination";
import NumberPagination from "@/components/pagination/numberPagination";
import Page from "@/components/layout/page";
import Box from "@/components/elements/card/box";
import ArrowLeft from "@/components/svgs/arrow-left";
import Pilgrim from "@/components/pilgrim/pilgrim";
import IntroductionVideo from "@/components/Introduction/introduction-video";

export default function NewsPage() {
    return (
        <Page className="min-h-screen ">
            <div className="container mx-auto">

                <BoxHeader>
                    <h1 className="text-onSecondary font-bold text-lg">
                        سخن بزرگان
                    </h1>
                </BoxHeader>
                <div className="flex mt-10 space-x-10 space-x-reverse">
                    <div className="space-y-4 min-w-72 shrink-0">
                        {
                            Array.from(Array(5).keys()).map(value => {
                                return <>
                                    <IntroductionVideo/>
                                </>
                            })
                        }
                    </div>
                    <div className="grow">
                        <Box>
                            <BoxHeader>
                                <h2 className="text-onSecondary font-bold text-lg">
                                    آیت الله جوادی آملی
                                </h2>
                            </BoxHeader>
                            <div className="py-10 px-8 space-y-4">
                                <ul className="text-secondary text-lg font-medium">
                                    <li>
                                        مرجع تقلید
                                    </li>
                                    <li>
                                        مسئولیت شخصیت
                                    </li>
                                </ul>
                                <div className="flex">
                                    <ArrowLeft className="shrink-0 size-4"/>
                                    <p>
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                        م شسمیب کسبمنک سشنمیب شکمسبن
                                    </p>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </Page>
    );
}