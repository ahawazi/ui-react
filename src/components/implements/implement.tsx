import Back from "../svgs/back";
import Download from "../svgs/download";
import Taimer from "../svgs/taimer";

export default function Implement() {
  return (
    <>
      <div className="flex justify-between items-center bg-indigo-900">
        <div className="w-full p-2">
          <div className="flex items-center">
            <Back className="text-indigo-200 size-10" />
            <p className="font-bold text-white">
              طرح فرزندان غدیر چگونه اجرا شد
            </p>
          </div>
          <hr />
          <p className="font-light text-white p-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <hr />
          <div className="divide-x divide-x-reverse divide-white flex justify-end gap-2">
            <div className="flex items-center">
              <button className="text-base font-bold text-white">دانلود</button>
              <Download />
            </div>
            <div className="flex items-center">
              <button className="px-2 text-base font-medium text-white ">
                20دقیقه
              </button>
              <Taimer />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="https://via.placeholder.com/500x500"
            alt="implement"
            className="object-cover rounded-2xl"
          />
          <div className="divide-x divide-x-reverse divide-white flex justify-end gap-2">
            <div className="flex items-center">
              <button className="text-white">کلمات کلیدی: #توجه فرمایید</button>
            </div>
            <div className="flex items-center">
              <button className="px-2 text-white ">#کانال ایتا موسسه</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
