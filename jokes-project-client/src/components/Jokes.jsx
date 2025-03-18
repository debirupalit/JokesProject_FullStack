import { useState, useEffect } from "react";
import JokesCard from "./JokesCard";
import "../styles/jokesPage.css";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const jokesPerPage = 3;

  // Fetch jokes from backend
  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch("https://jokesproject-dp.onrender.com/api/jokes");
        // const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/jokes`);
        const data = await response.json();
        setJokes(data);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };
    fetchJokes();
  }, []);

  const handleNextJoke = () => {
    setStartIndex((prevIndex) =>
      prevIndex + jokesPerPage >= jokes.length ? 0 : prevIndex + jokesPerPage
    );
  };

  const visibleJokes = jokes.slice(startIndex, startIndex + jokesPerPage);

  return (
    <div className="jokes-page">
      <h2 className="jokes-heading">Brace Yourself for Some Giggles! 🤣</h2>
      <div className="joke-outer-div">
        {visibleJokes.map((currentElem) => (
          <JokesCard key={currentElem._id} currentElem={currentElem} />
        ))}
      </div>
      <button className="next-joke-button" onClick={handleNextJoke}>
        🎭 Generate New Jokes
      </button>
      <footer className="jokes-footer">
        Keep Laughing, It's Contagious! 😂
      </footer>
    </div>
  );
};

export default Jokes;
