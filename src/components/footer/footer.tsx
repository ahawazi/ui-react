import ArrowLeft from "@/components/svgs/arrow-left";

export default function Footer() {
  return (
    <>
      <div className="bg-primary">
        <div className="flex flex-col items-center space-y-2">
          <img
              src="/images/logo.png"
              alt="About"
              className="w-32"
          />
          <img src="/images/logo-name.png" alt="About" className="h-12"/>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-5 mt-10 justify-items-center">
            <div className="">
              <img src="https://via.placeholder.com/150x175" alt="Footer"/>
              <span className="text-white font-light flex justify-center px-6 py-6">
                لوح افتخار برترین
              </span>
            </div>

            <div className="">
              <img src="https://via.placeholder.com/150x175" alt="Footer"/>
              <span className="text-white font-light flex justify-center px-6 py-6">
                لوح افتخار برترین
              </span>
            </div>

            <div className="">
              <img src="https://via.placeholder.com/150x175" alt="Footer"/>
              <span className="text-white font-light flex justify-center px-6 py-6">
                لوح افتخار برترین
              </span>
            </div>

            <div className="">
              <img src="https://via.placeholder.com/150x175" alt="Footer"/>
              <span className="text-white font-light flex justify-center px-6 py-6">
                لوح افتخار برترین
              </span>
            </div>

            <div className="">
              <img src="https://via.placeholder.com/150x175" alt="Footer"/>
              <span className="text-white font-light flex justify-center px-6 py-6">
                لوح افتخار برترین
              </span>
            </div>
          </div>

          <hr className="text-white"/>

          <div className="grid grid-cols-5 p-10 justify-items-center">
            <div className="grid grid-rows-7 justify-items-start">
              <span className="text-onSecondary font-semibold pb-2">
                موسسه حضرت خدیجه(س)
              </span>
              <button className="text-gray-700 font-semibold">درباره</button>
              <button className="text-gray-700 font-semibold">ماموریت</button>
              <button className="text-gray-700 font-semibold">چشم انداز</button>
              <button className="text-gray-700 font-semibold">افتخارات</button>
              <button className="text-gray-700 font-semibold">اخبار</button>
              <button className="text-gray-700 font-semibold">تماس</button>
            </div>

            <div className="grid grid-rows-7 justify-items-start">
              <span className="text-onSecondary font-semibold pb-2">
                دانشنامه حضرت خدیجه(س)
              </span>
              <button className="text-gray-700 font-semibold">
                زندگی نامه
              </button>
              <button className="text-gray-700 font-semibold">
                کتاب شناسی
              </button>
              <button className="text-gray-700 font-semibold">چشم انداز</button>
              <button className="text-gray-700 font-semibold">
                سایت های تخصصی
              </button>
              <button className="text-gray-700 font-semibold">
                کتاب داستان عشق من
              </button>
            </div>

            <div className="grid grid-rows-6 justify-items-start">
              <span className="text-onSecondary font-semibold pb-2">
                درخواست ها
              </span>
              <button className="text-gray-700 font-semibold">
                ثبت نام تشرف انفرادی
              </button>
              <button className="text-gray-700 font-semibold">
                ثبت نام تشرف کاروانی
              </button>
              <button className="text-gray-700 font-semibold">
                ثبت نام خادمین
              </button>
            </div>

            <div className="grid grid-rows-6 justify-items-start">
              <span className="text-onSecondary font-semibold pb-2">خدمات</span>
              <button className="text-gray-700 font-semibold">
                زیارت نیابتی
              </button>
              <button className="text-gray-700 font-semibold">
                دلنوشته ها
              </button>
              <button className="text-gray-700 font-semibold">
                اسامی قرعه کشی
              </button>
            </div>

            <div className="grid grid-rows-5 justify-items-start">
              <span className="text-onSecondary font-semibold pb-2">
                راهنمایی
              </span>
              <button className="text-gray-700 font-semibold">
                اهدای کمک نقدی
              </button>
              <button className="text-gray-700 font-semibold">خیرین</button>
            </div>
          </div>

          <hr className="text-white"/>

          <div className="p-5 flex justify-between items-center">
            <div className="flex gap-2">
              <img src="https://via.placeholder.com/25" className="size-8" alt="facebook"/>
              <img src="https://via.placeholder.com/25" className="size-8" alt="twiter"/>
              <img src="https://via.placeholder.com/25" className="size-8" alt="telegram"/>
              <img src="https://via.placeholder.com/25" className="size-8" alt="instagram"/>
              <img src="https://via.placeholder.com/25" className="size-8" alt="aparat"/>
              <img src="https://via.placeholder.com/25" className="size-8" alt="itta"/>
              <img src="https://via.placeholder.com/25" className="size-8" alt="bale"/>
            </div>
            <div className="flex gap-2">
              <button className="text-onSecondary">فارسی</button>
              <button className="text-white">العربیه</button>
              <button className="text-white">Eng</button>
            </div>
            <div className="flex gap-2">
              <img src="https://via.placeholder.com/75" className="size-12" alt="Footer"/>
              <img src="https://via.placeholder.com/75" className="size-12" alt="Footer"/>
              <img src="https://via.placeholder.com/75" className="size-12" alt="Footer"/>
            </div>
          </div>
        </div>
        <div className="w-full p-2 bg-secondary text-center">
          <span className="inline-block align-bottom text-white">تمامی حقوق این وب سایت برای موسسه حضرت خدیجه(س) محفوظ می باشد.</span>
        </div>
      </div>
    </>
  );
}
