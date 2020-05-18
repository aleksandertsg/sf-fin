import React, { createContext, useContext, useState } from 'react'


const AppContext = createContext({})

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [web3, setWeb3] = useState(null)
  const [account, setAccount] = useState(null)

  return (
    <AppContext.Provider value={{ user, setUser, web3, setWeb3, account, setAccount }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
