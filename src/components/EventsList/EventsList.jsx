import React, { useEffect, useState } from "react";
import Event from "./Event";

const EventList = () => {
  const [event, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDataEvents() {
      const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=5a429d27b33b99f04ef83ad022eb83c6&hash=f3f30fdef9a2929d67ffbbeb5528db7b"
      );
      const data = await res.json();
      setIsLoading(false);
      setEvents(data.data.results);
    }
    getDataEvents();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen text-4xl text-center text-white flex items-center justify-center">
          Загрузка...
        </div>
      ) : (
        <>
          <h1 className="text-center text-white text-6xl my-3 underline">
            <span className="text-red-400 text-7xl">С</span>обытия
          </h1>
          <Event event={event} />
        </>
      )}
    </div>
  );
};

export default EventList;
