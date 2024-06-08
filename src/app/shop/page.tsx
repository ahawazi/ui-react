import Page from "@/components/layout/page";
import ArrowRight from "@/components/svgs/arrow-right";
import Next from "@/components/svgs/next";
import Product from "@/components/products/product";
import Back from "@/components/svgs/back";
import Pagination from "@/components/pagination/pagination";
import ProductCard from "@/components/products/productCard";
import Filter from "@/components/filter/filter";
import NumberPagination from "@/components/pagination/numberPagination";

export default function PaymentPage() {
    return (
        <>
            <Page className="min-h-screen my-20 space-y-10">

                <div
                    className="hidden md:block relative"
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
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 space-x-reverse">
                                <Product/>
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Pagination/>
                        </div>
                    </div>

                </div>

                <div className="container mx-auto flex space-x-4 space-x-reverse">
                    <div className="shrink-0">
                        <Filter/>
                    </div>
                    <div className="grow">
                        <div className="grid grid-cols-4 gap-4">
                            {
                                Array.from(Array(12).keys()).map(value => {
                                    return <>
                                        <ProductCard/>
                                    </>
                                })
                            }
                        </div>
                        <div className="flex justify-center mt-10">
                            <NumberPagination/>
                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}
