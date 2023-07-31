// Import Required
import React from 'react';



// Navi component
function Navigation () {
    return (
        <ul className='nav justify-content-end'>  
            <li className='nav-item'>
                <a className='nav-link active' href='#'>About Me</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Projects</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Contact</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Resume</a>
            </li>
        </ul>
    );
}

export default Navigation;