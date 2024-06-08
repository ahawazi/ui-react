import classNames from "classnames";

export default function Pilgrim(
    {
        active = false,
    },
) {
    return (
        <>
            <div style={
                {
                    backgroundImage: "url(https://source.unsplash.com/random)",
                }
            }
                 className="rounded-lg overflow-hidden"
            >
                <div
                    className={
                        classNames(
                            "size-32 flex flex-col justify-end",
                            {
                                "bg-onSecondary/50": !active,
                                "bg-primary/20": active,
                            }
                        )
                    }

                >
                    <p className="text-white text-center text-lg p-1 truncate">زائرین کربلا</p>
                </div>
            </div>
        </>
    );
}
