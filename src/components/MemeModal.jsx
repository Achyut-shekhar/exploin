import React, { useState } from "react";

const MemeModal = ({ addMeme, onClose }) => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (image && caption && category) {
      const formattedTags = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
      addMeme({ image, caption, category, tags: formattedTags });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-2xl shadow-2xl w-[95%] max-w-lg max-h-[90vh] overflow-y-auto p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          🚀 Upload Your <span className="text-teal-400">Meme</span>
        </h2>

        <div className="space-y-5">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold mb-1">📷 Meme Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full border border-teal-500 bg-gray-900 rounded-lg text-sm file:bg-teal-500 file:text-white file:px-4 file:py-2 file:border-none file:rounded file:mr-3"
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="mt-3 w-full max-h-64 object-contain rounded-xl border border-gray-600"
              />
            )}
          </div>

          {/* Caption */}
          <div>
            <label className="block text-sm font-semibold mb-1">💬 Caption</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="What's this meme about?"
              className="w-full bg-gray-900 border border-teal-500 p-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-1">🎭 Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-900 border border-teal-500 p-2 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="funny">Funny 😂</option>
              <option value="relatable">Relatable 😅</option>
              <option value="wholesome">Wholesome 🥰</option>
              <option value="sarcastic">Sarcastic 😏</option>
              <option value="school">School 📚</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold mb-1">🏷️ Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. exams, dogs, weekends"
              className="w-full bg-gray-900 border border-teal-500 p-2 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">Separate tags with commas</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            🚀 Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemeModal;
