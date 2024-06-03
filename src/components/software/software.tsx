export default function Software() {
  return (
    <>
      <div className="bg-cyan-500 p-2">
        <div className="border rounded-lg border-white relative flex justify-between">
          <div className="">
            <img
              src="https://via.placeholder.com/150x250"
              alt="software"
              className="rounded-lg absolute -top-36"
            />
          </div>

          <div className="justify-items-end">
                <div>
                    <span className="font-bold">نرم افزار موسسه حضرت خدیجه(س)</span>
                    <p>مجری طرح زیارت اولی های اهل بیت علیهم السلام</p>
                </div>

                <div className="flex gap-5 items-center">
                    <img
                        src="https://via.placeholder.com/100x40"
                        alt="Gallery"
                        className="rounded-lg"
                    />
                    <img
                        src="https://via.placeholder.com/100x40"
                        alt="Gallery"
                        className="rounded-lg"
                    />
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
