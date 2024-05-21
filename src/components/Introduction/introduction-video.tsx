export default function IntroductionVideo() {
    return (
        <>
            <div className="flex space-x-2 space-x-reverse w-full">
                <div className="size-16 shrink-0">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Haji"
                        className="object-cover size-full"
                    />
                </div>
                <div className="px-4 flex items-center bg-gray-200 rounded-l-full grow">
                    <span className="text-onSecondary truncate">
                      آیت الله اعرافی
                    </span>
                </div>
            </div>
        </>
    );
}
