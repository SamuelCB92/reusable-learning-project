import "./App.css";
import { useState } from "react";
import PokemonApp from "./components/apps/pokemon-app/PokemonApp";
import TestApp from "./components/apps/TestApp/TestApp";

function App() {
  const [currentApp, setCurrentApp] = useState("testapp");

  const renderApp = () => {
    switch (currentApp) {
      case "pokemon":
        return <PokemonApp />;
      case "testapp":
        return <TestApp />;
      default:
        return <TestApp />;
    }
  };

  return (
    <div>
      <nav>
        <button className="mr-4" onClick={() => setCurrentApp("pokemon")}>
          Pokemon
        </button>
        <button className="mr-4" onClick={() => setCurrentApp("testapp")}>
          Teste
        </button>
      </nav>
      {renderApp()}
    </div>
  );
}

export default App;
