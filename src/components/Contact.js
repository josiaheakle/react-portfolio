
import "../css/Contact.css"

import {motion} from "framer-motion"

const Contact = ( props ) => {

    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className='Contact main-container'>
            <h2> Contact Me </h2> 
            <span> If you are interested in working with me, email me at <span className='to-color'> dev@josiaheakle.com </span>. </span> 
            <button  className='copy-button'> Copy Email </button> 
        </motion.div>
    );
}

export default Contact;