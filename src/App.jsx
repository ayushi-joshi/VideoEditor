import React from 'react'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VideoEditor from './components/VideoEditor'
const App = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/editor' element={<VideoEditor/>}/>
    </Routes>
    </Router>
  )
}

export default App
