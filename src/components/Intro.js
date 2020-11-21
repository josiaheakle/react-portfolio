
import "../css/Intro.css"

import {motion} from "framer-motion"

const Intro = (props) => {

    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className='Intro main-container'>
            <h1> Responsive. Clean. <span className='to-color'>Stable.</span> </h1>
            <h2 className='josiah-eakle-header'> <span className='to-color'>Josiah Eakle</span> : Front-End Devloper </h2>

        </motion.div>
    );
}

export default Intro;