import "./App.css";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import Sec1 from "./components/Sec1.js";
import Career from "./components/Career.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sec1 />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
