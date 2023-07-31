// Import Required
import React from 'react';



// Navi component
function Navigation () {
    return (
        <ul className='nav justify-content-end'>  
            <li className='nav-item'>
                <a className='nav-link active' href='#aboutMe'>About Me</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link ' href='#project'>Projects</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link ' href='#contact'>Contact</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link ' href='#Resume'>Resume</a>
            </li>
        </ul>
    );
}

export default Navigation;