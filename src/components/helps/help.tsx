export default function Help() {
  return (
    <>
      <div className="w-full">
        <div className="bg-teal-300 rounded-t-xl p-3">
          <h2 className="font-bold text-white">آخرین کمک ها</h2>
        </div>

        <table className="w-full">
          <tbody>
            <tr>
              <td className="p-2 text-teal-300 bg-white font-semibold">علی مرادی</td>
              <td className="p-2 font-semibold text-black bg-teal-50">25.000تومان</td>
              <td className="p-2 text-teal-300 bg-white font-semibold">علی مرادی</td>
              <td className="p-2 font-semibold text-black bg-teal-50">25.000تومان</td>
            </tr>

            <tr>
              <td className="p-2 text-teal-300 bg-white font-semibold">علی مرادی</td>
              <td className="p-2 font-semibold text-black bg-teal-50">25.000تومان</td>
              <td className="p-2 text-teal-300 bg-white font-semibold">علی مرادی</td>
              <td className="p-2 font-semibold text-black bg-teal-50">25.000تومان</td>
            </tr>

            <tr>
              <td className="p-2"></td>
              <td className="p-2 font-semibold text-black bg-teal-50"></td>
              <td className="p-2"></td>
              <td className="p-2 flex justify-end bg-teal-50">
                <button className="border border-teal-500 text-teal-500 bg-white py-0.5 px-6 rounded-full">
                  بیشتر
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
