import "./App.css";
import { useState } from "react";
import PokemonApp from "./components/apps/PokemonApp/PokemonApp";
import TestApp from "./components/apps/TestApp/TestApp";
import FormsApp from "./components/apps/FormsApp/FormsApp";

function App() {
  const [currentApp, setCurrentApp] = useState("formsapp");

  const renderApp = () => {
    switch (currentApp) {
      case "pokemon":
        return <PokemonApp />;
      case "testapp":
        return <TestApp />;
      case "formsapp":
        return <FormsApp />;
      default:
        return <FormsApp />;
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
        <button className="mr-4" onClick={() => setCurrentApp("formsapp")}>
          Forms
        </button>
      </nav>
      {renderApp()}
    </div>
  );
}

export default App;
