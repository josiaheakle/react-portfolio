
import "../css/Contact.css"

import {motion} from "framer-motion"
import Clipboard from "clipboard"
import { useEffect } from "react"

const Contact = ( props ) => {

    const initClipboard = () => {
        const clipboard = new Clipboard('.copy-to-clipboard-button');

        clipboard.on('success', function() {
            console.log(`copied`)

        });
        clipboard.on('error', function() {
            console.log(`not copied`)
        });
    }

    useEffect(() => {
        initClipboard()
    }, [])

    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className='Contact main-container'>
            <h2> Contact Me </h2> 
            <span> If you are interested in working with me, email me at <span className='to-color'> dev@josiaheakle.com </span>. </span> 
            <button data-clipboard-text="dev@josiaheakle.com" className='copy-to-clipboard-button'> Copy Email </button> 
        </motion.div>
    );
}

export default Contact;