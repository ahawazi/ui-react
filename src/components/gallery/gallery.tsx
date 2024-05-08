import Back from "../svgs/back";
import Next from "../svgs/next";

export default function Gallery() {
  return (
    <>
      <div className="bg-purple-800 size-fit">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Next />
          <img
            src="https://via.placeholder.com/400"
            alt="Plan"
            className="rounded-lg"
          />
          <Back />
        </div>

        <div className="flex space-x-2 space-x-reverse mt-4 justify-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Plan"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Plan"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Plan"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Plan"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Plan"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Plan"
            className="rounded-lg"
          />
          <img
            src="https://via.placeholder.com/50"
            alt="Plan"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
