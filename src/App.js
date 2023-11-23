import 'react-toastify/dist/ReactToastify.css';
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";



function App() {
  return(
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  )
}

export default App;
