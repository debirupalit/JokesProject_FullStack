import "./App.css";
import Jokes from "./components/Jokes";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
