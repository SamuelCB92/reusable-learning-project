import { useState, useRef } from "react";

function PokemonApp() {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [property, setProperty] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  async function fetchData() {
    if (!pokeName.trim()) return;
    setPokeData(null);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const data = await res.json();
      setPokeData(data);
      setError("");
    } catch (error) {
      setError("Not a pokemon name");
    }
  }

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div className="bg-purple-900 min-h-screen flex flex-col items-center justify-center text-white">
        <input
          className="p-2 text-center text-black font-bold"
          placeholder="Ex: Gengar"
          onChange={(event) => setPokeName(event.target.value)}
          onFocus={() => {
            setPokeData(null);
            setError("");
          }}
          ref={inputRef}
        ></input>
        <button
          className="w-24 bg-black border-solid rounded-full"
          onClick={() => {
            fetchData();
            setProperty("types");
            focusInput();
          }}
        >
          Tipo
        </button>
        <button
          onClick={() => {
            fetchData();
            setProperty("abilities");
            focusInput();
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
        {error && <div>{error}</div>}
      </div>
    </>
  );
}
export default PokemonApp;

//change fetch to axios, make a hook to fetch and other functionality
