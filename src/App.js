import 'react-toastify/dist/ReactToastify.css';
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Instructions from "./Components/Instructions/Instructions"
import Support from './Components/Support/Support';
import Form from './Components/Form/Form'

function App() {
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Instructions/>
      <Support/>
      <Form/>
    </div>
  )
}

export default App;
