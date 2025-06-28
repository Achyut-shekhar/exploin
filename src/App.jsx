import React, { useEffect, useState } from "react";
import MemeModal from "./components/MemeModal";
import MemeCard from "./components/MemeCard";
import Header from "./components/Header";
import Login from "./components/Login";
import Intro from "./components/Intro";

const App = () => {
  const [currentUser, setCurrentUser] = useState(() =>
    localStorage.getItem("currentUser") || ""
  );
  const [memes, setMemes] = useState(() => {
    try {
      const stored = localStorage.getItem("memes");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [showIntro, setShowIntro] = useState(true);
  const [view, setView] = useState("feed"); // 👈 NEW

  useEffect(() => {
    localStorage.setItem("memes", JSON.stringify(memes));
  }, [memes]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const addMeme = (meme) => {
    const newMeme = {
      ...meme,
      id: Date.now(),
      likes: 0,
      date: Date.now(),
      owner: currentUser,
    };
    setMemes((prev) => [newMeme, ...prev]);
    setShowModal(false);
  };

  const toggleLike = (id) => {
    setMemes((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, likes: m.likes + 1 } : m
      )
    );
  };

  const deleteMeme = (id) => {
    setMemes((prev) => prev.filter((m) => m.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser("");
  };

  // ✅ Sort memes
  const sortedMemes = [...memes].sort((a, b) =>
    sortBy === "likes" ? b.likes - a.likes : b.date - a.date
  );

  const userMemes = sortedMemes.filter((m) => m.owner === currentUser);

  if (showIntro) {
    return <Intro />;
  }

  if (!currentUser) {
    return <Login onLogin={setCurrentUser} />;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
              >
                Upload Meme
              </button>
              <button
                onClick={() => setView("feed")}
                className={`px-4 py-2 rounded ${
                  view === "feed"
                    ? "bg-blue-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                All Memes
              </button>
              <button
                onClick={() => setView("dashboard")}
                className={`px-4 py-2 rounded ${
                  view === "dashboard"
                    ? "bg-purple-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                My Dashboard
              </button>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 px-3 py-2 rounded"
              >
                <option value="newest">Newest</option>
                <option value="likes">Most Liked</option>
              </select>
              <button
                onClick={logout}
                className="text-red-400 hover:text-red-600 font-semibold"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(view === "feed" ? sortedMemes : userMemes).map((meme) => (
              <MemeCard
                key={meme.id}
                meme={meme}
                toggleLike={toggleLike}
                deleteMeme={deleteMeme}
              />
            ))}
          </div>

          {showModal && (
            <MemeModal addMeme={addMeme} onClose={() => setShowModal(false)} />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
