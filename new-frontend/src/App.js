import './App.css'
import Navbar from './Pages/Navbar'
import HeroPage from './Pages/HeroPage'
import Features from './Pages/Features' 
import Paste from './Pages/Paste'
import How from './Pages/How'
import Footer from './Pages/Footer'

function App() {
  return (
    <div className='App'>
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id='hero'>
          <HeroPage />
        </section>

        {/* Features Section */}
        <section id='features'>
          <Features />
        </section>

        {/* AI Input/Paste Section */}
        <section id='optimizer'>
          <Paste />
        </section>

        {/* How It Works Section */}
        <section id='how-it-works'>
          <How />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App
