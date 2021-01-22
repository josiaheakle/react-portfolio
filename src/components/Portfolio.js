
import {motion} from "framer-motion"

import "../css/Portfolio.css"

import Project from "./Project.js"


const Portfoio = (props) => {

    const tttDescr = 'This simple Tic Tac Toe application uses no frameworks and was made early within my education.'
    const myClimateDescr = 'Using the OpenWeatherMap weather Api for the weather data, this project uses React and is styled using no Css Frameworks.'
    const todoDescr = 'My simple checklist app, which uses no Front-End Framework. This application does, however, use Materialize for a Css Framework.'
    const shoppingListDescr = 'Another React application, this is a simple store-front mockup. This application was styled using no Css Frameworks.'
    const remiDescr = 'Remi is a simple full stack application designed to send text and email reminders.'
    const remiBullets = ['Utilizes React for the Front-End in addition to node and express for the Back-End.', 'The vonage SMS API as well as nodemailer provided the communications APIs.', 'Node-schedule was utilized to schedule the reminders.']
    const fatnDescr = 'Solely responsible for the end-to-end development of a REST API, an admin dashboard, and a dynamic Javascript component.';
    const fatnBullets = ['Created an API to save, serve, and manage data of statewide legislators.', 'Created an admin dashboard to securely update the data.', 'Created a front end component to responsively display the information.', 'Collaborated with a team to develop a wordpress site.']

    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className='Portfolio main-container'>
            <h2> My Projects </h2>
            <div className='project-grid-container'>

                <Project title='For All TN' descr={fatnDescr} bullets={fatnBullets} ghLink='https://github.com/josiaheakle/for-all-tn-admin' appLink='https://foralltn.org/' />
                <Project title='Remi Assistant' descr={remiDescr} bullets={remiBullets} ghLink='https://github.com/josiaheakle/remi-backend/' appLink="https://remiassistant.com/" />
                <Project title='My Climate' descr={myClimateDescr} ghLink='https://github.com/josiaheakle/weather-app/' appLink="https://josiaheakle.github.io/weather-app/" />
                <Project title='Todo' descr={todoDescr} ghLink='https://github.com/josiaheakle/todo-list/' appLink="https://josiaheakle.github.io/todo-list/" />
                <Project title='Woodland Cabins' descr={shoppingListDescr} ghLink='https://github.com/josiaheakle/shopping-cart/' appLink="https://josiaheakle.github.io/shopping-cart/" />
                <Project title='Tic Tac Toe' descr={tttDescr} ghLink='https://github.com/josiaheakle/tic-tac-toe/' appLink="https://josiaheakle.github.io/tic-tac-toe/" />
            
            </div>
            
        </motion.div> 
    );
}

export default Portfoio;