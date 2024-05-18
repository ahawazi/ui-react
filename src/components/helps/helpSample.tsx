export default function HelpSample() {
    return (
        <div className=" relative">
            <img
                src="https://placehold.co/600x400"
                alt="logo"
                className="size-20 rounded-full ring ring-offset-2 ring-purple-700 object-cover absolute top-14 -right-10"
            />
            <div className="bg-purple-700 rounded-t-2xl p-2">
                <p className="text-white font-bold">خیر نمونه هفته</p>
            </div>
            <div className="bg-purple-100 rounded-b-2xl">
                <div className="pt-4 px-4 pr-16">
                    <span className="font-bold text-base text-indigo-700">
                        آقای رضا اسد الهی
                    </span>
                    <p className="text-sm font-light line-clamp-2">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </p>
                </div>
                <div className="flex justify-end p-3">
                    <button
                        className="border border-purple-400 text-purple-400 py-0.5 px-6 rounded-full">
                        بیشتر
                    </button>
                </div>
            </div>
        </div>
    );
}
