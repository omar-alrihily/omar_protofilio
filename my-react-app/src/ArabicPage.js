import React from 'react'

import NavbarAR from './NavbarAR';

import ArAbout from './ArAbout';

import ArProfile from './ArProfile';

import Footer from './Footer';

function ArabicPage() {
  return (
    <div style={{ direction: 'rtl', textAlign: 'right' }}>
    <NavbarAR/>
    <ArAbout/>
    <ArProfile/>

    <footer>
    <Footer/>
    </footer>

  </div>
  )
}

export default ArabicPage