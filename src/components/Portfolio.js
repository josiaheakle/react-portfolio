
import {motion} from "framer-motion"

import "../css/Portfolio.css"

import Project from "./Project.js"


const Portfoio = (props) => {

    const tttDescr = 'This simple Tic Tac Toe application uses no frameworks and was made early within my education.'
    const myClimateDescr = 'Using the OpenWeatherMap weather Api for the weather data, this project uses React and is styled using no Css Frameworks.'
    const todoDescr = 'My simple checklist app, which uses no Front-End Framework. This application does, however, use Materialize for a Css Framework.'
    const shoppingListDescr = 'Another React application, this is a simple store-front mockup. This application was styled using no Css Frameworks.'


    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className='Portfolio main-container'>
            <h2> My Projects </h2>
            <div className='project-grid-container'>
                <Project title='My Climate' descr={myClimateDescr} ghLink='https://github.com/josiaheakle/weather-app/' appLink="https://josiaheakle.github.io/weather-app/" />
                <Project title='Todo' descr={todoDescr} ghLink='https://github.com/josiaheakle/todo-list/' appLink="https://josiaheakle.github.io/todo-list/" />
                <Project title='Woodland Cabins' descr={shoppingListDescr} ghLink='https://github.com/josiaheakle/shopping-cart/' appLink="https://josiaheakle.github.io/shopping-cart/" />
                <Project title='Tic Tac Toe' descr={tttDescr} ghLink='https://github.com/josiaheakle/tic-tac-toe/' appLink="https://josiaheakle.github.io/tic-tac-toe/" />
            
            </div>
            
        </motion.div> 
    );
}

export default Portfoio;