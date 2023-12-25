import Works from "./competents/Works/Works";
import Intro from "./competents/Intro/Intro";
import NavBar from "./competents/Navbar/NavBar";
import Skills from "./competents/Skills/Skills";
import Contacts from "./competents/Contact/Contacts";
import Footer from "./competents/Footer/Footer";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Footer/>
     
    </div>
  );
}

export default App;
