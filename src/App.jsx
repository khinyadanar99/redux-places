import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import PlaceDetail from './components/PlaceDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
