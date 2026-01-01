import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ActivityPage from './pages/ActivityPage'
import About from './pages/About'
import Tip from './pages/Tip'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='activitypage' element={<ActivityPage/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/tips' element={<Tip />} />
      </Routes>
    </div>
  )
}

export default App