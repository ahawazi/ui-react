export default function PlanCode(
    {
        title,
        description,
        image,
    }:
        {
            title: string,
            description: string,
            image: string
        }
) {
    return (
        <>
            <div>
                <div>
                    <img
                        src={image}
                        alt="Plan"
                        className="rounded-t-lg w-full h-80"
                    />
                </div>

                <div className="text-center">
                    <p className="text-lg font-light">ازطریق</p>
                    <p className="font-bold text-2xl text-primary">
                        {title}
                    </p>
                </div>

                <p className="text-base font-light text-center">
                    {description}
                </p>
            </div>
        </>
    );
}
