import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RewardCoins from "./RewardCoins";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rewardToken, setRewardToken] = useState(0);
  const navigate = useNavigate();

  // 🔒 MOCK TEMPORAL (sin Firebase)
  useEffect(() => {
    // Simulamos un usuario logueado
    const mockUserLoggedIn = false; // cambia a true si quieres probar UI logueada

    if (mockUserLoggedIn) {
      setIsLoggedIn(true);
      setRewardToken(120); // tokens simulados
    } else {
      setIsLoggedIn(false);
      setRewardToken(0);
    }
  }, []);

  return (
    <div className="flex w-full justify-between py-3 items-center">
      <div className="uppercase font-jaini text-5xl">
        Museum Ticketing
      </div>

      <div>
        {!isLoggedIn ? (
          <div className="flex gap-2">
            <button
              className="px-4 py-2"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </button>

            <button
              className="px-4 py-2 border-2 border-zinc-600 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        ) : (
          <RewardCoins coins={rewardToken} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
