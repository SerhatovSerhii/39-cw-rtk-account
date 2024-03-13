import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Guest from "./components/Guest"
import Profile from "./components/Profile"

const App = () => {

const token = '12345'

  return (
    
       <Routes>
         <Route path="/" element={token ? <Navigate to={'/profile'}/> : <Guest />} />
         <Route path="/profile" element={token ? <Profile /> : <Navigate to={'/'} />} />
         <Route path="/logout" element={<Profile />} />

       </Routes>
  )
}

export default App
