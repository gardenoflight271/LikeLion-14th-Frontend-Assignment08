import { FiLoader } from "react-icons/fi";

export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex flex-col gap-4 items-center justify-center ">
            <FiLoader
                className="text-white text-4xl"
            />
            <h2 className="text-3xl  text-white">
                Loading...
            </h2>
        </div>
    );
}