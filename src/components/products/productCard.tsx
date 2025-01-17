/* eslint-disable @next/next/no-img-element */
import Location from "../svgs/location";

export default function ProductCard() {
  return (
    <>
      <div className="bg-white border-surface border-2 rounded-xl overflow-hidden">
        <div className="w-full h-48">
          <img
            src="https://via.placeholder.com/150"
            alt="Hat"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 p-1 flex flex-col">
          <p className="text-center font-bold p-1">کلاه حصیر دستبافت</p>
          <hr />
          <div className="flex space-x-2 space-x-reverse justify-between items-center px-2">
            <span className="text-lg font-medium">
              ۲۵۰۰۰ ریال
            </span>

            <div className="flex items-center space-x-1 space-x-reverse text-gray-400">
              <span>راور,کرمان</span>
              <Location className="size-5 text-red-500 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
