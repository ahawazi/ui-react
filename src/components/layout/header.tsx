/* eslint-disable @next/next/no-img-element */
export default function Header() {
    return <>
        <header className="bg-green-400 p-8 hidden sm:block">
            <div className="flex justify-end text-white items-center py-4">
                <div className="flex space-x-1 space-x-reverse items-center text-xs px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <span>
                        شنبه 2/2/1400
                    </span>
                </div>
                <div className="h-8 w-1 bg-white"></div>
                <div className="flex space-x-2 space-x-reverse px-2">
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-8 h-8" />
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-8 h-8" />
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-8 h-8" />
                    <select name="" id="" className="bg-transparent">
                        <option value="">فارسی</option>
                        <option value="">English</option>
                    </select>
                </div>
                <div className="h-8 w-1 bg-white"></div>
                <div className="px-2">
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-16 h-12" />
                </div>
            </div>
            <div className="bg-white rounded-3xl flex p-4">
                <div className="w-32 relative shrink-0">
                    <img src="https://via.placeholder.com/150" alt="logo" className="absolute -right-10 top-0 h-full w-full" />
                </div>
                <div className="flex items-center space-x-4 space-x-reverse grow">
                    <a href="#">صفحه اصلی</a>
                    <a href="#">صفحه اصلی</a>
                    <a href="#">صفحه اصلی</a>
                </div>
                <div className="shrink-0 flex flex-col justify-between space-y-2">
                    <div className="flex justify-end h-8">
                        <p>
                            امام علی علیه السلام: اَلْعَقْلُ مَاءٌ وَالْجَهْلُ نَارٌ
                        </p>
                    </div>
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <button
                                className="border border-indigo-400 text-indigo-400 px-4 py-2 rounded-full"
                            >
                                ورود |‌ ثبت نام
                            </button>
                            <button className="bg-indigo-400 text-white px-4 py-2 rounded-full">
                                اهدای کمک نقدی
                            </button>
                        </div>
                        <div>
                            <input
                                type="search"
                                placeholder="جستجو"
                                className="border border-gray-300 px-4 py-2 rounded-full w-full"
                            />
                        </div>
                    </div>
                    <div className="h-8">

                    </div>
                </div>
            </div>
        </header>
    </>
}