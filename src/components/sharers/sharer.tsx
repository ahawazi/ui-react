/* eslint-disable @next/next/no-img-element */
import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Sharer() {
  return (
    <>
      <div className="bg-primary/20 rounded-b-10xl py-10 space-y-6 relative">

        <div
          style={{
            backgroundImage: 'url(images/BG.png)',
            backgroundSize: 'cover',
          }}
          className="absolute inset-0 w-full h-full rounded-b-10xl opacity-10 invert"
        >
        </div>
        <div className="flex justify-center items-center space-x-4 space-x-reverse">
          <div className="border border-primary text-primary flex items-center justify-center rounded-lg size-7">
            <Next />
          </div>
          <div className="flex items-center">
            <div className="px-10 flex justify-center items-center">
              <img
                src="https://via.placeholder.com/125"
                alt="Plan"
                className="rounded-full size-28 object-cover border border-secondary flex-1"
              />
            </div>
            <div className="h-12 w-[1px] bg-primary"></div>
            <div className="px-10 flex justify-center items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Plan"
                className="rounded-full size-40 object-cover border-2 border-primary"
              />
            </div>
            <div className="h-12 w-[1px] bg-primary"></div>
            <div className="px-10 flex justify-center items-center">
              <img
                src="https://via.placeholder.com/125"
                alt="Plan"
                className="rounded-full size-28 object-cover border border-secondary flex-1"
              />
            </div>
          </div>
          <div className="border border-primary text-primary flex items-center justify-center rounded-lg size-7">
            <Back />
          </div>
        </div>
        <div className="flex justify-center space-x-4 space-x-reverse items-center">
          <div className="text-center">
            <p className="text-sm">
              مورد نیاز:
            </p>
            <p className="font-medium">
              ۱۰۰۰۰۰
            </p>
          </div>
          <div className="w-44 bg-white py-0.5 px-0.5 rounded-full self-end my-1 flex justify-end">
            <div className="h-2 bg-primary rounded-full"
              style={
                {
                  width: "50%"
                }
              }
            ></div>
          </div>
          <div className="text-center">
            <p className="text-sm">
              تامین شده:
            </p>
            <p className="font-medium">
              ۱۰۰۰۰۰
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-primary px-4 py-0.5 rounded-full text-sm">
            من هم شریک میشوم
          </button>
        </div>
      </div>
    </>
  );
}
