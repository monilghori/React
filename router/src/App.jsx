import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Component/Home"
import './App.css'
import Teachers from './Component/Teachers'
import Students from './Component/Students'
import Contact from './Component/Contact'
import Navigation from './Component/Navigation'
import Student from "./Component/Student"
function App() {


  return (
    <>
     <BrowserRouter>
     <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/students' element={<Students />} />
        <Route path='/students/:id' element={<Student />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
