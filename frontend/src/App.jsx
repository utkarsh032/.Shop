import './App.css'
import HomeScreen from './Screen/HomeScreen'
import ProductScreen from './Screen/ProductScreen';
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
        <Route path='/product/:id' element={<ProductScreen />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
