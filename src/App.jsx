import gundamLogo from './assets/Gundam-RX.jpeg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Contact />
      <Footer />
      {/* <img src={gundamLogo} alt="logo" />
      <h1 className=' text-amber-500'>Coming soon..</h1> */}
    </>
  )
}

export default App
