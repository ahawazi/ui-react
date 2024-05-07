/* eslint-disable @next/next/no-img-element */
import MiniBanner from "@/components/banners/mini-banner";
import MavaredShomaItem from "@/components/items/mabared-shoma-item";
import ArrowLeft from "@/components/svgs/arrow-left";
import Image from "next/image";
import Box from "@/components/elements/card/box";
import BoxHeader from "@/components/elements/card/boxHeader";
import ListItem from "@/components/elements/list/listItem";
import Help from "@/components/helps/help";
import Plan from "@/components/Plans/plan";
import Product from "@/components/Products/product";

export default function Home() {
  return (
    <main className="min-h-screen justify-center">
      <div className="flex">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Product />
        </div>
      </div>
    </main>
  );
}
