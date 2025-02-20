import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header.jsx'
import Home from './Sections/Home.jsx'
import About from './Sections/About.jsx'
import Projects from './Sections/Projects.jsx'
import Contact from './Sections/Contact.jsx'

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App
