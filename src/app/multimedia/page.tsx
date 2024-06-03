import Introduction from "@/components/Introduction/introduction";
import Page from "@/components/layout/page";
import NumberPagination from "@/components/pagination/numberPagination";
import PlanBanner from "@/components/plans/plan-banner";
import Back from "@/components/svgs/back";
import Download from "@/components/svgs/download";
import Next from "@/components/svgs/next";
import Play from "@/components/svgs/play";
import Taimer from "@/components/svgs/taimer";

export default function MultimediaPage() {
  return (
    <>
      <Page className="bg-cover bg-onSecondary min-h-screen">
        <div className="min-h-screen">
          <div className="w-11/12">
            <div className="flex justify-end text-sm w-full font-light text-white divide-x divide-x-reverse divide-onSecondary from-secondary/60 to-secondary bg-gradient-to-r py-2 px-4 rounded-bl-xl">
              <div className="px-2">
                <span>شماره خبر:</span>
                <span>58</span>
              </div>
              <div className="px-2">پنج شنبه ۱۰ اسفند ۱۴۰۲</div>
              <div className="px-2">
                <span>دسته بندی:</span>
                <span>اخبار</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-500 w-fit rounded-lg p-10">
            <div className="text-left">
              <Play />
              <p className="text-white">
                کلمات کلیدی: #توجه فرمایید | <a href="#">کانال ایتا موسسه</a>
              </p>
            </div>

            <div>
              <div>
                <p className="text-white font-bold">
                  بیست و پنجمین مرحله ثبت نام طرح فرزندان غدیر
                </p>

                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  cum tempora corporis. Officia laboriosam quisquam soluta
                  laudantium ipsam, quidem obcaecati, quibusdam distinctio
                  voluptate atque deserunt odit alias cupiditate sit. Iste.
                </p>
              </div>

              <div className="flex space-x-2 space-x-reverse">
                <p className="text-white font-bold">دانلود</p>
                <Download />

                <p className="text-white">| 20دقیقه</p>
                <Taimer />
              </div>
            </div>
          </div>

          <div className="flex justify-center p-4">
            <NumberPagination />
          </div>
        </div>
      </Page>
    </>
  );
}
