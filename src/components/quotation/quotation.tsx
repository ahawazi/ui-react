import Pagination from "../pagination/pagination";

export default function Quotation() {
  return (
    <>
      <div>
            <p className="text-purple-700 font-bold p-6">
            بزرگان راجب موئسسه چه می گویند؟
            </p>

            <div className="">
                <div className="flex">
                    <img
                    src="https://via.placeholder.com/100"
                    alt="Plan"
                    className="rounded-full object-cover"
                    />
                    <p className="text-purple-800 font-semibold">
                    آیت الله جوادی عاملی
                    </p>
                </div>

                <div className="justify-items-center grid">  
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                    aspernatur? Porro laboriosam nobis est, quibusdam quod error ipsum
                    omnis, facilis sequi libero deserunt rerum rem repellendus
                    doloribus officia. Mollitia, dolorum! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Expedita earum quos, itaque harum
                    consequatur cupiditate quam esse? Consequatur, beatae repellendus
                    quos impedit itaque nihil distinctio, commodi eligendi praesentium
                    animi accusamus.
                    </p>

                    <div className="p-4">
                        <Pagination />
                    </div>
                </div>
            </div>
            
      </div>
    </>
  );
}
