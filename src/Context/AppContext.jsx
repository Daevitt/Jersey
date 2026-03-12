import { createContext, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {
  // Estado simple para UI (no depende de Firebase)
  const [ipfsArray, setIpfsArray] = useState([])

  // Estado de wallet (login con wallet)
  const [walletAddress, setWalletAddress] = useState(null)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [isWalletLoading, setIsWalletLoading] = useState(false)
  const [walletError, setWalletError] = useState(null)

  // Salas "compradas" para la demo (por id de sala / roomId)
  const [ownedRoomIds, setOwnedRoomIds] = useState(() => {
    if (typeof window === "undefined") return []
    try {
      const raw = window.localStorage.getItem("ownedRoomIds")
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  const persistOwnedRoomIds = (next) => {
    if (typeof window === "undefined") return
    try {
      window.localStorage.setItem("ownedRoomIds", JSON.stringify(next))
    } catch {
      // ignorar errores de localStorage en la demo
    }
  }

  const isRoomOwned = (roomId) => {
    if (!roomId) return false
    // trabajamos con strings para ser consistentes con data.id
    const idStr = String(roomId)
    return ownedRoomIds.includes(idStr)
  }

  const markRoomAsOwned = (roomId) => {
    if (!roomId) return
    const idStr = String(roomId)
    setOwnedRoomIds((prev) => {
      if (prev.includes(idStr)) {
        return prev
      }
      const next = [...prev, idStr]
      persistOwnedRoomIds(next)
      return next
    })
  }

  const connectWallet = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      setWalletError("No se encontró ninguna wallet compatible (MetaMask).")
      return
    }

    try {
      setWalletError(null)
      setIsWalletLoading(true)

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts && accounts.length > 0) {
        setWalletAddress(accounts[0])
        setIsWalletConnected(true)
      } else {
        setWalletAddress(null)
        setIsWalletConnected(false)
      }
    } catch (error) {
      setWalletError(error?.message || "Error al conectar la wallet.")
      setWalletAddress(null)
      setIsWalletConnected(false)
    } finally {
      setIsWalletLoading(false)
    }
  }

  const disconnectWallet = () => {
    setWalletAddress(null)
    setIsWalletConnected(false)
    setWalletError(null)
    // En la demo NO borramos ownedRoomIds para que el efecto se mantenga tras desconectar
  }

  const value = {
    ipfsArray,
    setIpfsArray,
    walletAddress,
    isWalletConnected,
    isWalletLoading,
    walletError,
    connectWallet,
    disconnectWallet,
    ownedRoomIds,
    isRoomOwned,
    markRoomAsOwned,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
