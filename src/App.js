import 'react-toastify/dist/ReactToastify.css';
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Instructions from "./Components/Instructions/Instructions"
import Support from './Components/Support/Support';


function App() {
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Instructions/>
      <Support/>
    </div>
  )
}

export default App;
