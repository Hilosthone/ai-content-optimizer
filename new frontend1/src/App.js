import "./App.css";
import Navbar from "./Pages/Navbar";
import HeroPage from "./Pages/HeroPage";
import Paste from "./Pages/Paste";
import Output from "./Pages/Output";
import How from "./Pages/How";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App1">
      <div className="App">
        <Navbar />

        <section id="hero">
          <HeroPage />
        </section>

        <section id="optimizer">
          <Paste />
        </section>

        <section id="preview">
          <Output />
        </section>

        <section id="how">
          <How />
        </section>
      </div>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
