import store from "../store/store";

const categories = [
    "all",
    "nebula",
    "galaxy",
    "star cluster",
    "supernova",
    "black hole",
];

export default function CategorySelector() {
    const category = store((state) => state.category);
    const setCategory = store((state) => state.setCategory);

    return (
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}

            className="bg-black text-white border border-white/30 shadow-white rounded-lg px-4 py-2 hover:border-white/50"
        >
            {categories.map((item) => (
                <option
                    key={item}
                    value={item}
                >
                    {item}
                </option>
            ))}
        </select>
    );
}