import MainSlider from "../Components/MainSlider";
import UpcomingSlider from "../Components/UpcomingSlider";
import Chat from "../Components/Chat";
import { data } from "../../data";

const Events = () => {
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
