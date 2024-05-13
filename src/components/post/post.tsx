import Like from "../svgs/like";

export default function Post() {
  return (
    <>
      <div className="border-gray-400 border-2 rounded-xl overflow-hidden">
        <div className="w-full h-48">
          <img
            src="https://via.placeholder.com/150"
            alt="Hat"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 p-1 flex flex-col">
          <p className="text-center p-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            asperiores esse quisquam, illum autem iste soluta repellat
            laboriosam qui, debitis quos officiis maxime optio eaque neque omnis
            veritatis incidunt. Beatae.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum, odit! Nobis repellat tempore officia
            voluptate quo aliquam iusto, harum quia provident accusantium
            sapiente ipsum repellendus ad, sit quibusdam minima tenetur?
          </p>
          <div className="flex items-center space-x-2 space-x-reverse mt-4">
            <div className="w-full h-0.5 bg-gray-200"></div>
            <div className="shrink-0">500نفرپسندیده اند</div>
            <div>
              <Like />
            </div>
          </div>
          <div className="flex space-x-2 space-x-reverse justify-between items-center"></div>
        </div>
      </div>
    </>
  );
}
