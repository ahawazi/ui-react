import Like from "../svgs/like";

export default function Post() {
    return (
        <>
            <div className="rounded-xl overflow-hidden bg-white">
                <div className="w-full h-48">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Hat"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-2 pb-4 flex flex-col space-y-4">
                    <p className="text-right p-1 line-clamp-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
                        asperiores esse quisquam, illum autem iste soluta repellat
                        laboriosam qui, debitis quos officiis maxime optio eaque neque omnis
                        veritatis incidunt. Beatae.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Laborum, odit! Nobis repellat tempore officia
                        voluptate quo aliquam iusto, harum quia provident accusantium
                        sapiente ipsum repellendus ad, sit quibusdam minima tenetur?
                    </p>
                    <div className="flex items-center space-x-2 space-x-reverse">
                        <hr
                            className="grow"
                        />
                        <div className="shrink-0 flex space-x-2 space-x-reverse items-center pl-4">
                            <span className="shrink-0 text-sm font-light">500نفرپسندیده اند</span>
                            <Like className="size-6"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
