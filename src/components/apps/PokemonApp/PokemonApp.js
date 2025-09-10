import { useState } from "react";

function PokemonApp() {
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
      <div className="bg-purple-900 min-h-screen flex flex-col items-center justify-center text-white">
        <input
          className="p-2 text-center text-black font-bold"
          placeholder="Ex: Gengar"
          onChange={(event) => setPokeName(event.target.value)}
        ></input>
        <button
          className="w-24 bg-black border-solid rounded-full"
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
              break;
          }
          return (
            <span className="showdata" key={i}>
              {value}
            </span>
          );
        })}
      </div>
    </>
  );
}
export default PokemonApp;
