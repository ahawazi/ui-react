export default function MavaredShomaItem() {
    return <>
        <div className="flex flex-col items-center space-y-4">
            <div
                style={
                    {
                        backgroundImage: "url(https://source.unsplash.com/random)",
                    }
                }
                className="bg-cover bg-center w-10 h-10 flex items-center justify-center text-white"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
            </div>
            <div className="justify-center">
                <p className="text-center font-medium">
                    ۳۸۰
                </p>
                <p className="text-center font-light">
                    موارد شما
                </p>
            </div>
        </div>
    </>
}