import { useState } from 'react'
// import Navbar from './components/NavBar' 
import Home from './screens/Home'
import './App.css'
import {BrowserRouter as Router, Routes, Route,  Link} from 'react-router-dom'
import Footer from './components/Footer'
import Login from './screens/Login'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/footer" element={<Footer />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
      {/* <Route path="/terms" element={<Terms />} /> */}
      {/* <Route path="/privacy" element={<Privacy />} /> */}
      {/* <Route path="/help" element={<Help />} /> */}
      {/* <Route path="/faq" element={<FAQ />} /> */}
     </Routes>
    </Router>
  )
}

export default App
