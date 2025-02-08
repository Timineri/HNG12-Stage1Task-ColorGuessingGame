import ColorDisplay from "./components/ColorDisplay";
import ColorOptions from "./components/ColorOptions";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Reset from "./components/Reset";
import "./index.css";
function App() {
  return (
    <div className="color-game">
      <div>
        <Header />
        <ColorDisplay />
        <ColorOptions />
        <GameStatus />
        <Reset />
      </div>
    </div>
  );
}

export default App;
