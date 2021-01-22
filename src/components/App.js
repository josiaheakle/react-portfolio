// react
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


// my components
import Intro from "./Intro.js"
import About from "./About.js"
import Navbar from "./Navbar.js";
import Portfolio from "./Portfolio.js"
import Contact from "./Contact.js"

// css for this component
import '../css/App.css';

// media for this component
import bgVid from '../media/back-video.mp4'

function App() {

  const [ currentPage, setCurrentPage ] = useState('');
  const [ introFirstMount, setIntroFirstMount ] = useState(true); // set false after first mount

  const setIntroAnimDone = () => {
    setIntroFirstMount(false);
  }

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    setTimeout(() => {
      setIntroAnimDone();
    }, 5000)
  }, [])

  return (
    // style={{backgroundImage:`url(${bgImg})`}}
    <div className="App" >
      <video autoPlay muted loop id="background-video">
        <source src={bgVid} type="video/mp4"/>
      </video>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick/>
      <Navbar updateCurrentPage={updateCurrentPage} />
        <BrowserRouter>
          <AnimatePresence>
            <Switch> 
              <Route path="/">
                {(currentPage!=='')?<Redirect to={currentPage} />:null}
                  <Route path='/home' >
                    <Intro setAfterFirstMount={setIntroAnimDone} isFirstMount={introFirstMount} />
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


// Video by GamOl from Pexels