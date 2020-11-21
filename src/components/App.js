// react
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

// my components
import Intro from "./Intro.js"
import About from "./About.js"
import Portfolio from "./Portfolio.js"
import Contact from "./Contact.js"

// css for this component
import '../css/App.css';

// media for this component
import bgImg from '../media/background-image3.jpg'

function App() {

  const [ currentPage, setCurrentPage ] = useState('')

  const pages = [
    '/home',
    '/about',
    '/contact',
    '/portfolio'
  ]

  const updatePageFromNav = (event) => {
    setCurrentPage(`/${event.target.innerText.toLowerCase()}`)
  }

  const checkUrl = () => {
    
    let i=0;
    let found = false;
    let pathname = window.location.pathname;
    while(i<pages.length && found === false) {
      if(pathname == pages[i++]) {
        found = true;
      }
    }

    if(found === false) {
      setCurrentPage('/home')
    } else {
      setCurrentPage(pathname.toLowerCase())
    }

  }

  const updateNavButtons = () => {
    const navBtns = document.querySelectorAll('.nav-button')
    const pathname = currentPage.slice(1)

    navBtns.forEach(btn => {
      if(btn.id === `${pathname}-nav-button`) {
        btn.classList.add('selected')
        btn.classList.remove('unselected')
      } else {
        btn.classList.remove('selected')
        btn.classList.add('unselected')
      }
    })
  }

  useEffect(() => {
    updateNavButtons();
  }, [currentPage])

  useEffect(() => {
    checkUrl()
  }, [])

  return (
    <div className="App" style={{backgroundImage:`url(${bgImg})`}}>
      <div className='nav-button-container'>
        <button onClick={updatePageFromNav} id='home-nav-button' className='nav-button' > Home </button>
        <button onClick={updatePageFromNav} id='about-nav-button' className='nav-button' > About </button>
        <button onClick={updatePageFromNav} id='portfolio-nav-button' className='nav-button' > Portfolio </button>
        <button onClick={updatePageFromNav} id='contact-nav-button' className='nav-button' > Contact </button>
      </div>
        <BrowserRouter>
          <AnimatePresence>
            <Switch> 
              <Route path="/">
                {(currentPage!=='')?<Redirect to={currentPage} />:null}
                  <Route path='/home' >
                    <Intro/>
                  </Route>
                  <Route path='/about'>
                    <About />
                  </Route>
                  <Route path='/portfolio'>
                    <Portfolio />
                  </Route>
                  <Route path='/contact'>
                    <Contact />
                  </Route>
              </Route>
            </Switch>
          </AnimatePresence>
        </BrowserRouter>
    </div>
  );
}

export default App;
