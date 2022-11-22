import React, { useEffect, useState } from "react";
import Comic from "./Comic";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataComics() {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5a429d27b33b99f04ef83ad022eb83c6&hash=f3f30fdef9a2929d67ffbbeb5528db7b"
      );
      const data = await res.json();
      setIsLoading(false);
      setComics(data.data.results);
    }
    getDataComics();
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
            <span className="text-red-400 text-7xl">К</span>омиксы
          </h1>
        <Comic comics={comics} />
        </>
      )}
    </>
  );
};

export default ComicsList;