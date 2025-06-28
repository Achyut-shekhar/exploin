import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 text-white px-4 sm:px-6 py-5 shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between flex-wrap gap-2">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <span className="text-4xl animate-pulse hover:scale-110 transition-transform duration-300">
            📸
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight drop-shadow-sm">
            MemeVerse
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base font-semibold text-pink-100 italic text-center sm:text-right">
          Share. Laugh. Repeat. 😄
        </p>
      </div>
    </header>
  );
};

export default Header;
