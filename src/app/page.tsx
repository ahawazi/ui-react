/* eslint-disable @next/next/no-img-element */
import MiniBanner from "@/components/banners/mini-banner";
import MavaredShomaItem from "@/components/items/mabared-shoma-item";
import ArrowLeft from "@/components/svgs/arrow-left";
import Image from "next/image";
import Box from "@/components/elements/card/box";
import BoxHeader from "@/components/elements/card/boxHeader";
import ListItem from "@/components/elements/list/listItem";
import Help from "@/components/helps/help";
import Plan from "@/components/plans/plan";
import Product from "@/components/Products/product";
import HelpSample from "@/components/helps/helpSample";
import Play from "@/components/svgs/play";
import Download from "@/components/svgs/download";
import Taimer from "@/components/svgs/taimer";
import Next from "@/components/svgs/next";
import Back from "@/components/svgs/back";
import Location from "@/components/svgs/location";
import EhdayeKomakNaghdiBanner from "@/components/banners/ehdaye-komamk-naghdi-banner";
import Post from "@/components/post/post";
import Quotation from "@/components/quotation/quotation";
import Sharer from "@/components/sharers/sharer";
import PlanBanner from "@/components/plans/plan-banner";
import PlanCode from "@/components/plans/plan-code";
import PlansVideo from "@/components/plans/plans-video";

export default function Home() {
    return (
        <main className="">
            <section
                className="min-h-screen bg-cover"
                style={
                    {
                        backgroundImage: "url('/images/BG.png')",
                    }
                }>
                <div className="container mx-auto py-10">
                    <div
                        className="grid grid-cols-1 md:grid-cols-5 gap-4 divide-x divide-indigo-400 divide-x-reverse items-center">
                        <div className="bg-neutral-400 h-56 rounded-3xl md:col-span-3">
                        </div>
                        <div className="col-span-2 space-y-2 p-4">
                            <MiniBanner/>
                            <MiniBanner/>
                            <MiniBanner/>
                        </div>
                    </div>
                    <div className="h-52 w-full bg-neutral-400 my-8">

                    </div>
                    <div className="max-w-xl mx-auto">
                        <EhdayeKomakNaghdiBanner/>
                    </div>

                    <div className="my-16 flex flex-wrap gap-16 justify-center">
                        {
                            Array.from({length: 4}).map((_, index) => (
                                <MavaredShomaItem key={index}/>
                            ))
                        }
                    </div>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <HelpSample/>
                        <Help/>
                    </div>
                    <div>
                        <BoxHeader
                            bgColors="bg-indigo-400/50"
                        >
                            <span className="text-lg font-bold text-indigo-700">
                                اخرین اخبار
                            </span>
                        </BoxHeader>
                        <div
                            className="grid grid-cols-1 md:grid-cols-5 gap-4 divide-x divide-indigo-400 divide-x-reverse items-start p-4">
                            <div className="col-span-3 grid grid-cols-3 gap-4">
                                <Plan/>
                                <Plan/>
                                <Plan/>
                            </div>
                            <div className="col-span-2 space-y-2 p-4">
                                <MiniBanner/>
                                <MiniBanner/>
                                <MiniBanner/>
                            </div>
                        </div>
                        <div className="flex space-x-2 space-x-reverse items-center">
                            <hr
                                className="grow bg-indigo-700/50 h-0.5"
                            />
                            <button
                                className="border border-indigo-700 text-indigo-700 px-4 py-0.5 rounded-full text-sm"
                            >
                                همه اخبار
                            </button>
                            <hr
                                className="grow bg-indigo-700/50 h-0.5"
                            />
                        </div>
                    </div>
                    <div className="my-12 space-y-4">
                        <BoxHeader
                            bgColors="bg-green-400/50"
                        >
                            <span className="text-lg font-bold text-green-700">
                                نذر کالا
                            </span>
                        </BoxHeader>
                        <Sharer/>
                    </div>
                </div>
            </section>


            <div className="w-full h-48 bg-neutral-400">

            </div>

            <section
                className="min-h-screen bg-cover bg-indigo-100"
                style={
                    {
                        backgroundImage: "url('/images/BG.png')",
                    }
                }>
                <div className="container mx-auto py-10">
                    <Quotation/>
                </div>
            </section>
        </main>
    );
}
