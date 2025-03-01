
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Click from './pages/Click'
import Dash from './pages/Dash'
import Footer from './pages/Footer'
import Landing from './pages/Landing'

function App() {


  return (
    <div className='bg-black'>
      <Navbar/>
      <Landing/>
      <About/>
      <Dash/>
      <Click/>
      <Footer/>
    </div>
  )
}

export default App
