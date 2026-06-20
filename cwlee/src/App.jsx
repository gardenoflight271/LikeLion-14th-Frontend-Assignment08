import { useEffect } from "react";

import CategorySelector from "./components/CategorySelector";
import RandomImage from "./components/RandomImage";
import Loading from "./components/Loading";
import Error from "./components/Error";

import { fetchRandomImage } from "./services/nasaApi";

import store from "./store/store";

export default function App() {
  const {
    category,
    setCurrentImage,
    setLoading,
    setError,
    loading,
    error,
  } = store();


  const getRandomImage = async () => {
    try {
      setLoading(true);
      setError(null);

      const randomImage =
        await fetchRandomImage(category);

      setCurrentImage(randomImage);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
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
            onClick={getRandomImage}
            className="bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-300"
          >
            New Image
          </button>
        </div>

        <RandomImage />
      </div>
    </div>
  );
}