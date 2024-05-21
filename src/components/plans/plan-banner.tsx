import CalendarDays from "@/components/svgs/calendarDays";
import ArrowLeft from "@/components/svgs/arrow-left";

export default function PlanBanner() {
    return (
        <>
            <div className="flex space-x-4 space-x-reverse border border-indigo-400/20 rounded-2xl overflow-hidden rounded-es-none">
                <div className="w-32 md:w-60 aspect-video shrink-0">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Plan"
                        className="size-full object-cover"
                    />
                </div>
                <div className="p-2 space-y-4">
                    <div>
                        <h2>
                            بیست و پنجمین مرحله ثبت نام طرح فرزندان غدیر
                        </h2>
                        <p className="text-gray-600 font-light text-base line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                            nesciunt eveniet fuga soluta dicta distinctio, dolore aliquid
                            voluptas quo provident expedita aut minus eum ea enim inventore
                            itaque incidunt nemo.
                        </p>
                    </div>
                    <div className="flex justify-end p-2">
                        <div className="flex space-x-2 space-x-reverse text-sm items-center">
                            <span className="text-neutral-400">1402\8\17</span>
                            <CalendarDays className="size-4 text-indigo-400"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
