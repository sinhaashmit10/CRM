import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
// import Footer from "./Components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portolio/Portfolio";
import Skills from "./Components/Skills/Skills";



function App() {
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <ToastContainer position="bottom-center"/>
      {/* <Footer/> */}
    </div>
  )
}

export default App;
