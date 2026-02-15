import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

// Change this to your WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = "1234567890";
// Optional: pre-filled message the user will see when they open the chat
const WHATSAPP_MESSAGE = "Hi! I need help on the museum.";

const Chat = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="flex flex-col items-center">
      <div className="self-end">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white shadow-md hover:bg-[#1ebe57] focus:outline-none transition-all duration-300 rounded-full p-5 inline-flex items-center justify-center"
        >
          <IoLogoWhatsapp size={25} />
        </a>
      </div>
    </div>
  );
};

export default Chat;
