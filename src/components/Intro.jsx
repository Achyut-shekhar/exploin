// components/Intro.js
import React from "react";

const Intro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse transition duration-500">
        MemeVerse 🚀
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-300 animate-bounce text-center max-w-md">
        Unleash your memes. Rule the feed.
      </p>
    </div>
  );
};

export default Intro;
