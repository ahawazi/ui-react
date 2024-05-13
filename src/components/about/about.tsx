import Location from "../svgs/location";
import Phone from "../svgs/phone";

export default function About() {
  return (
    <>
      <div>
        <div className="grid justify-items-center">
          <p className="text-green-300 font-semibold">درباره ما</p>
          <img src="https://via.placeholder.com/100" alt="Plan" className="" />
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            provident quisquam facere illum corrupti repellendus nemo illo at
            aliquid pariatur totam nostrum, dicta error nisi possimus debitis
            aut iure aperiam! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Beatae pariatur, modi, ex fugit amet praesentium vero quod eum
            architecto tempore dignissimos ratione, nisi ab repellat magni ut
            inventore voluptates molestiae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Animi laudantium, dolorum laborum quod
            exercitationem cupiditate, tempore veritatis modi ut consequatur
            quaerat quam illum fugiat quisquam cumque iure labore perspiciatis
            quidem.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 space-x-reverse p-2">
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="text-purple-500">تهران.فلان فلن.16</div>
            <Location />
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="text-purple-500">021-8503145</div>
            <Phone />
          </div>
        </div>

        <div className="flex items-center space-x-2 space-x-reverse justify-center">
          <div className="text-gray-500 rounded-2xl border-gray-500 border px-4 py-1">
            درباره ما
          </div>
          <div className="text-gray-500 rounded-2xl border-gray-500 border px-4 py-1">
            تماس باما
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}
