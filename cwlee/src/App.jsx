import CategorySelector from "./components/CategorySelector";
import RandomImage from "./components/RandomImage";
import Loading from "./components/Loading";
import Error from "./components/Error";

import { fetchRandomImage } from "./services/nasaApi";

import store from "./store/store";

import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { category } = store();

  const {
    data: currentImage,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["space-image", category],
    queryFn: () =>
      fetchRandomImage(category),
  });


  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-0.9 max-w-2xl flex flex-col items-center justify-center m-8 mt-16 font-bn">
        <h1 className="text-4xl pb-10 font-extrabold">
          NASA Random Space Photo
        </h1>

        <div className="flex gap-10 pb-10">
          <CategorySelector
          />

          <button
            onClick={() => refetch()}
            className="bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-300"
          >
            New Image
          </button>
        </div>

        <RandomImage currentImage={currentImage} />
      </div>
    </div >
  );
}