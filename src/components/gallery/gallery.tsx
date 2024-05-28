import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Gallery() {
  return (
    <>
      <div className="justify-items-center grid bg-purple-500">
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="size-6 text-white border border-white rounded-lg flex items-center justify-center">
            <Next />
          </div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Gallery"
            className="rounded-lg"
          />
          <div className="size-6 text-white border border-white rounded-lg flex items-center justify-center">
            <Back />
          </div>
        </div>

        <div className="flex space-x-2 space-x-reverse mt-4 justify-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
        </div>

        <div className="flex space-x-2 space-x-reverse mt-4 justify-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Gallery"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
