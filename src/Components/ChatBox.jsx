const ChatBox = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="mt-4 w-80 border bg-white border-gray-300 rounded-lg shadow-lg p-4">
      <div className="text-center text-gray-600 text-sm">
        Get help on our whatsapp
      </div>
    </div>
  );
};

export default ChatBox;
