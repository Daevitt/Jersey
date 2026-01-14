import { createContext, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {
  // Estado simple para UI (no depende de Firebase ni Wallet)
  const [ipfsArray, setIpfsArray] = useState([])

  const value = {
    ipfsArray,
    setIpfsArray,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
