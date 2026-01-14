import MainSlider from "../Components/MainSlider";
import { useEffect, useState } from "react";
import UpcomingSlider from "../Components/UpcomingSlider";
import Loader from "../Components/Loader";
import Chat from "../Components/Chat";

const Events = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // UI ONLY: datos mock para evitar Firebase
    setLoading(true);

    const mockEvents = [];

    setTimeout(() => {
      setData(mockEvents);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-black w-screen relative h-screen overflow-x-hidden">
      <MainSlider data={data} />
      <div className="mt-12">
        <div className="text-white text-2xl mx-10">Upcoming Events</div>
      </div>
      <div className="mt-10 mb-10">
        <UpcomingSlider data={data} />
      </div>
      <div className="fixed bottom-3 right-6">
        <Chat />
      </div>
    </div>
  );
};

export default Events;
