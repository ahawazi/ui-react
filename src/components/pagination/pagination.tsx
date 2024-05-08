import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Pagination() {
  return (
    <>
      <div className="flex bg-slate-300 space-x-2 space-x-reverse">
        <div className="ml-4">
          <Next />
        </div>

        <div className="rounded-lg border border-purple-200 w-6 text-center text-purple-600 font-bold">
          1
        </div>
        <div className="rounded-lg border border-purple-200 w-6 text-center text-purple-600 font-bold">
          2
        </div>
        <div className="rounded-lg border border-purple-200 w-6 text-center text-purple-600 font-bold">
          3
        </div>
        <div className="rounded-lg border border-purple-200 w-6 text-center text-purple-600 font-bold">
          4
        </div>
        <div className="rounded-lg border border-purple-200 w-6 text-center text-purple-600 font-bold">
          ...
        </div>

        <div className="mr-4">
          <Back />
        </div>
      </div>
    </>
  );
}
