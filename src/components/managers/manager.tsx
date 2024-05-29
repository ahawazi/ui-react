import ArrowLeft from "../svgs/arrow-left";

export default function Manager() {
  return (
    <>
      <div className="flex items-center space-x-2 space-x-reverse m-3">
        <img
          src="https://via.placeholder.com/100"
          alt="Plan"
          className="rounded-full"
        />
        <div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <p className="text-purple-500 font-semibold">محمددستاوردی</p>
            <ArrowLeft className="size-3 text-primary" />
          </div>
          <p className="font-medium">مدیر عامل</p>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          temporibus expedita quam perspiciatis fugiat recusandae numquam
          tempore, minus magni mollitia inventore et? Dolorum, dicta impedit.
          Temporibus repellendus voluptatibus earum voluptates?
        </div>
      </div>
      <hr />
    </>
  );
}
