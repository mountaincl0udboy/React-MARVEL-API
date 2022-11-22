import React from "react";

const Character = ({ heroes }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center mx-auto my-4">
      {heroes.map((heroe) => (
        <div key={heroe.id} className="flex flex-col items-center p-2">
          <h1 className="text-white text-3xl">{heroe.name}</h1>
          <a
            href={heroe.urls[0].url.replace("http", "https")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="w-72 h-72 hover:scale-95 transition-all duration-300 rounded-lg hover:rounded-3xl"
              src={heroe.thumbnail.path + "." + heroe.thumbnail.extension}
              alt={heroe.name}
            />
          </a>
          <ul className="text-white text-lg text-center">
            <li>Комиксов с участием: {heroe.comics.available}</li>
            <li>Историй: {heroe.stories.available}</li>
            <li className="text-white text-lg text-center">
              События:
              {heroe.events.available > 0
                ? heroe.events.available
                : " Информация отсутствует"}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Character;