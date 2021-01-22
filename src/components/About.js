
import {motion} from "framer-motion"

import "../css/About.css"

import faceImg from "../media/me_n_son.jpg"

const About = (props) => {

    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className='About main-container'>




            <div className='about-info-container'>

                <div className='about-img-container'>
                    <img src={faceImg} className='about-img' alt='Josiah Eakle and son'></img>
                </div>
                <h2 className='about-header'> Hello, I'm <span className='to-color'>Josiah Eakle</span></h2>

                <p className='about-para'>     
                    Located in Knoxville TN, I have spent the last year consistently learning about and creating web applications. Starting with the front-end, I learned the basics (<span className='to-color'>HTML, CSS, JavaScript</span>) in addition to <span className='to-color'>React</span>.
                    Feeling confident with the front end, I continued to the backend with <span className='to-color'>Node</span> and <span className='to-color'>Express</span>, where I built a few REST APIs for my React applications. Additionally, I have collaborated with a team to create a Wordpress site, pushing me to learn PHP. 
                </p>


            </div>
            <div className='grid-about-info'>

                <div className='grid-info'>
                    <h3> Front-End </h3>
                    <p>A desire to develop a consistent clean product pushes responsive design. With an understanding of </p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li><a href="https://reactjs.org/" className='list-link'>React</a></li>
                    </ul>
                    <p> I am driven to 
                            create beautiful and functional websites, designed for a clean and streamlined experience for all users.</p>
                </div>
                <div className='grid-info'>
                    <h3> Back-End </h3>
                    <p>The Front-End of your application is only half the battle. If any authentication or data management is needed, you will need a back-end. Experience with </p>
                    <ul>
                        <li><a href="https://nodejs.org/en/" className='list-link'>Node.js</a></li>
                        <li><a href="https://expressjs.com/" className='list-link'>Express</a></li>
                        <li>PHP</li>
                    </ul>
                    <p>
                        provides me with the capabilities to create any full-stack application to fit your needs.
                    </p>
                </div>
                <div className='grid-info last'>
                    <h3> Management and Hosting </h3>
                    <p>Building the project is only useful if you can get your application on the internet. Understanding </p>
                        <ul>
                            <li>DNS Management</li>
                            <li>Hosting Platforms</li>
                            <li>Git and version control</li>
                        </ul>
                    <p> brings crucial skills to the table. My experience will prove to be imperative. </p>
                </div>
                {/* <div className='grid-info last'>
                    <h3> Frameworks </h3>
                    <p>While most projects don't necessarily need a Front-End framework, the ability to implement one can drasitcally improve your workflow. 
                        I have utilized  <a href="https://reactjs.org/" className='odin-link'>React</a> to streamline my front-end development. Additionally, I have worked with <a href="https://expressjs.com/" className='odin-link'>Express</a> in order
                        to create efficient back-ends and REST APIs.
                        </p>
                </div> */}
            </div>

        </motion.div> 
    );
}

export default About;