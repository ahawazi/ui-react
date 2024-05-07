export default function Sample() {
  return (
    <>
      <div className="rounded-lg border-4 border-purple-700 w-5/12 h-full m-11">
        <div className="bg-purple-700 h-10">
          <p className="text-white font-bold pr-2 pt-2">خیر نمونه هفته</p>
        </div>
        <div className="bg-purple-100 p-2 space-y-2">
          <div className="">
            <p className="text-purple-400 font-semibold">آقای رضا اسد الهی</p>
          </div>

          <div className="p-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              nostrum quis quod praesentium in, culpa facilis fugit voluptatum
              vel id sequi sapiente natus quos dicta, vero eaque explicabo
              suscipit aliquam?
            </p>
          </div>
          <div className="flex space-x-2 space-x-reverse justify-end items-center">
            <a className="border border-purple-700 text-purple-700 px-5 py-0.5 rounded-full">
              بیشتر
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
