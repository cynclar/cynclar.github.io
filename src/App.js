import "./App.css";
import "./Gradients.css";

import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Certifications from "./components/certifications/Certifications";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

import cat from "./img/meme-cat.png";

function App() {
  return (
    <div className="App">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>
      <Nav />
      <div className="container">
        <Header />

        <div className="divider"></div>

        <About />

        <div className="divider"></div>

        <Experience />
      </div>

      <div className="divider special"></div>

      <div className="cert-container">
        <Certifications />
      </div>

      <div className="divider special"></div>

      <div className="container">
        <Education />

        <div className="divider"></div>

        <Contact />
      </div>
      <img src={cat} alt="cat" className="cat" />
    </div>
  );
}

export default App;
