import Location from "../svgs/location";
import Ticket from "../svgs/ticket";

export default function ProductDescription() {
  return (
    <>
      <div className="border-gray-400 border-2 rounded-xl">
        <div className="flex space-x-2 space-x-reverse justify-between">
          <div className="flex space-x-2 space-x-reverse">
            <Ticket />

            <p className="font-bold">کلاه حصیر دستبافت</p>
          </div>

          <div className="flex items-center space-x-1 space-x-reverse text-gray-400">
            <span>راور,کرمان</span>

            <Location className="size-5" />
          </div>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo debitis,
          porro velit saepe sint doloremque recusandae! Totam, fugiat
          perspiciatis, beatae voluptatem dicta voluptatum voluptate ratione
          nobis nemo saepe eum tempore.
        </div>

        <div className="flex font-bold space-x-2 space-x-reverse p-2">
          <Ticket />
          <div>25.000ریال</div>
        </div>
        <span className="text-gray-400 mr-5">هزینه پست رایگان</span>
        <p className="flex justify-items-center p-2">دیگر مشخصات:</p>

        <div className="grid grid-cols-3 justify-items-center p-2">
          <div className="flex">
            جنس: <div>بسیار عالی</div>
          </div>
          <div className="flex">
            جنس: <div>بسیار عالی</div>
          </div>
          <div className="flex">
            جنس: <div>بسیار عالی</div>
          </div>
          <div className="flex">
            جنس: <div>بسیار عالی</div>
          </div>
          <div className="flex">
            جنس: <div>بسیار عالی</div>
          </div>
          <div className="flex">
            جنس: <div>بسیار عالی</div>
          </div>
        </div>
      </div>
    </>
  );
}
