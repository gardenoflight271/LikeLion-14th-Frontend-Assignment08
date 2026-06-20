export default function Error({ message }) {
    return (
        <div className="min-h-screen bg-black flex flex-col gap-4 items-center justify-center ">
            <h2 className="text-red-500 text-3xl  font-bold">
                Error
            </h2>
            <p className="text-white">
                {/* {message} */}
            </p>
        </div>
    );
}