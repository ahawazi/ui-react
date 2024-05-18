import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Sharer() {
  return (
    <>
      <div className="bg-green-400/50 rounded-b-3xl h-60 w-full">
        <div className="flex justify-center space-x-9 space-x-reverse p-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="border border-indigo-400 rounded-lg size-7">
              <Next />
            </div>
            <div className="flex items-center space-x-10 space-x-reverse">
              <div>
                <img
                  src="https://via.placeholder.com/125"
                  alt="Plan"
                  className="rounded-full"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Plan"
                  className="rounded-full"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/125"
                  alt="Plan"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="border border-indigo-400 rounded-lg size-7">
              <Back />
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center space-x-7 space-x-reverse">
          <p className="text-center flex">مورد نیاز:</p>
          <p>تامین شده:</p>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-green-400/100 px-4 py-0.5 rounded-full text-sm">
            من هم شریک میشوم
          </button>
        </div>
      </div>
    </>
  );
}
