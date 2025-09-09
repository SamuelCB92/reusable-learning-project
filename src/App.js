import "./App.css";
import { useState } from "react";

function App() {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const data = await res.json();
      setPokeData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input
          placeholder="Ex: Gengar"
          onChange={(event) => setPokeName(event.target.value)}
        ></input>
        <button onClick={fetchData}>Qual o tipo?</button>
        <h2>
          {pokeData?.types?.map((a, i) => (
            <div key={i}>{a.type.name}</div>
          ))}
        </h2>
      </div>
    </>
  );
}
export default App;

//Digitar nome -> nome é substituído na url -> clicar botão -> fetch url -> converter dados -> guardar dados -> apresentar dados
