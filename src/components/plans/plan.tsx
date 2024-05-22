import CalendarDays from "@/components/svgs/calendarDays";

export default function Plan() {
    return (
        <>
            <div className="border-onSecondary/20 border rounded-xl overflow-hidden">
                <img
                    src="https://via.placeholder.com/300"
                    alt="Plan"
                    className="w-full h-32 object-cover"
                />
                <div className="p-2 space-y-2">
                    <div className="space-y-2">
                        <p className="font-medium line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt eveniet fuga
                            soluta dicta distinctio, dolore aliquid voluptas quo provident expedita aut minus eum ea
                            enim inventore itaque incidunt nemo.
                        </p>
                        <p className="text-gray-600 font-light line-clamp-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt eveniet fuga
                            soluta dicta distinctio, dolore aliquid voluptas quo provident expedita aut minus eum ea
                            enim inventore itaque incidunt nemo.
                        </p>
                    </div>
                    <hr/>
                    <div className="flex justify-end p-2">
                        <div className="flex space-x-2 space-x-reverse items-center text-sm text-neutral-400">
                            <span>1402\8\17</span>
                            <CalendarDays className="size-4 text-secondary"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
