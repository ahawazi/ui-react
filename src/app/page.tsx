/* eslint-disable @next/next/no-img-element */
import MiniBanner from "@/components/banners/mini-banner";
import MavaredShomaItem from "@/components/items/mabared-shoma-item";
import BoxHeader from "@/components/elements/card/boxHeader";
import Help from "@/components/helps/help";
import Plan from "@/components/plans/plan";
import HelpSample from "@/components/helps/helpSample";
import EhdayeKomakNaghdiBanner from "@/components/banners/ehdaye-komamk-naghdi-banner";
import Quotation from "@/components/quotation/quotation";
import Sharer from "@/components/sharers/sharer";
import Page from "@/components/layout/page";
import Pagination from "@/components/pagination/pagination";
import Next from "@/components/svgs/next";
import Back from "@/components/svgs/back";
import Product from "@/components/Products/product";
import PlanCode from "@/components/plans/plan-code";
import ArrowLeft from "@/components/svgs/arrow-left";
import Report from "@/components/reports/report";
import Post from "@/components/post/post";
import About from "@/components/about/about";
import ServicesBox from "@/components/boxs/servicesBox";
import ArrowRight from "@/components/svgs/arrow-right";
import CalendarDays from "@/components/svgs/calendarDays";
import ImageNewsSlider from "@/components/news/imageNewsSlider";
import ApplicationBanner from "@/components/banners/applicationBanner";
import Software from "@/components/software/software";

export default function Home() {
    return (
        <main className="">
            <Page
                className="min-h-screen"
            >
                <div className="container mx-auto py-5 md:py-10 px-4">
                    <div
                        className="grid grid-cols-1 md:grid-cols-5 divide-x-0 gap-4 md:divide-x divide-primary md:divide-x-reverse items-center">
                        <div className="md:col-span-3 space-y-3">
                            <div className="h-60 rounded-3xl overflow-hidden">
                                <div className="w-full h-full relative">
                                    <img
                                        src="https://source.unsplash.com/random"
                                        alt="hero"
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50">
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Pagination/>
                            </div>
                        </div>
                        <div className="col-span-2 space-y-2 py-2 px-4 self-start">
                            <MiniBanner/>
                            <MiniBanner/>
                            <MiniBanner/>
                        </div>
                    </div>
                    <div className="my-4 md:my-4">
                        <ServicesBox/>
                    </div>
                </div>
                <section
                    style={
                        {
                            backgroundImage: "url('/images/bg2.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100%",
                            backgroundPositionY: "bottom",
                            backgroundPositionX: "center"
                        }
                    }
                >
                    <div className="max-w-xl mx-auto md:py-7 px-4">
                        <EhdayeKomakNaghdiBanner/>
                    </div>

                    <div className="my-8 md:my-16 flex flex-wrap md:gap-16 gap-4 justify-center">
                        {
                            Array.from({length: 4}).map((_, index) => (
                                <MavaredShomaItem key={index}/>
                            ))
                        }
                    </div>
                </section>
            </Page>
            <div className="container mx-auto px-4">
                <div className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <HelpSample/>
                    <Help/>
                </div>
                <div>
                    <BoxHeader>
                            <span className="text-lg font-medium text-onSecondary">
                                اخرین اخبار
                            </span>
                    </BoxHeader>
                    <div
                        className="grid md:grid-cols-5 gap-4 divide-x-reverse items-start p-4">
                        <div className="col-span-5 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Plan/>
                            <Plan/>
                            <Plan/>
                        </div>
                        <div className="col-span-5 md:col-span-2 p-4 bg-surface rounded-2xl">
                            <ImageNewsSlider/>
                        </div>
                    </div>
                    <div className="flex space-x-2 space-x-reverse items-center">
                        <hr
                            className="grow bg-onSecondary/50 h-0.5"
                        />
                        <button
                            className="border border-onSecondary text-onSecondary px-4 py-0.5 rounded-full text-sm"
                        >
                            همه اخبار
                        </button>
                        <hr
                            className="grow bg-onSecondary/50 h-0.5"
                        />
                    </div>
                </div>
                <div className="my-12 space-y-4">
                    <BoxHeader
                        bgColors="bg-green-100/50"
                    >
                            <span className="text-lg font-bold text-primary">
                                نذر کالا
                            </span>
                    </BoxHeader>
                    <Sharer/>
                </div>
            </div>


            <section
                style={
                    {
                        backgroundImage: "url('/images/bg2.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        backgroundPositionY: "bottom",
                        backgroundPositionX: "center"

                    }
                }
                className="pb-10 pt-5 md:pb-20 md:pt-10 px-4"
            >
                <div className="max-w-xl mx-auto py-7 pb-20">
                    {/*<ApplicationBanner/>*/}
                </div>
            </section>
            {/*<section className="h-60 w-full bg-neutral-400">*/}

            {/*</section>*/}
            <section
                className="bg-cover"
                style={
                    {
                        backgroundImage: "url('/images/BG.png')",
                    }
                }>
                <div className="from-onSecondary/20 to-onSecondary/0 bg-gradient-to-t"
                >

                    <div className="container mx-auto py-10 px-8">
                        <Quotation/>
                    </div>
                    <img src="/images/bg2.png" alt="" className="w-full"/>
                </div>
            </section>
            <div
                className="my-20 hidden md:block relative"
                //     // style={
                //     // {
                //     //     backgroundImage: "url('/svgs/shop-background.svg')",
                //     //     backgroundRepeat: "no-repeat",
                //     //     backgroundSize: "100%",
                //     // }
                // }
            >
                <img src="/svgs/shop-background.svg" alt="" className="absolute -z-10"/>
                <div className="container mx-auto space-y-6">
                    <div
                        className="grid grid-cols-3 rounded-t-10xl from-[#1e3cab] to-[#557bff] bg-gradient-to-r to-90% px-20">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                </svg>
                                <div>
                                    <p className="text-center text-rose-500 text-4xl">
                                        فروشگاه خیریه
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <img src="/images/bascket.png" alt="store"
                                 className="h-60 absolute -top-5"/>
                        </div>
                        <div className="text-white text-left space-y-5 p-8">
                            <div className='flex items-center -ml-4'>
                                <p className="font-bold text-lg text-left grow">
                                    با خرید کردن میشه دست به خیر شد!
                                </p>
                                <ArrowRight className="size-4 shrink-0"/>
                            </div>
                            <p className="text-xs font-light">
                                تمامی محصولات این فروشگاه به صورت خیریه برای کمک به نیازمندان و افراد محروم از
                                امکانات
                                اساسی فروخته میشود.
                                تمامی محصولات این فروشگاه به صورت خیریه برای کمک به نیازمندان و افراد محروم از
                                امکانات
                                اساسی فروخته میشود.
                            </p>
                            <button className="text-white px-4 py-0.5  rounded-full">
                                همه کالاها
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-8 space-x-reverse items-center justify-center">
                        <div
                            className="size-6 text-white  rounded-lg flex items-center justify-center">
                            <Next/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 space-x-reverse">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                        <div
                            className="size-6 text-white  rounded-lg flex items-center justify-center">
                            <Back/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="my-20">
                <h3 className="text-primary text-center text-3xl font-bold">
                    چطوری منم کمک کنم؟
                </h3>
                <div className="flex space-x-10 space-x-reverse justify-center container mx-auto mt-16">
                    <PlanCode
                        title="ارسال کد"
                        description="با ارسال کد یکبار مصرف"
                        image="/svgs/ussid.svg"
                    />
                    <div className="w-[1px] h-36 bg-onSecondary/50 self-end">
                    </div>
                    <PlanCode
                        title="پرداخت آنلاین"
                        description="از طریق درگاه پرداخت مطمئن"
                        image="/svgs/account-number.svg"
                    />
                    <div className="w-[1px] h-36 bg-onSecondary/50 self-end">
                    </div>
                    <PlanCode
                        title="کارت به کارت"
                        description="با حضور در موسسه"
                        image="/svgs/card-bank.svg"
                    />
                </div>
                <div className="flex items-center mt-10">
                    <hr
                        className="grow bg-secondary/50 h-0.5"
                    />
                    <button
                        className="bg-secondary text-white border border-secondary px-4 py-0.5 rounded-full text-base"
                    >
                        پرداخت
                    </button>
                    <hr
                        className="grow bg-secondary/50 h-0.5"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 p-10 container mx-auto">
                <div className="divide-y">
                    <div className="space-y-4 py-8">
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <ArrowLeft className="size-4 -mr-4"/>
                            <p className="text-primary font-bold text-3xl">
                                گزارش مالی موسسه
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2 text-onSecondary py-2">
                            <div className="flex space-x-2  space-x-reverse items-center">
                                <p className="text-base font-light">
                                    کمک های مردمی:
                                </p>
                                <p className="text-base font-bold">
                                    230000 تومان
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>
                                    تراز مالی: مثبت+
                                </p>
                                <button className="border border-onSecondary px-4 py-0.5 rounded-full text-sm">
                                    گزارش مالی کامل
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 space-y-4">
                        <p className="text-base font-light text-onSecondary">
                            نحوه هزینه کرد در بخش ها مختلف:
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {
                                Array.from({length: 4}).map((key, index) => (
                                    <div className="space-y-2" key={index}>
                                        <div>
                                            <div
                                                className="bg-secondary size-16 rounded-full flex items-center justify-center text-center text-white">
                                        <span>
                                            45%
                                        </span>
                                            </div>
                                        </div>
                                        <p className="text-center text-sm font-medium">
                                            موارد شما
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <Report/>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="bg-neutral-400 p-10">
                <div className="container mx-auto ">
                    <div>
                        <span className="text-2xl font-bold text-white">
                            از فضای مجازی چخبر؟
                        </span>
                        <div className="m-10">
                            <div className="grid grid-cols-11 divide-x divide-white/50 divide-x-reverse">
                                <div className="col-span-2 space-y-4 flex flex-col items-center px-4">
                                    <div className="w-full grow">
                                        <img
                                            src="https://via.placeholder.com/100"
                                            alt="logo"
                                            className="h-full w-full object-cover rounded-2xl"
                                        />
                                    </div>
                                    <Pagination/>
                                </div>
                                <div className="col-span-9 space-y-4 px-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <Post/>
                                        <Post/>
                                        <Post/>
                                    </div>
                                    <div className="flex justify-center">
                                        <Pagination/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container mx-auto">
                <About/>
            </section>
        </main>
    );
}
