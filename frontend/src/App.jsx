import './App.css'
import HomeScreen from './Screen/HomeScreen'
import Footer from './components/Footer'
import Header from './components/Header'
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
