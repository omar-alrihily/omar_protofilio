
import './App.css';
import Portfolio from './prtfolio';
import Navbar from './NavBar';
import Footer from './Footer';
import About from './About';



function App() {
  return (
    <div className="App">

      <Navbar/>
      <About />
      
    <Portfolio/>
    
    
   <footer>
    <Footer/>
    </footer>
     
    </div>
  );
}

export default App;
