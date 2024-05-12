import Search from "../svgs/search";

export default function SearchBox() {
  return (
    <>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-2 ps-10 text-gray-900 border border-purple-500 rounded-2xl bg-gray-50"
            placeholder="جستجوکنید"
          />
        </div>
      </form>
    </>
  );
}
