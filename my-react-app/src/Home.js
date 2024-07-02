import React from 'react'

import Portfolio from './prtfolio';
import Navbar from './NavBar';
import Footer from './Footer';
import About from './About';
import './App.css';



function Home() {
  return (
    <div>

<Navbar/>
      <About />
      
    <Portfolio/>
    
    
   <footer>
    <Footer/>
    </footer>

    </div>
  )
}

export default Home
