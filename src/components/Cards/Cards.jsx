import React from "react";
import IMG1 from "../../assets/img/character.jpg";
import IMG2 from "../../assets/img/comics.jpg";
import IMG3 from "../../assets/img/events.jpg";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <section className="flex  justify-center items-center gap-4 mx-6 p-4">
      <div className="w-1/3 hover:-translate-x-2 transition-all">
        <Link to="/characters">
          <img src={IMG1} alt="characters" className="rounded-l-full"/>
        </Link>
      </div>
      <div className="w-1/3 hover:scale-95 transition-all">
        <Link to="comics">
          <img src={IMG2} alt="comics" className="rounded"/>
        </Link>
      </div>
      <div className="w-1/3 hover:translate-x-2 transition-all">
        <Link to="events">
          <img src={IMG3} alt="events" className="rounded-r-full"/>
        </Link>
      </div>
    </section>
  );
};

export default Cards;