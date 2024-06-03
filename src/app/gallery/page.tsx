import Page from "@/components/layout/page";
import NumberPagination from "@/components/pagination/numberPagination";
import Pagination from "@/components/pagination/pagination";
import PlanBanner from "@/components/plans/plan-banner";
import PlansVideo from "@/components/plans/plans-video";
import Back from "@/components/svgs/back";
import Next from "@/components/svgs/next";

export default function GalleryPage() {
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

          <div className="px-10 py-10 line-clamp-2">
            <p className="py-2 text-white font-bold">
              بیست و پنجمین مرحله ثبت نام طرح فرزندان غدیر
            </p>

            <p className="text-white font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum
              tempora corporis. Officia laboriosam quisquam soluta laudantium
              ipsam, quidem obcaecati, quibusdam distinctio voluptate atque
              deserunt odit alias cupiditate sit. Iste.
            </p>
          </div>
          <div className="pt-10 justify-items-center grid">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="size-6 text-white border border-white rounded-lg flex items-center justify-center">
                <Next />
              </div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Gallery"
                className="rounded-lg"
              />
              <div className="size-6 text-white border border-white rounded-lg flex items-center justify-center">
                <Back />
              </div>
            </div>

            <div className="flex space-x-2 space-x-reverse mt-4 justify-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
            </div>

            <div className="flex space-x-2 space-x-reverse mt-4 justify-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Gallery"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="pr-20 pt-10">
            <div className="flex justify-start text-sm font-light text-onSecondary divide-x divide-x-reverse divide-onSecondary/50 from-white to-secondary/10 bg-gradient-to-l py-2 px-4 rounded-br-xl">
              <div className="px-2 flex">
                <span>کلمات کلیدی:</span>
                <div className="flex divide-x divide-x-reverse divide-onSecondary/50 font-medium">
                  <p className="px-1">#سیستان</p>
                  <p className="px-1">#جهادگران</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>

      <div className="p-10">
        <div className="text-center py-3 bg-secondary/20 rounded-tr-xl rounded-tl-xl">
          <span className="text-onSecondary font-bold">
            دیگر گزارش های تصویری
          </span>
        </div>
        <div className="grid gap-4 py-4">
          <PlanBanner />
          <PlanBanner />
          <PlanBanner />
        </div>
      </div>
      <div className="flex justify-center p-4">
        <NumberPagination/>
      </div>
    </>
  );
}
