import Navbar from "./components/Navbar/navbar";
import Intro from  "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education />
      <Works/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
