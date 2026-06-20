const allCategories = [
    "nebula",
    "galaxy",
    "star cluster",
    "supernova",
    "black hole",
];

export async function fetchRandomImage(category) {
    let searchCategory = category;

    if (category === "all") {
        const randomCategoryIndex = Math.floor(
            Math.random() * allCategories.length
        );

        searchCategory =
            allCategories[randomCategoryIndex];
    }

    const response = await fetch(
        `https://images-api.nasa.gov/search?q=${searchCategory}&media_type=image`
    );

    if (!response.ok) {
        throw new Error(
            "이미지를 불러올 수 없습니다."
        );
    }

    const data = await response.json();

    const images = data.collection.items.filter((item) => {
        if (!item.links) return false;

        const info = item.data?.[0];

        const text = `
      ${info?.title || ""}
      ${info?.description || ""}
    `.toLowerCase();

        const telescopeKeywords = [
            "hubble",
            "james webb",
            "jwst",
            "spitzer",
            "chandra",
        ];

        return telescopeKeywords.some((word) =>
            text.includes(word)
        );
    });

    if (images.length === 0) {
        throw new Error(
            "해당 카테고리의 이미지를 찾을 수 없습니다."
        );
    }

    const randomIndex = Math.floor(
        Math.random() * images.length
    );

    return images[randomIndex];
}