import Location from "../svgs/location";
import Phone from "../svgs/phone";

export default function About() {
  return (
    <>
      <div className="p-4">
        <div className="grid justify-items-center">
          <p className="text-green-300 font-semibold">درباره ما</p>
          <img src="https://via.placeholder.com/100x200" alt="About" />
        </div>

        <div>
          <p className="line-clamp-3 text-center">
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
            طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 space-x-reverse p-6">
          <div className="flex text-purple-500 items-center space-x-1 space-x-reverse">
            <div>تهران.فلان فلن.16</div>
            <Location />
          </div>

          <div className="flex items-center text-purple-500 space-x-1 space-x-reverse">
            <div>021-8503145</div>
            <Phone />
          </div>
        </div>

        <div className="flex space-x-2 space-x-reverse items-center">
          <hr className="grow bg-onSecondary/50 h-0.5" />
          <button className="border border-onSecondary text-onSecondary px-4 py-0.5 rounded-full text-sm">
            درباره ما
          </button>
          <button className="border border-onSecondary text-onSecondary px-4 py-0.5 rounded-full text-sm">
            تماس با ما
          </button>
          <hr className="grow bg-onSecondary/50 h-0.5" />
        </div>
      </div>
    </>
  );
}
