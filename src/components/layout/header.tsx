export default function Header() {

    return <>
        <header className="mb-8 z-20 left-0 top-0 w-full hidden sm:block h-40 bg-primary">
            <div className="w-full p-2 px-10">
                <div className="flex justify-end text-white items-center py-4 px-4">
                    <div className="flex space-x-1 space-x-reverse items-center text-xs px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                        </svg>
                        <span>
                        امروز: شنبه 2/2/1400
                    </span>
                    </div>
                    <div className="h-8 w-0.5 bg-white"></div>
                    <div className="flex space-x-2 space-x-reverse px-2">
                        <img src="https://placehold.co/100x100" alt="logo" className="size-6"/>
                        <img src="https://placehold.co/100x100" alt="logo" className="size-6"/>
                        <img src="https://placehold.co/100x100" alt="logo" className="size-6"/>
                        <img src="https://placehold.co/100x100" alt="logo" className="size-6"/>
                        <select name="" id="" className="bg-transparent appearance-none text-center">
                            <option value="">فارسی</option>
                            <option value="">English</option>
                        </select>
                    </div>
                    <div className="h-8 w-0.5 bg-white"></div>
                    <div className="px-2">
                        <img src="https://placehold.co/600x400" alt="logo" className="w-24 h-12 object-cover"/>
                    </div>
                </div>
                <div className="bg-white rounded-10xl p-2 pl-12 relative">
                    <div className="absolute top-0 h-full -right-6 flex items-center">
                        <img src="/images/logo.png" alt="logo"
                             className="w-24"/>
                    </div>
                    <div className="flex mr-20">
                        <div className="self-center">
                            <img src="/images/logo-name.png" alt="logo"
                                 className="w-40"/>
                        </div>
                        <div className="flex items-center space-x-4 space-x-reverse grow pr-10">
                            <a href="#">صفحه اصلی</a>
                            <a href="#">صفحه اصلی</a>
                            <a href="#">صفحه اصلی</a>
                        </div>
                        <div className="shrink-0 flex flex-col justify-between space-y-2">
                            <div className="flex justify-end h-8">
                                <div className="flex space-x-1 space-x-reverse items-center text-xs">
                                    <p className="text-xs text-secondary">
                                        امام علی علیه السلام: اَلْعَقْلُ مَاءٌ وَالْجَهْلُ نَارٌ
                                    </p>
                                    <p className="text-primary">
                                        : پیام امروز
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 space-x-reverse">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <button
                                        className="border border-secondary text-secondary px-4 py-0.5 rounded-full"
                                    >
                                        ورود | ثبت نام
                                    </button>
                                    <button className="bg-secondary text-white px-4 py-0.5 rounded-full">
                                        اهدای کمک نقدی
                                    </button>
                                </div>
                                <div>
                                    <input
                                        type="search"
                                        placeholder="جستجو"
                                        className="border border-gray-300 px-4 py-0.5 rounded-full w-full"
                                    />
                                </div>
                            </div>
                            <div className="h-8">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}