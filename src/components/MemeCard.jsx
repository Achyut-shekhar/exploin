import React from "react";

const MemeCard = ({ meme, toggleLike, deleteMeme }) => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-4 flex flex-col border border-gray-700">
      <img
        src={meme.image}
        alt={meme.caption}
        className="w-full h-60 object-cover rounded-xl mb-4 border border-gray-600"
      />

      <h2 className="text-xl font-extrabold mb-2 tracking-tight">{meme.caption}</h2>

      <p className="text-sm text-cyan-400 mb-3">🎭 {meme.category}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {meme.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-cyan-700 text-white text-xs font-medium px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={() => toggleLike(meme.id)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold transition-all"
        >
           ❤️{meme.likes}
        </button>

        <button
          onClick={() => deleteMeme(meme.id)}
          className="text-red-400 hover:text-red-600 text-sm font-semibold transition"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
