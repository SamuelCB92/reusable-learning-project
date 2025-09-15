import "./App.css";
import { useState } from "react";
import PokemonApp from "./components/apps/PokemonApp/PokemonApp";
import TestApp from "./components/apps/TestApp/TestApp";
import FormsApp from "./components/apps/FormsApp/FormsApp";
import TypeScriptApp from "./components/typescriptapps/TypeScriptApp.tsx";
import CartApp from "./components/typescriptapps/ShoppingCartApp/CartApp";

function App() {
  const [currentApp, setCurrentApp] = useState("shopcart");

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
      case "shopcart":
        return <CartApp />;
      default:
        return <CartApp />;
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
        <button className="mr-4" onClick={() => setCurrentApp("shopcart")}>
          ShopCart
        </button>
      </nav>
      {renderApp()}
    </div>
  );
}

export default App;

//we installed prop-types which lets us define types for props within an object(accepts different types but indicates error), but arent using it at current version - we then moved to typescript

/*Key Areas to Work On:

🎯 2. React Patterns (Medium Priority)

Controlled components: Always pair value={state} with onChange
Immutable updates: Use filter() for removal, not splice()
useEffect dependencies: Always include the [] dependency array

🎯 3. State Management (Low Priority)

State types: Arrays for lists, strings for text inputs
Loading states: Remember to set loading to false
Input clearing: Reset form inputs after submission


🚀 Your Learning Plan:
 Week 2: React Patterns Practice

Project 1: Shopping Cart
Focus: Add/Remove Items + State Management

Add products to cart
Remove items from cart
Show total count/price
Key skills: Array manipulation, immutable updates

Project 2: Search Filter
Focus: Controlled Input + Real-time Filtering

Input field for search term
Live filtering of a list as you type
Key skills: Controlled components, array filtering

Project 3: User Registration Form
Focus: Multiple Controlled Inputs

Name, email, password fields
Form validation
Submit handling
Key skills: Multiple useState hooks, form patterns

Week 3: useEffect Mastery
Practice scenarios:

Data fetching simulation
Cleanup functions
Dependency array behavior*/
