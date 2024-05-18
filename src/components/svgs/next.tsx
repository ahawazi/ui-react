export default function Next({
                                 className = "",
                             }: Readonly<{ className?: string }> = {}) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                 className={className ? className : "w-6 h-6"}
            >
                <path fillRule="evenodd"
                      d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"/>
            </svg>
        </>
    );
}
