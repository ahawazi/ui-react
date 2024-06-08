import Search from "../svgs/search";

export default function SearchBox() {
    return (
        <>
            <div className="relative w-full">
                <input
                    type="search"
                    id="default-search"
                    className="w-full px-2 py-1 text-sm text-gray-900 border border-onSecondary/50 rounded-2xl bg-gray-50"
                    placeholder="جستجوکنید"
                />
            </div>
        </>
    );
}
