import { useNavigate } from "react-router-dom";
import WelcomeImage from "../images/welcomeimage.png";
import "../styles/welcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/jokes");
  };

  return (
    <div className="welcome-container">
      <h2 className="welcome-heading">Welcome to LaughLounge 😂</h2>
      <img src={WelcomeImage} alt="Emoji laughing" className="welcome-image" />
      <h4 className="welcome-heading">Are you ready for some jokes?</h4>
      <button onClick={handleClick} className="welcome-button">
        Click Me
      </button>
    </div>
  );
};

export default WelcomePage;
