import EventElement from "../Components/EventElement";
import { useParams, useNavigate } from "react-router-dom";
import Chat from "../Components/Chat";
import { data } from "../../data";

const Event = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = data.find((event) => event.id === id);

  if (!item) {
    return (
      <div className="w-screen h-screen bg-black flex flex-col justify-center items-center text-white gap-4">
        <div className="text-2xl">Event not found</div>
        <button
          className="bg-[#FF9011] px-6 py-2 rounded-md text-black font-semibold"
          onClick={() => navigate("/Events")}
        >
          Back to Events
        </button>
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
