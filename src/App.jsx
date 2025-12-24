import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nomatch from './pages/Nomatch'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Nomatch/>}/>

      </Routes>
    </div>
  )
}

export default App
