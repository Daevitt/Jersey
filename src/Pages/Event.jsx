import EventElement from "../Components/EventElement";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Chat from "../Components/Chat";

const Event = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // UI ONLY: evento mock
    setLoading(true);

    const mockEvent = {
      id,
      title: "Demo Event",
      description: "UI-only mode",
    };

    setTimeout(() => {
      setItem(mockEvent);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-black w-screen h-screen overflow-hidden">
        <EventElement item={item} />
      </div>
      <div className="fixed bottom-3 right-6">
        <Chat />
      </div>
    </div>
  );
};

export default Event;
