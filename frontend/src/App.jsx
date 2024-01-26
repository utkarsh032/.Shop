import './App.css'
import HomeScreen from './Screen/HomeScreen'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main className='py-6'>
        <HomeScreen />
      </main>
      <Footer />
    </>
  )
}

export default App
