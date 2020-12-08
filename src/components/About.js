
import {motion} from "framer-motion"

import "../css/About.css"

import faceImg from "../media/me_n_son.jpg"

const About = (props) => {

    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className='About main-container'>




            <div className='about-info-container'>

                <div className='about-img-container'>
                    <img src={faceImg} className='about-img'></img>
                </div>
                <h2 className='about-header'> Hello, I'm <span className='to-color'>Josiah Eakle</span></h2>

                <p className='about-para'>     
                    Located in Oak Ridge TN, I have been passionately learning web development following 
                    <a href="https://www.theodinproject.com/" className='odin-link'>The Odin Project</a>, a full-stack curriculum teaching HTML, CSS, JavaScript, React, and Node.js 
                    . I have completed the course and am a capable Full-Stack developer. Through this course, I have learned
                    plain HTML, CSS, JavaScript, have spent quality time practicing with 
                    <a href="https://reactjs.org/" className='odin-link'>React</a>
                    , the 
                    front-end framework. Additionally, I have worked with Node.js and Express, the backend technologies.
                </p>



            </div>
            <div className='grid-about-info'>
                <div className='grid-info'>
                    <h3> Front-End </h3>
                    <p>A desire to develop a consistent clean product pushes responsive design. With an understanding of HTML, CSS, JavaScript, and <a href="https://reactjs.org/" className='odin-link'>React</a>., I am driven to 
                            create beautiful and functional websites, designed for a clean and streamlined experience for all users.</p>
                </div>
                <div className='grid-info'>
                    <h3> Back-End </h3>
                    <p>The Front-End of your application is only half the battle. If any authentication or data is needed, you will need a back-end. With a familiarity of 
                        <a href="https://nodejs.org/en/" className='odin-link'>Node.js</a> and <a href="https://expressjs.com/" className='odin-link'>Express</a>, 
                        I am capable of creating any full-stack application to fit your needs.
                            </p>
                </div>
                <div className='grid-info last'>
                    <h3> Frameworks </h3>
                    <p>While most projects don't necessarily need a Front-End framework, the ability to implement one can drasitcally improve your workflow. 
                        I have utilized  <a href="https://reactjs.org/" className='odin-link'>React</a>. In addition, I have worked with <a href="https://expressjs.com/" className='odin-link'>Express</a> in order
                        to create efficient back-ends and REST APIs.

                        </p>
                </div>
            </div>

        </motion.div> 
    );
}

export default About;