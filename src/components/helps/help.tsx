export default function Help() {
  return (
    <>
      <div className="">
        <div className="bg-primary rounded-t-lg ">
          <p className="text-white font-bold mr-2">آخرین کمک ها</p>
        </div>
        <div className="flex gap-7">
          <div className="bg-white text-primary font-bold">
            <div className="mt-2">
              <p>کاربر علی مرادی</p>
              <p>کاربر علی مرادی</p>
            </div>
          </div>
          <div className="font-bold bg-green-100">
            <div className="mt-2">
              <p>مبلغ25,000تومان</p>
              <p>مبلغ25,000تومان</p>
            </div>
          </div>

          <div className="bg-white text-primary font-bold">
            <div className="mt-2">
              <p>کاربر علی مرادی</p>
              <p>کاربر علی مرادی</p>
            </div>
          </div>
          <div className="bg-green-100">
            <div className="font-bold mt-2">
              <p>مبلغ25,000تومان</p>
              <p>مبلغ25,000تومان</p>
            </div>

            <a className="text-primary border-primary bg-white m-2 rounded-full w-24 mt-3">
              بیشتر
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
