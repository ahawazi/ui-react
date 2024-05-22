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

export default function Home() {
    return (
        <main className="">
            <Page
                className="min-h-screen"
            >
                <div className="container mx-auto py-10">
                    <div
                        className="grid grid-cols-1 md:grid-cols-5 gap-4 divide-x divide-primary divide-x-reverse items-center">
                        <div className="md:col-span-3 space-y-3">
                            <div className="h-60 rounded-3xl overflow-hidden">
                                <div className="w-full h-full relative">
                                    <img
                                        src="https://via.placeholder.com/500"
                                        alt="hero"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50">
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Pagination />
                            </div>
                        </div>
                        <div className="col-span-2 space-y-2 py-2 px-4 self-start">
                            <MiniBanner />
                            <MiniBanner />
                            <MiniBanner />
                        </div>
                    </div>
                    <div className="h-52 w-full bg-neutral-400 my-8">

                    </div>
                    <div className="max-w-xl mx-auto py-7">
                        <EhdayeKomakNaghdiBanner />
                    </div>

                    <div className="my-16 flex flex-wrap gap-16 justify-center">
                        {
                            Array.from({ length: 4 }).map((_, index) => (
                                <MavaredShomaItem key={index} />
                            ))
                        }
                    </div>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <HelpSample />
                        <Help />
                    </div>
                    <div>
                        <BoxHeader>
                            <span className="text-lg font-medium text-onSecondary">
                                اخرین اخبار
                            </span>
                        </BoxHeader>
                        <div
                            className="grid grid-cols-1 md:grid-cols-5 gap-4 divide-x-reverse items-start p-4">
                            <div className="col-span-3 grid grid-cols-3 gap-4">
                                <Plan />
                                <Plan />
                                <Plan />
                            </div>
                            <div className="col-span-2 space-y-2 p-4">
                                <MiniBanner />
                                <MiniBanner />
                                <MiniBanner />
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
                        <Sharer />
                    </div>
                </div>
            </Page>


            <div className="w-full h-48 bg-neutral-400">

            </div>

            <section
                className="min-h-screen bg-cover bg-indigo-100w"
                style={
                    {
                        backgroundImage: "url('/images/BG.png')",
                    }
                }>
                <div className="container mx-auto py-10">
                    <Quotation />
                </div>
            </section>
        </main>
    );
}
