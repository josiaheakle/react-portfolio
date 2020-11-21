
import "../css/Contact.css"

import {motion} from "framer-motion"
import Clipboard from "clipboard"
import { useEffect } from "react"
import { toast } from 'react-toastify';

const Contact = ( props ) => {

    const initClipboard = () => {
        const clipboard = new Clipboard('.copy-to-clipboard-button');

        clipboard.on('success', function() {
            toast.dark('Email copied to clipboard!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        });
        clipboard.on('error', function() {
            toast.dark('Error copying to clipboard!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
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