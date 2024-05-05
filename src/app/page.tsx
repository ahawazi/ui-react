/* eslint-disable @next/next/no-img-element */
import MiniBanner from "@/components/banners/mini-banner";
import MavaredShomaItem from "@/components/items/mabared-shoma-item";
import ArrowLeft from "@/components/svgs/arrow-left";
import Image from "next/image";
import Box from "@/components/elements/card/box";
import BoxHeader from "@/components/elements/card/boxHeader";
import ListItem from "@/components/elements/list/listItem";

export default function Home() {
    return (
        <main className="min-h-screen justify-center">
            <div className="flex">
                <Box>
                    <BoxHeader>
                        <h1 className="font-bold text-indigo-600 text-xl px-4">موارد شما</h1>
                    </BoxHeader>
                    <ul className="divide-y-2 divide-indigo-400/20">
                        <ListItem>
                            عشق
                        </ListItem>
                        <ListItem>
                            عشق
                        </ListItem>
                    </ul>
                </Box>
            </div>
        </main>
    );
}
