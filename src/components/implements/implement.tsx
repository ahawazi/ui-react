import Back from "../svgs/back";
import Download from "../svgs/download";
import Taimer from "../svgs/taimer";

export default function Implement() {
  return (
    <>
      <div className="flex justify-between items-center bg-indigo-900">
        <div className="w-full p-4">
          <div className="flex items-center">
            <Back className="text-indigo-200 size-10" />
            <p className="font-bold text-white">
              طرح فرزندان غدیر چگونه اجرا شد
            </p>
          </div>

          <hr />

          <p className="font-light text-white p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            fugit tempore molestias blanditiis, repudiandae assumenda nesciunt,
            expedita exercitationem consectetur quibusdam magni voluptatibus
            amet aspernatur suscipit possimus quasi tenetur ipsam animi! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sequi eum
            doloremque possimus eos error unde. Debitis a, repellendus harum
            doloribus quis veritatis. Quia iure tempore quibusdam ut dolore sint
            dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint tempora amet itaque alias maxime perspiciatis dolorem nisi
            modi, ipsum pariatur, corporis, quibusdam debitis excepturi iure
            expedita fugit rerum dolores veniam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quos eius vero dignissimos asperiores
            harum doloribus ea praesentium ullam facere amet. Eligendi,
            excepturi voluptas aperiam minima vero ipsa incidunt facere iste?
          </p>

          <hr />

          <div className="flex space-x-2 space-x-reverse p-2">
            <p className="text-white font-bold">دانلود</p>
            <Download />

            <p className="text-white">| 20دقیقه</p>
            <Taimer />
          </div>
        </div>
        <div className="">
          <img
            src="https://via.placeholder.com/400x300"
            alt="implement"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}
