export default function Plan() {
  return (
    <>
      <div className="border-gray-400 border-2 rounded-xl">
        <img
          src="https://via.placeholder.com/300"
          alt="Plan"
          className="rounded-t-lg w-full h-64 object-cover"
        />
        <div className="p-2 space-y-2">
          <div className="space-y-2">
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt eveniet fuga soluta dicta distinctio, dolore aliquid voluptas quo provident expedita aut minus eum ea enim inventore itaque incidunt nemo.
            </p>
            <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt eveniet fuga soluta dicta distinctio, dolore aliquid voluptas quo provident expedita aut minus eum ea enim inventore itaque incidunt nemo.
            </p>
          </div>
          <hr />  
          <div className="flex justify-end p-2">
            <div className="flex space-x-2 space-x-reverse">
              <div>1402\8\17</div>
              <img
                className="size-6"
                src="https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/date-and-time-icon.svg"
                alt="Date"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
