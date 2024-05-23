export default function Report() {
  return (
    <>
      <div className="bg-red-500 p-2 rounded-2xl">
        <div className="p-5 border rounded-2xl border-white">
          <div>
            <span className="text-white font-bold">گزارشگر مشکلات باشید</span>
          </div>
          <div>
            <p className="text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellat quia ducimus architecto eaque, temporibus neque
              praesentium quaerat ad, vel voluptatem nemo eius, earum commodi
              error itaque sed repellendus similique.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="border border-white text-white bg-red-500 py-0.5 px-6 rounded-full">
              گزارش
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src="https://via.placeholder.com/100x150"
            alt="Report"
            className="rounded-t-full border-2 border-white"
          />
        </div>
      </div>
    </>
  );
}
