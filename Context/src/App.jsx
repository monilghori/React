import React from 'react'
import { useContext } from 'react'
import './App.css'
import Page from './Page'

const UseContext = React.createContext()
function App() {



  return (
    <>
      <UseContext.Provider value={{username : "Monil ghori"}}>
        <Page />
      </UseContext.Provider>
    </>
  )
}
export { UseContext }
export default App
