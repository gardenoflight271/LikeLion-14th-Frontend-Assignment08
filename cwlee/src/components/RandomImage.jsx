import store from "../store/store";
import { MdArrowOutward } from "react-icons/md";

export default function RandomImage({ currentImage, }) {

    if (!currentImage) {
        return null;
    }

    const info = currentImage.data?.[0];
    const image =
        currentImage.links?.[0]?.href;

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">
                {info.title}
            </h2>

            <p className="text-gray-400">
                {new Date(info.date_created).toLocaleDateString()}
            </p>

            <img
                src={image}
                alt={info.title}
                className="rounded-2xl"
            />
            <a
                href={`https://images.nasa.gov/details-${info.nasa_id}`}
                target="_blank"

                className="underline flex items-center gap-2 hover:text-gray-300"
            >
                <MdArrowOutward />View from NASA
            </a>
        </div>
    );
}