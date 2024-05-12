import ProductDrop from "../boxs/prodouct-box";
import SearchBox from "../boxs/search-bos";
import SityDrop from "../boxs/sity-drop";
import Setting from "../svgs/setting";
import Shopping from "../svgs/shopping";

export default function Filter() {
  return (
    <>
      <div className="border border-gray-400 rounded-2xl">
        <div>
          <SearchBox />
        </div>

        <div className="flex m-2 items-center justify-between">
          <div className="flex">
            <Setting />
            <p className="font-bold">دسته بندی بر اساس:</p>
          </div>

          <div>
            <p> صعودی | نزولی</p>
          </div>
        </div>

        <hr />

        <div className="flex m-2 items-center justify-between">
          <p className="text-gray-500">شهر</p>
          <SityDrop />
        </div>

        <div className="flex m-2 items-center justify-between">
          <p className="text-gray-500">محصول</p>
          <ProductDrop />
        </div>

        <hr />

        <div className="m-2">
          <span className="text-gray-500">قیمت</span>
          <p>از : 3.00080 تا : 300080</p>
          {/* slider */}
        </div>

        <hr />

        <button className="bg-purple-600 text-white px-5 py-2 rounded-full flex">
          <Shopping />
          <p className="font-semibold">سبد خرید</p>
        </button>
      </div>
    </>
  );
}
