import Nav from './competents/Nav/Nav'
import Header from './competents/Header/Header'
import About from './competents/About/About'
import Expriance from './competents/Expriance/Expriance'
import Service from './competents/Service/Service'
import Portfolio from './competents/Portfolio/Portfolio'
import Testimonial from './competents/Testimonial/Testimonial'
import Contact from './competents/Contact/Contacts'
import Footer from './competents/Footer/Footer'





function App() {
  return (
    <div className="App">
      
      <Header/>
      <Nav/>
      <About/>
      <Expriance/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
