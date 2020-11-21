
import "../css/About.css"

import faceImg from "../media/face-img.jpg"

const About = (props) => {

    return(
        <div className='About main-container'>
            <div className='about-info-container'>
                <div className='about-img-container'>
                    <img src={faceImg} className='about-img'></img>
                </div>
                <h2 className='about-header'> Hello, I'm <span className='to-color'>Josiah Eakle</span></h2>
                <p className='about-para'>     
                    Located in Oak Ridge TN, I have been passionately learning web development following 
                    <a href="https://www.theodinproject.com/" className='odin-link'>The Odin Project</a>
                    . I have completed the Front-End course and 
                    am continuing to learn to become a Full-Stack developer. Through this course, I have learned
                    plain HTML, CSS, JavaScript and have spent quality time practicing with 
                    <a href="https://reactjs.org/" className='odin-link'>React</a>
                    , the 
                    front-end framework.
                </p>
            </div>
            <div className='grid-about-info'>
                <div className='grid-info'>
                    <h3> Responsive </h3>
                    <p>A desire to develop a consistent clean product pushes responsive design. With an understanding of css, I am driven to 
                            create beautiful and functional websites, designed to look clean for all users.</p>
                </div>
                <div className='grid-info'>
                    <h3> Mobile Friendly </h3>
                    <p>We live in a day and age where everyone owns a smartphone, our websites should cater to the mobile audience.
                                With this in mind, I am adamant about creating a streamlined and attractive experience for the mobile user.
                                All legitimate websites should be functional and clean on all devices.
                            </p>
                </div>
                <div className='grid-info'>
                    <h3> Frameworks </h3>
                    <p>While most projects don't necessarily need a Front-End framework, the ability to implement one can drasitcally improve your workflow. 
                        As of yet, I have utilized  <a href="https://reactjs.org/" className='odin-link'>React</a>. While I have yet to use any other Front-End
                        Framework, I am looking forward to trying Angluar, Vue, and Svelte.

                        </p>
                </div>
            </div>

        </div> 
    );
}

export default About;