
import gitHubIcon from "../media/GitHubIcon.png"
import "../css/Project.css"
import { useEffect } from "react"

const Project = ( props ) => {
    // props :
    //      title
    //      descr
    //      previewImg
    //      ghLink
    //      appLink

    // const handleIconAnim = () => {
    //     const ghIcon = document.getElementById(`project-${props.title}`).querySelector('.github-icon')
    //     console.log(ghIcon)
    //     ghIcon.addEventListener('mouseover', () => {
    //         ghIcon.style.animationName = 'github-icon-hover'
    //         ghIcon.style.animationnDuration = '200ms'

    //     })
    //     ghIcon.addEventListener('mouseout', () => {
    //         ghIcon.style.animationName = 'github-icon-hover-out'
    //         ghIcon.style.animationnDuration = '200ms'
    //     })
    // }

    // useEffect(() => {
    //     handleIconAnim()
    // }, [])

    return (
        <div className='Project' id={`project-${props.title}`}>
            <div className='project-info'>
                <h3 className='project-title'>{props.title}</h3>
                <p className='project-descr'>{props.descr}</p>
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