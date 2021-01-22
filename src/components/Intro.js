
import "../css/Intro.css"

import {motion, useSpring} from "framer-motion"
import { useEffect, useState } from "react";

const Intro = (props) => {

    // props >> setAfterFirstMount, isFirstMount

    const [ animDone, setAnimDone ] = useState(false);

    useEffect(() => {

        console.log('isFirstMount', props.isFirstMount)

        if(props.isFirstMount) {
            setTimeout(() => {
                props.setAfterFirstMount();
                setAnimDone(true);
            }, 4000)
        } else {
            setAnimDone(true);
        }

    }, [props.isFirstMount])

    const mainVariants = {

    }

    const spanVariants = [
    {
        start: {
            opacity: 0
        },
        firstLoadSpan: {
            opacity: 1,
            transition: {
                delay: .5
            }
        },
        notFirstLoad: {
            opacity: 1 
        }
    }, 
    {
        start: {
            opacity: 0
        },
        firstLoadSpan: {
            opacity: 1,
            transition: {
                delay: 1.5
            }
        },
        notFirstLoad: {
            opacity: 1 
        }
    },
    {
        start: {
            opacity: 0
        },
        firstLoadSpan: {
            opacity: 1,
            transition: {
                delay: 2.5
            }
        },
        notFirstLoad: {
            opacity: 1 
        }
    },
    {
        start: {
            opacity: 0
        },
        firstLoadSpan: {
            opacity: 1,
            transition: {
                delay: 3.5
            }
        },
        notFirstLoad: {
            opacity: 1 
        }
    },
    ]

    return(
        <motion.div exit={ {opacity: 0} } initial={ {opacity: 0} } animate={ {opacity:1} } className={`Intro main-container ${(animDone===false)?'hidden':'done'}`}>
            <h1> 
                <motion.span initial='start' animate={(props.isFirstMount === true)? 'firstLoadSpan': 'notFirstLoad'} variants={spanVariants[0]}  >Responsive. </motion.span>
                <motion.span initial='start' animate={(props.isFirstMount === true)? 'firstLoadSpan': 'notFirstLoad'} variants={spanVariants[1]}  >Clean. </motion.span>
                <motion.span initial='start' animate={(props.isFirstMount === true)? 'firstLoadSpan': 'notFirstLoad'} variants={spanVariants[2]} className='to-color'>Stable.</motion.span> 
            
            </h1>
            <h2 className='josiah-eakle-header'> 
                <motion.span initial='start' animate={(props.isFirstMount === true)? 'firstLoadSpan': 'notFirstLoad'} variants={spanVariants[3]} className='to-color'>Josiah Eakle </motion.span>
                <motion.span initial='start' animate={(props.isFirstMount === true)? 'firstLoadSpan': 'notFirstLoad'} variants={spanVariants[3]} >Full-Stack Devloper</motion.span>
            </h2>
        </motion.div>
    );
}

export default Intro;