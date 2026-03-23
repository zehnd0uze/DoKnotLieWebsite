import './index.css'
import Hero from './components/Hero'
import Story from './components/Story'
import Chapters from './components/Chapters'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SidebarNav from './components/SidebarNav'
import Multiplayer from './components/Multiplayer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <SidebarNav />
      <div id="hero">
        <Hero />
      </div>
      <Story />
      <Chapters />
      <Multiplayer />
      <Features />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
