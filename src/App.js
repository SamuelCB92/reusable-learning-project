import "./App.css";
import { useState } from "react";
import PokemonApp from "./components/apps/PokemonApp/PokemonApp";
import TestApp from "./components/apps/TestApp/TestApp";
import FormsApp from "./components/apps/FormsApp/FormsApp";
import TypeScriptApp from "./components/typescriptapps/TypeScriptApp.tsx";

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
      case "typescript":
        return <TypeScriptApp />;
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
        <button className="mr-4" onClick={() => setCurrentApp("typescript")}>
          Typescript
        </button>
      </nav>
      {renderApp()}
    </div>
  );
}

export default App;

//we installed prop-types which lets us define types for props within an object(accepts different types but indicates error), but arent using it at current version - we then moved to typescript

/*Key Areas to Work On:
🎯 1. JavaScript Syntax (High Priority)

Function calls: useState() not useState[]
Array methods: setTodos([...todos, item]) not setTodos[...todos, item]
Method chaining: .then(data => setUser(data)) not .then(setUser(data))

🎯 2. React Patterns (Medium Priority)

Controlled components: Always pair value={state} with onChange
Immutable updates: Use filter() for removal, not splice()
useEffect dependencies: Always include the [] dependency array

🎯 3. State Management (Low Priority)

State types: Arrays for lists, strings for text inputs
Loading states: Remember to set loading to false
Input clearing: Reset form inputs after submission


🚀 Your Learning Plan:
Week 1: JavaScript Fundamentals Review
javascript// Practice these syntax patterns daily:
const [state, setState] = useState(initial); // () not []
setState(newValue); // () not []
array.filter() // for removing items
array.map() // for transforming
Week 2: React Patterns Practice
Build these mini-projects:

Shopping cart (add/remove items)
Search filter (controlled input + filtering)
User registration form (multiple controlled inputs)

Week 3: useEffect Mastery
Practice scenarios:

Data fetching simulation
Cleanup functions
Dependency array behavior*/
