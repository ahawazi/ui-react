export default function AmountDonated() {
  return (
    <>
      <div className="border border-gray-400 rounded-2xl px-4 py-2 relative w-52">
        <p className="text-white font-semibold bg-purple-500 border border-gray-400 px-2 py-0.5 absolute -top-5 right-7 rounded-full">
          بیشترین مبلغ اهدایی
        </p>

        <article className="flex justify-center space-x-2 space-x-reverse">
          <h3 className="text-purple-800 font-bold">2,578,000</h3>
          <h5 className="font-normal text-purple-500">ریال</h5>
        </article>
      </div>
    </>
  );
}
