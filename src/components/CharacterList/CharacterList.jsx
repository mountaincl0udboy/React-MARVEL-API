import React, { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataCharacters() {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5a429d27b33b99f04ef83ad022eb83c6&hash=f3f30fdef9a2929d67ffbbeb5528db7b"
      );
      const data = await res.json();
      setIsLoading(false);
      setHeroes(data.data.results);
    }
    getDataCharacters();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen text-4xl text-center text-white flex items-center justify-center">
          Загрузка...
        </div>
      ) : (
        <>
          <h1 className="text-center text-white text-6xl my-3 underline">
            <span className="text-red-400 text-7xl">П</span>ерсонажи
          </h1>
          <Character heroes={heroes} />
        </>
      )}
    </>
  );
};

export default CharacterList;