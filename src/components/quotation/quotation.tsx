import NumberPagination from "../pagination/numberPagination";
import Pagination from "@/components/pagination/pagination";

export default function Quotation() {
    return (
        <>
            <div className="space-y-6 relative">
                <span className="text-secondary font-bold text-lg md:text-2xl md:px-10 md:mr-10">
                    بزرگان راجب موئسسه چه می گویند؟
                </span>

                <div className="flex space-x-4 space-x-reverse">
                    <div className="relative size-24 md:size-32 shrink-0">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Plan"
                            className="rounded-full object-cover size-full shrink-0"
                        />
                        <img src="/svgs/blockqute.svg" className="absolute size-6 md:size-8 -right-3 md:-right-5 top-10 md:top-12 bg-white rounded-full" alt=""/>
                    </div>
                    <div className="space-y-2">
                        <span className="text-onSecondary text-base font-bold">
                            آیت الله جوادی عاملی
                        </span>
                        <p
                            className="text-sm font-light line-clamp-4 md:line-clamp-2 text-justify"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                            aspernatur? Porro laboriosam nobis est, quibusdam quod error ipsum
                            omnis, facilis sequi libero deserunt rerum rem repellendus
                            doloribus officia. Mollitia, dolorum! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Expedita earum quos, itaque harum
                            consequatur cupiditate quam esse? Consequatur, beatae repellendus
                            quos impedit itaque nihil distinctio, commodi eligendi praesentium
                            animi accusamus.
                        </p>
                    </div>

                </div>


                <div className="flex justify-center">
                    <Pagination color="secondary"/>
                </div>
            </div>
        </>
    );
}
