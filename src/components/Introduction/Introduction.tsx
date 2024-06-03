import Download from "../svgs/download";
import Play from "../svgs/play";
import Taimer from "../svgs/taimer";

export default function Introduction() {
  return (
    <>
      <div className="bg-purple-500 w-fit rounded-lg p-10">
        <div className="text-left">
          <Play />
          <p className="text-white">
            کلمات کلیدی: #توجه فرمایید | <a href="#">کانال ایتا موسسه</a>
          </p>
        </div>

        <div>
          <div>
            <p className="text-white font-bold">
              بیست و پنجمین مرحله ثبت نام طرح فرزندان غدیر
            </p>

            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum
              tempora corporis. Officia laboriosam quisquam soluta laudantium
              ipsam, quidem obcaecati, quibusdam distinctio voluptate atque
              deserunt odit alias cupiditate sit. Iste.
            </p>
          </div>

          <div className="flex space-x-2 space-x-reverse">
          <div className="divide-x divide-x-reverse divide-white flex justify-end gap-2">
            <div className="flex items-center">
              <button className="text-base font-bold text-white">دانلود</button>
              <Download />
            </div>
            <div className="flex items-center">
              <button className="px-2 text-base font-medium text-white ">
                20دقیقه
              </button>
              <Taimer />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
