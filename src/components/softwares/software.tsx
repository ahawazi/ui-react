import Back from "../svgs/back";

export default function Software() {
  return (
    <>
      <div className="bg-indigo-800 flex rounded-3xl">
        <div className="">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Plan"
            className="rounded-lg"
          />
        </div>

        <div className="flex space-x-2 space-x-reverse">
          <Back className="text-white size-7" />
          <p className="flex items-baseline text-white text-xl font-bold space-x-2">
            نرم افزار موسسه حضرت خدیجه
            <p className="text-white text-sm font-thin">سلام الله علیها</p>
          </p>
        </div>

        <div className="flex">
          <p className="text-white font-thin">
            مجری طرح زیارت اولی های اهل بیت علیهم السلام
          </p>
        </div>

        <div className="flex items-center space-x-2 space-x-reverse">
          <button className="border border-white text-white bg-black py-0.5 px-6 rounded-md">
            بازار
          </button>
          <button className="border border-white text-white bg-black py-0.5 px-6 rounded-md">
            گوگل پلی
          </button>
        </div>
      </div>
    </>
  );
}
