import { lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/partials/Header/Header'

const About = lazy(()=>import("./components/pages/About/About"))
const Service = lazy(()=> import("./components/pages/Service/Service"))
const Home = lazy(()=> import("./components/pages/Home/Home"))
const Contact = lazy(()=>import("./components/pages/Contact/Contact"))
const Portfolio = lazy(()=>import("./components/pages/Portfolio/Portfolio"))
const Error = lazy(()=>import("./components/pages/Error/Error"))

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Header/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
    <Route path='/*' element={<Error/>} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
