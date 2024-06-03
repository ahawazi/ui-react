import ArrowRigh from "../svgs/arrow-righ";

export default function Participation() {
  return (
    <>
      <div className="bg-green-400 rounded-3xl text-left p-2">
        <div className="m-2 p-4 px-10 rounded-2xl border border-white items-center">
          <div className="flex justify-end">
            <p className="font-bold text-white text-xl">
              مشارکت در طرح فرزندان غدیر
            </p>
            <ArrowRigh className="text-white w-6 h-6"/>
          </div>
          <p className="font-light text-white text-sm line-clamp-2 pt-4">
            مشارکت در طرح فرزندان غدیر به جهت حل مشکل نابروری
          </p>
          <div className="pt-6">
            <button className="border border-white bg-green-400 text-white py-0.5 px-6 rounded-full">
              بیشتر
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
