import { useContext } from "react";
import EventElement from "../Components/EventElement";
import { useParams, useNavigate } from "react-router-dom";
import Chat from "../Components/Chat";
import { data } from "../../data";
import { AppContext } from "../Context/AppContext";

const Event = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isWalletConnected, isRoomOwned, markRoomAsOwned } = useContext(AppContext);

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

  const roomId = item.roomId || item.id;
  const owned = isRoomOwned(roomId);

  let accessLevel = "no_wallet";
  if (isWalletConnected && !owned) {
    accessLevel = "wallet_no_nft";
  }
  if (isWalletConnected && owned) {
    accessLevel = "wallet_has_nft";
  }

  const handleDemoBuy = () => {
    if (!isWalletConnected) {
      alert("Conecta tu wallet para comprar el acceso a esta sala.");
      return;
    }

    // En la demo, marcar la sala como "comprada" solo a nivel local
    markRoomAsOwned(roomId);
  };

  return (
    <div>
      <div className="bg-black w-screen h-screen overflow-hidden">
        <EventElement
          item={item}
          accessLevel={accessLevel}
          isOwned={owned}
          onDemoBuy={handleDemoBuy}
        />
      </div>
      <div className="fixed bottom-3 right-6">
        <Chat />
      </div>
    </div>
  );
};

export default Event;
