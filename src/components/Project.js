
import gitHubIcon from "../media/GitHubIcon.png"
import "../css/Project.css"
import { useEffect } from "react"

const Project = ( props ) => {
    // props :
    //      title
    //      descr
    //      ghLink
    //      appLink
    //      bullets



    return (
        <div className='Project' id={`project-${props.title}`}>
            <div className='project-info'>
                <h3 className='project-title'>{props.title}</h3>
                <p className='project-descr'>{props.descr}</p>
                {(props.bullets) ? 
                    <ul className='project-bullets'>
                        {props.bullets.map((b, i) => {
                            return (
                            <li className='project-bullet'>
                                <p key={i} className='project-bullet-text' >{b}</p>
                             </li> 
                            );  
                        })}
                    </ul>
                :null}
                <div className='project-button-container'>
                    <a className='github-link project-link' href={props.ghLink} title='Source Code Link' >
                        <img className='github-icon' src={gitHubIcon} alt='Source Code' />
                    </a>
                    <a className='app-link project-link' href={props.appLink} title='Live Project Preview' >
                        <button className='project-link-button'> View </button>
                    </a>
                </div>
            </div>
        </div> 
    );
}

export default Project;