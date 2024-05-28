import ProductDrop from "../boxs/prodouct-box";
import SearchBox from "../boxs/search-bos";
import SityDrop from "../boxs/sity-drop";
import RangeInput from "../rangeInput/range-input";
import Setting from "../svgs/setting";
import Shopping from "../svgs/shopping";

export default function Filter() {
  return (
    <>
      <div className="border border-secondary/20 rounded-2xl p-5">
        <div className="w-full">
          <SearchBox />
        </div>
        <div className="space-y-4">
          <div className="flex m-2 items-center justify-between">
            <div className="flex space-x-2 space-x-reverse">
              <Setting className="size-6 text-secondary shrink-0" />
              <p className="font-medium">دسته بندی بر اساس:</p>
            </div>

            <div className="divide-x divide-x-reverse divide-secondary">
              <button
              className="px-2 text-base font-bold text-secondary"
              >نزولی</button>
              <button
              className="px-2 text-base font-medium text-secondary"
              >صعودی</button>
            </div>
          </div>
          <div className="flex space-x-2 space-x-reverse items-center">
            <div className="w-24 shrink-0 flex space-x-2 space-x-reverse items-center">
              <div className="size-4 bg-neutral-400 shrink-0"></div>
              <span className="text-gray-500">شهر</span>
            </div>
            <select className="grow border border-secondary rounded-full px-4 py-0.5">
              <option value="">شهر مورد نظر</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
          </div>

          <div className="flex space-x-2 space-x-reverse items-center">
            <div className="w-24 shrink-0 flex space-x-2 space-x-reverse items-center">
              <div className="size-4 bg-neutral-400 shrink-0"></div>
              <span className="text-gray-500">محصول</span>
            </div>
            <select className="grow border border-secondary rounded-full px-4 py-0.5">
              <option value="">محصول</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
          </div>
          <div className="">
            <div className="w-24 shrink-0 flex space-x-2 space-x-reverse items-center">
              <div className="size-4 bg-neutral-400 shrink-0"></div>
              <span className="text-gray-500">قیمت</span>
            </div>
            <div className="py-2">
              <div className="flex justify-center items-center space-x-2 space-x-reverse">
                <span className="text-sm font-light">از:</span>{" "}
                <span className="text-sm font-bold">20000</span>
                <span className="text-sm font-light">تا:</span>
                <span className="text-sm font-bold">20000</span>
              </div>
              <div className="py-2">
                <RangeInput />
              </div>
            </div>
          </div>
        </div>

        <button className="bg-secondary text-white px-5 py-3 rounded-2xl flex justify-center w-full">
          <Shopping />
          <p className="font-semibold text-base">سبد خرید</p>
        </button>
      </div>
    </>
  );
}
