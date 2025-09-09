import "./App.css";
import { useState } from "react";

function App() {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [property, setProperty] = useState("");

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
        <button
          onClick={() => {
            fetchData();
            setProperty("types");
          }}
        >
          Tipo
        </button>
        <button
          onClick={() => {
            fetchData();
            setProperty("abilities");
          }}
        >
          Habilidade
        </button>

        {pokeData?.[property]?.map((item, i) => {
          let value;
          switch (property) {
            case "types":
              value = item.type.name;
              break;
            case "abilities":
              value = item.ability.name;
          }
          return <span key={i}>{value}</span>;
        })}
      </div>
    </>
  );
}
export default App;

//Digitar nome -> nome é substituído na url -> clicar botão -> fetch url -> converter dados -> guardar dados -> apresentar dados
//Ao clicar, define property -> property is mapped
