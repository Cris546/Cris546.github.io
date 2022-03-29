import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Button.css'
import PDF from '../assests/Cristobal_Cortez_SWE.pdf'




function Button() {
    return(
        <Link to={PDF} target="_blank" >
            <button className='btn'>Resume</button>
        </Link>
    )
}

export default Button