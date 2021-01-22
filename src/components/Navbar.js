import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const Navbar = (props) => {

    // props - updateCurrentPage

    const [ currentPage, setCurrentPage ] = useState('');

    const updatePageFromNav = (event) => {
        setCurrentPage(`/${event.target.innerText.toLowerCase()}`)
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

    const checkUrl = () => {
        const pages = [
          '/home',
          '/about',
          '/contact',
          '/portfolio'
        ]
        let i=0;
        let found = false;
        let pathname = window.location.pathname;
        while(i<pages.length && found===false) {
          if(`${pathname}` === `${pages[i++]}`) {
            found = true;
          }
        }
        if(found === false) {
          setCurrentPage('/home')
        } else {
          setCurrentPage(pathname.toLowerCase())
        }
    }

    useEffect(() => {
        updateNavButtons();
        props.updateCurrentPage(currentPage);
    }, [currentPage])

    useEffect(() => {
        checkUrl()
    }, [])

    const animVariants = {
      start: {opacity: 0},
      firstLoadOnHome: { 
        opacity: 1,
        transition: {delay: 4.5}
      },
      notHomeOnLoad: {opacity: 1}
    }

    return (
      <motion.div initial='start' animate={`${(currentPage==='/home')?'firstLoadOnHome':'notHomeOnLoad'}`} variants={animVariants} className='nav-button-container'>
        <button onClick={updatePageFromNav} id='home-nav-button' className='nav-button selected' > Home </button>
        <button onClick={updatePageFromNav} id='about-nav-button' className='nav-button unselected' > About </button>
        <button onClick={updatePageFromNav} id='portfolio-nav-button' className='nav-button unselected' > Portfolio </button>
        <button onClick={updatePageFromNav} id='contact-nav-button' className='nav-button unselected' > Contact </button>
      </motion.div >
    );
}

export default Navbar;