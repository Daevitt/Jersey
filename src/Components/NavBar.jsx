import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import RewardCoins from "./RewardCoins";

const NavBar = () => {
  const {
    isWalletConnected,
    walletAddress,
    isWalletLoading,
    connectWallet,
    disconnectWallet,
  } = useContext(AppContext);

  const shortAddress =
    walletAddress && walletAddress.length > 10
      ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
      : walletAddress;

  return (
    <div className="flex w-full justify-between py-3 items-center">
      <div className="uppercase font-jaini text-5xl">
        Museum Ticketing
      </div>

      <div>
        {!isWalletConnected ? (
          <button
            className="px-4 py-2 border-2 border-zinc-600 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
            onClick={connectWallet}
            disabled={isWalletLoading}
          >
            {isWalletLoading ? "Conectando..." : "Connect Wallet"}
          </button>
        ) : (
          <div className="flex gap-4 items-center">
            <RewardCoins coins={120} />
            <button
              className="px-4 py-2 border-2 border-zinc-600 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
              onClick={disconnectWallet}
            >
              {shortAddress || "Wallet conectada"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
