import "../styles/jokesCard.css";
import { useState } from "react";

const JokesCard = ({ currentElem }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`joke-container ${isFlipped ? "flipped" : ""}`}>
        <div className="joke-card-inner">
          {/* Front side of the card */}
          <div className="joke-card-front">
            <p className="joke-setup">{currentElem.setup}</p>
            <p className="joke-type">{currentElem.type}</p>
            <button onClick={handleFlip}>Reveal Answer</button>
          </div>
          {/* Back side of the card */}
          <div className="joke-card-back">
            <p className="joke-punchline">{currentElem.punchline}</p>
            <button onClick={handleFlip}>Hide Answer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JokesCard;
